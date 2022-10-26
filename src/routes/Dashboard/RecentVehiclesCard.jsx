import {useQuery} from "@apollo/client";
import {DateTime} from "luxon";
import SearchVehiclesCheckIns from "queries/SearchVehiclesCheckIns";
import {useCallback, useEffect, useState} from "react";

export default function RecentVehiclesCard(){
    const [now, setNow] = useState(DateTime.now())
    const updateNow = useCallback(() => setNow(DateTime.now()))

    useEffect(() => {
        const timeout = setTimeout(updateNow, 20000)

        return () => clearTimeout(timeout)
    }, [now])

    const {loading, error, data} = useQuery(SearchVehiclesCheckIns)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const calculateDiff = (checkInDate) => {
        const {days, hours, minutes, seconds} = now.diff(DateTime.fromISO(checkInDate), ["days", "hours","minutes","seconds"]).toObject()
        if(days>0) return `Hace ${Math.ceil(days)} ${days>1 ? "días" : "día"}`
        if(hours>0) return `Hace ${Math.ceil(hours)} ${hours>1 ? "horas" : "hora"}`
        if(minutes>0) return `Hace ${Math.ceil(minutes)} ${minutes>1 ? "minutos" : "minuto"}`
        if(seconds>0) return "hace un momento"
    }

    return (
        <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
            <p className="bg-gray-100 text-gray-700 text-base font-bold p-4">Vehiculos recientes</p>
            <div className="px-4 pb-5">
                {
                    data.checkIns.data.map(vehicle => (
                        <div className="flex justify-between mt-5" key={Math.random()}>
                            <p className="text-base text-gray-700 font-bold">
                                {vehicle.attributes.vehicle.data.attributes.plate}
                            </p>
                            <p className="text-sm text-gray-400 font-normal">
                                {`
                                    ${calculateDiff(vehicle.attributes.createdAt)}
                                `}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}