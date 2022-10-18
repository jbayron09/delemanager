import {useState} from "react";
import Header from "components/main/Header";
import SearchPlateForm from "routes/Dashboard/SearchPlateForm";
import SummaryCard from "routes/Dashboard/SummaryCard";

export default function Dashboard(){
    const [showSummary, setShowSummary] = useState(false)

    const handleSearchPlate = () => setShowSummary(true)

    const onClear = () => setShowSummary(false)

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
                {showSummary && <SummaryCard />}
            </div>
        </>
    )
}