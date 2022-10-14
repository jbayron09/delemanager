import {useState} from "react";
import Button from "components/main/Button";
import ButtonDelete from "components/main/ButtonDelete";

export default function SearchPlateForm({handleSearchPlate}) {
    const [inputValue, setInputValue] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [showButtonDelete, setShowButtonDelete] = useState(false)

    const handleKeyDelete = (e) => e.key === 'Backspace' && setIsDeleting(true)

    const handleInputValue = ({target: {value}}) => {
        if (value.length <= 7) {
            if (isDeleting && value.length === 3) {
                setInputValue(value.substring(0, 2))
            } else {
                setIsDeleting(false)
                let vehiclePlate = value.toUpperCase()
                if (value.length === 3)
                    vehiclePlate = vehiclePlate + ' '
                setInputValue(vehiclePlate)
            }
        }
    }

    return (
        <form className="flex flex-col"
              onSubmit={e=>
                {
                    e.preventDefault()
                    if(inputValue.length===7) {
                        handleSearchPlate(inputValue)
                        setShowButtonDelete(true)
                    }
                }}>
            <input
                className="relative rounded-md text-center text-6xl text-gray-800 font-bold mb-4 placeholder:text-gray-200 border-gray-100"
                type="text"
                placeholder="PLACA"
                value={inputValue}
                onChange={handleInputValue}
                onKeyDown={handleKeyDelete}
            />
            {showButtonDelete && <ButtonDelete className={"absolute top-[-16px]"}/>}
            <Button
                fullWidth>
                Buscar
            </Button>
        </form>
    )
}