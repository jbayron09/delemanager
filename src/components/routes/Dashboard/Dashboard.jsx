import {Header} from "components/main/Header";
import {SearchPlateForm} from "components/routes/Dashboard/SearchPlateForm";

export function Dashboard(){
    return (
        <>
            <Header/>
            <h3 className="mx-5 my-3 text-gray-700 text-sm font-bold">Parqueadero los 3 elefantes</h3>
            <SearchPlateForm/>
        </>
    )
}