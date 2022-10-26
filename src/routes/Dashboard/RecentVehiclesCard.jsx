import {useQuery} from "@apollo/client";
import {DateTime} from "luxon";
import CheckedInVehiclesQuery from "queries/CheckedInVehiclesQuery";
import {useCallback, useEffect, useState} from "react";
import ServerError from "components/misc/ServerError";
import calculateDiff from "components/datetime/TimeAgo";

export default function RecentVehiclesCard(){
    const [now, setNow] = useState(DateTime.now())
    const updateNow = useCallback(() => setNow(DateTime.now()))

    useEffect(() => {
        const timeout = setTimeout(updateNow, 20000)

        return () => clearTimeout(timeout)
    }, [updateNow])

    const {loading, error, data} = useQuery(CheckedInVehiclesQuery)
    if (loading) return <p>Cargando...</p>;
    if (error) return <ServerError/>;

    return (
        <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
            <p className="bg-gray-100 text-gray-700 text-base font-bold p-4">Vehículos recientes</p>
            <div className="px-4 pb-5">
                {
                    data.checkIns.data.map(vehicle => (
                        <div className="flex justify-between mt-5" key={Math.random()}>
                            <p className="text-base text-gray-700 font-bold">
                                {vehicle.attributes.vehicle.data.attributes.plate}
                            </p>
                            <p className="text-sm text-gray-400 font-normal">
                                {`
                                    ${calculateDiff(now, vehicle.attributes.createdAt)}
                                `}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}