import {useState} from "react";
import Header from "components/main/Header";
import SearchPlateForm from "routes/Dashboard/SearchPlateForm";
import SummaryCard from "routes/Dashboard/SummaryCard";

export default function Dashboard() {
    const [vehicleId, setVehicleId] = useState(null)

    const handleSearchPlate = vehicleId => setVehicleId(vehicleId)

    const onClear = () => setVehicleId(false)

    return (
        <>
            <Header/>
            <div className="px-4">
                <h3 className="my-4 text-gray-700 text-sm font-bold">Parqueadero los 3 elefantes</h3>
                <div className="mb-4">
                    <SearchPlateForm
                        onClear={onClear}
                        onSearch={handleSearchPlate}
                    />
                </div>
                {vehicleId && <SummaryCard vehicleId={vehicleId}/>}
            </div>
        </>
    )
}