import {useState} from "react";
import PropTypes from "prop-types";
import Button from "components/main/Button";
import PlateDeleteBtn from "components/main/PlateDeleteBtn";
import ErrorMessage from "components/forms/ErrorMessage";
import {useMutation} from "@apollo/client";
import CreateVehicleMutation from "mutations/CreateVehicleMutation";
import CreateCheckInMutation from "mutations/CreateCheckInMutation";

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
                setIsDeleting(false)
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

    // const [createCheckIn, {errorCheckIn}] = useMutation(CreateCheckInMutation)

    // const [createVehicle, {loading, error}] = useMutation(CreateVehicleMutation, {
    //     onCompleted: data => console.log(data.createVehicle.data.id)
    // });


    const [createCheckIn] = useMutation(CreateCheckInMutation)

    const [createVehicle, {loading, error}] = useMutation(CreateVehicleMutation, {
        onCompleted: (data) => {
            createCheckIn({
                variables: {
                    data: {
                        parking_lot: 88,
                        vehicle: data.createVehicle.data.id
                    }
                }
            })

        }
    });

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (inputValue.length === 7) {
            setShowMessage(false)
            await createVehicle({
                variables: {
                    data: {
                        plate: inputValue.split(/\s+/).join('')
                    }
                }
            })
            onSearch(inputValue)
            setShowButtonDelete(true)

        } else {
            setShowButtonDelete(false)
            setShowMessage(true)
            onClear()
        }
    }

    return (
        <form className="relative flex flex-col"
              onSubmit={handleSubmit}>
            <input
                className="rounded-md text-center text-6xl text-gray-800 font-bold mb-3 placeholder:text-gray-200 border-gray-100"
                type="text"
                placeholder="PLACA"
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}/>

            {showButtonDelete && <PlateDeleteBtn className="absolute -top-3 right-2" onClick={onDeletePlate}/>}
            {showMessage && <ErrorMessage message="Placa incorrecta" className="mb-3"/>}
            {error && <ErrorMessage message={"¡Error de envío! " + error.message} className="mb-3"/>}

            {!showButtonDelete &&
                <Button
                    type="submit"
                    fullWidth>
                    {
                        loading
                            ?
                            "cargando..."
                            :
                            "Buscar"
                    }
                </Button>
            }
        </form>
    )
}

SearchPlateForm.propTypes = {
    onSearch: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
}
