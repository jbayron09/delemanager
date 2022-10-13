import {Header} from "components/main/Header";
import {SearchPlateForm} from "components/routes/Dashboard/SearchPlateForm";

export function Dashboard(){
    return (
        <>
            <Header/>
            <h3 className="mt-4 ml-4 text-gray-700">Parqueadero los 3 elefantes</h3>
            <SearchPlateForm/>
        </>
    )
}