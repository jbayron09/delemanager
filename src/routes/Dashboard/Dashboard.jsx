import {useState} from "react";
import Header from "components/main/Header";
import SearchPlateForm from "routes/Dashboard/SearchPlateForm";
import SummaryCard from "routes/Dashboard/SummaryCard";
import {Navigate} from "react-router-dom";
import useAuth from "hooks/auth/useAuth";

export default function Dashboard(){
    const [showSummary, setShowSummary] = useState(false)
    const {isAuthenticated} = useAuth()

    const handleSearchPlate = () => setShowSummary(true)

    const onClear = () => setShowSummary(false)

    return (
        isAuthenticated ?
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
        </> : <Navigate to="/" />
    )
}