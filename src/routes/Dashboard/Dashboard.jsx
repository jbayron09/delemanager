import Header from "components/main/Header";
import {SearchPlateForm} from "routes/Dashboard/SearchPlateForm";
import SummaryCard from "routes/Dashboard/SummaryCard";

export default function Dashboard(){
    return (
        <>
            <Header/>
            <div className="px-4">
                <h3 className="my-4 text-gray-700 text-sm font-bold">Parqueadero los 3 elefantes</h3>
                <div className="mb-4">
                    <SearchPlateForm/>
                </div>
                <SummaryCard/>
            </div>
        </>
    )
}