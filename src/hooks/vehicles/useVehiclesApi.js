import {useLazyQuery, useMutation} from "@apollo/client";
import CreateVehicleMutation from "mutations/CreateVehicleMutation";
import VehiclesByPlateQuery from "queries/VehiclesByPlateQuery";

export default function useVehiclesApi({onSearch, setShowDeleteBtn, inputValue}) {

    const [createVehicle, {loading, error}] = useMutation(CreateVehicleMutation, {
        onCompleted: (data) => {
            onSearch(data.createVehicle.data.id)
            setShowDeleteBtn(true)
        }
    });

    const [getOrCreateVehicle, {loading: loadingQuery, error: errorQuery}] = useLazyQuery(VehiclesByPlateQuery, {
        fetchPolicy: "network-only",
        onCompleted: (data) => {
            if (data.vehicles.data.length > 0) {
                onSearch(data.vehicles.data[0].id)
                setShowDeleteBtn(true)
            } else {
                createVehicle({
                    variables: {
                        data: {
                            plate: inputValue.replace(' ', '')
                        }
                    }
                })
            }
        }
    })
    
    return [
        getOrCreateVehicle,
        {
            loading,
            error,
            loadingQuery,
            errorQuery
        }
    ]
}