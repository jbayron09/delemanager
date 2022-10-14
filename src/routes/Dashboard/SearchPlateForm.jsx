import {useState} from "react";
import Button from "components/main/Button";
import PlateDeleteBtn from "components/main/PlateDeleteBtn";

export default function SearchPlateForm({onSearch, onClear}) {
    const [inputValue, setInputValue] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [showButtonDelete, setShowButtonDelete] = useState(false)
    const [showMessage, setShowMessage] = useState(false)

    const handleKeyDown = (e) => e.key === 'Backspace' && setIsDeleting(true)

    const handleChange = ({target: {value}}) => {
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

    const onDeletePlate = () => {
        setInputValue('')
        setShowMessage(false)
        setShowButtonDelete(false)
        onClear()
    }

    return (
        <form className="relative flex flex-col"
              onSubmit={e => {
                  e.preventDefault()
                  if (inputValue.length === 7) {
                      setShowMessage(false)
                      onSearch(inputValue)
                      setShowButtonDelete(true)
                  } else {
                      setShowButtonDelete(false)
                      setShowMessage(true)
                      onClear()
                  }
              }}>
            <input
                className="rounded-md text-center text-6xl text-gray-800 font-bold mb-3 placeholder:text-gray-200 border-gray-100"
                type="text"
                placeholder="PLACA"
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}/>
            {showButtonDelete && <PlateDeleteBtn className="absolute -top-3 right-2" onClick={onDeletePlate}/>}
            {showMessage && <p className="text-red-500 text-sm font-medium mb-3">Placa incorrecta</p>}
            {!showButtonDelete &&
                <Button
                    type="submit"
                    fullWidth>
                    Buscar
                </Button>
            }
        </form>
    )
}