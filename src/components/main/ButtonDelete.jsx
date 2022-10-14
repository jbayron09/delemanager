import {BiXCircle} from "react-icons/bi";

export default function ButtonDelete(){
    return (
        <button className="bg-red-500 text-xs text-white font-semibold flex items-center p-2 rounded-md w-min">
            <BiXCircle size='1.3rem' className="mr-2"/>
            BORRAR
        </button>
    )
}