import {useState} from "react";
import {useLazyQuery, useMutation} from "@apollo/client";
import PropTypes from "prop-types";
import Button from "components/main/Button";
import PlateDeleteBtn from "components/main/PlateDeleteBtn";
import ErrorMessage from "components/forms/ErrorMessage";
import CreateVehicleMutation from "mutations/CreateVehicleMutation";
import VehiclesByPlateQuery from "queries/VehiclesByPlateQuery";

export default function SearchPlateForm({onSearch, onClear}) {
    const [inputValue, setInputValue] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [showDeleteBtn, setShowDeleteBtn] = useState(false)
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
        setShowDeleteBtn(false)
        onClear()
    }

    const [createVehicle, {loading, error}] = useMutation(CreateVehicleMutation, {
        onCompleted: (data) => {
            onSearch(data.createVehicle.data.id)
            setShowDeleteBtn(true)
        },
        onError(error){
            console.log(error);
        }
    });

    const [searchVehicle, {loading: loadingQuery, error: errorQuery}] = useLazyQuery(VehiclesByPlateQuery, {
        onCompleted: (data) => {
            if (data.vehicles.data.length > 0) {
                onSearch(data.vehicles.data[0].id)
                setShowDeleteBtn(true)
            } else {
                createVehicle({
                    variables: {
                        data: {
                            plate: inputValue.split(/\s+/).join('')
                        }
                    }
                })
            }
        },
        onError(error){
            console.log(error);
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const regex = /^[A-Z]{3}[0-9]{2,3}([A-Z]{1})?$/
        const cleanedValue = inputValue.replace(' ', '')
        if (cleanedValue.match(regex)) {
            setShowMessage(false)
            await searchVehicle({
                variables: {
                    plate: cleanedValue
                }
            })
        } else {
            setShowDeleteBtn(false)
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

            {showDeleteBtn && <PlateDeleteBtn className="absolute -top-3 right-2" onClick={onDeletePlate}/>}
            {showMessage && <ErrorMessage message="Placa incorrecta" className="mb-3"/>}
            {error && <ErrorMessage message={"¡Error de envío! " + error.message} className="mb-3"/>}
            {errorQuery && <ErrorMessage message={"¡Error de envío! " + errorQuery.message} className="mb-3"/>}

            {!showDeleteBtn &&
                <Button
                    type="submit"
                    fullWidth>
                    {
                        loading || loadingQuery
                            ?
                            "Cargando..."
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
