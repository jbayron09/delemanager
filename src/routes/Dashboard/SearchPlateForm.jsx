import {Button} from "components/main/Button";
import {useState} from "react";

export function SearchPlateForm() {
    const  [inputValue, setInputValue] = useState('')

    const handleInputValue = (e) => {
        if(e.target.value.length<=7){
            let vehiclePlate = e.target.value.toUpperCase()
            if(e.target.value.length===3){
                vehiclePlate = vehiclePlate + ' '
            }
            if(e.target.value.length<=2){
            }
            setInputValue(vehiclePlate)
        }
    }

    return (
        <form className="flex flex-col px-5">
            <input
                className="rounded-md text-center text-6xl text-gray-800 font-bold mb-3 placeholder:text-gray-200 border-gray-100"
                type="text"
                placeholder="PLACA"
                value={inputValue}
                onChange={handleInputValue}
            />
            <Button
                fullWidth>
                Buscar
            </Button>
        </form>
    )
}