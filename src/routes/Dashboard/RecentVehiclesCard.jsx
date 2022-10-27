import {useSearchParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import CheckedInVehiclesQuery from "queries/CheckedInVehiclesQuery";
import ServerError from "components/misc/ServerError";
import TimeAgo from "components/datetime/TimeAgo";

export default function RecentVehiclesCard() {
    const [, setSearchParams] = useSearchParams()

    const {loading, error, data} = useQuery(CheckedInVehiclesQuery)

    if (loading) return <p>Cargando...</p>;
    if (error) return <ServerError/>;

    return (
        <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
            <p className="bg-gray-100 text-gray-700 text-base font-bold p-4">Vehículos recientes</p>
            <div className="px-4 pb-5">
                {
                    data.checkIns.data.map(vehicle => (
                        <div className="flex justify-between mt-5" key={vehicle.id}>
                            <button
                                onClick={() => setSearchParams({plate: vehicle.attributes.vehicle.data.attributes.plate})}
                                className="text-base text-gray-700 font-bold">
                                {vehicle.attributes.vehicle.data.attributes.plate}
                            </button>
                            <p className="text-sm text-gray-400 font-normal">
                                <TimeAgo datetime={vehicle.attributes.createdAt}/>
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}