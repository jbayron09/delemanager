import {useCallback, useEffect, useState} from "react"
import PropTypes from "prop-types";
import Button from "components/main/Button";
import PlateDeleteBtn from "components/main/PlateDeleteBtn";
import ErrorMessage from "components/forms/ErrorMessage";
import useVehiclesApi from "hooks/vehicles/useVehiclesApi";
import {useSearchParams} from "react-router-dom";

export default function SearchPlateForm({onSearch, onClear}) {
    const [inputValue, setInputValue] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const [getOrCreateVehicle, {loading, error, vehicleId, reset}] = useVehiclesApi()

    const resetForm = useCallback(() => {
        reset()
        setShowErrorMessage(false)
        setSearchParams({})
        onClear()
    }, [reset, setShowErrorMessage, onClear])

    useEffect(() => {
        if (vehicleId)
            onSearch(vehicleId)
    }, [vehicleId, onSearch])

    useEffect(() => {
        if (vehicleId && inputValue.length < 7) {
            resetForm()
        }
    }, [inputValue, vehicleId, resetForm])

    useEffect(() => {
        if (searchParams.has('plate')) {
            const vehiclePlate = searchParams.get('plate')
            if (vehiclePlate.length === 6) {
                setInputValue(`${vehiclePlate.substring(0, 3)} ${vehiclePlate.substring(3, 6)}`)
            }
            getOrCreateVehicle(vehiclePlate)
        }
    }, [searchParams])

    const handleKeyDown = (e) => e.key === 'Backspace' && setIsDeleting(true)

    const handleChange = ({target: {value}}) => {
        if (value.length <= 7) {
            if (isDeleting && value.length === 3) {
                setInputValue(value.substring(0, 2))
                setIsDeleting(false)
            } else {
                setIsDeleting(false)
                let vehiclePlate = value.toUpperCase()
                if (value.length === 3) {
                    vehiclePlate = vehiclePlate + ' '
                }
                setInputValue(vehiclePlate)
            }
        }
    }
    const onDeletePlate = () => {
        setInputValue('')
        resetForm()
        setSearchParams({})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const regex = /^[A-Z]{3}[0-9]{2,3}([A-Z]{1})?$/
        const cleanedValue = inputValue.replace(' ', '')
        if (cleanedValue.match(regex)) {
            setShowErrorMessage(false)
            await getOrCreateVehicle(cleanedValue)
        } else {
            setShowErrorMessage(true)
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

            {vehicleId && <PlateDeleteBtn className="absolute -top-3 right-2" onClick={onDeletePlate}/>}
            {showErrorMessage && <ErrorMessage message="Placa incorrecta" className="mb-3"/>}
            {error && <ErrorMessage message={"¡Error de envío! " + error.message} className="mb-3"/>}

            {!vehicleId &&
                <Button
                    type="submit"
                    fullWidth>
                    {
                        loading
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
