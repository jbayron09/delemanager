import {useLazyQuery, useMutation} from "@apollo/client";
import CreateVehicleMutation from "mutations/CreateVehicleMutation";
import VehiclesByPlateQuery from "queries/VehiclesByPlateQuery";
import { useState } from "react"

export default function useVehiclesApi() {
    const [vehicleId, setVehicleId] = useState(undefined)
    const [createVehicle, {loading: loadingMutation, error: errorMutation}] = useMutation(CreateVehicleMutation, {
        onCompleted: (data) => {
            setVehicleId(data.createVehicle.data.id)
        }
    });

    const [searchVehicle, {loading: loadingQuery, error: errorQuery}] = useLazyQuery(VehiclesByPlateQuery, {
        fetchPolicy: "network-only"
    })

    const getOrCreateVehicle = plate => {
        searchVehicle({
            variables: {
                plate
            },
            onCompleted: (data) => {
                if (data.vehicles.data.length > 0) {
                    setVehicleId(data.vehicles.data[0].id)
                } else {
                    createVehicle({
                        variables: {
                            data: {
                                plate
                            }
                        }
                    })
                }
            }
        })
    }

    const reset = () => setVehicleId(undefined)
    
    return [
        getOrCreateVehicle,
        {
            loading: loadingQuery || loadingMutation,
            error: errorQuery ?? errorMutation,
            vehicleId,
            reset
        }
    ]
}