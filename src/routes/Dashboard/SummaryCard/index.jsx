import PropTypes from "prop-types";
import {useState} from "react";
import {BiTime, BiDollarCircle} from "react-icons/bi";
import {DateTime} from "luxon";
import {useMutation} from "@apollo/client";
import Button from "components/main/Button";
import SummaryCardSection from "routes/Dashboard/SummaryCard/components/SummaryCardSection";
import CounterTime from "routes/Dashboard/SummaryCard/components/CounterTime";
import DeleModal from "components/modals/DeleModal";
import CreateCheckInMutation from "mutations/CreateCheckInMutation";

export default function SummaryCard({vehicleId}) {
    const [showModal, setShowModal] = useState(false)
    const [dateTime, setDateTime] = useState(null)

    const closeModal = () => setShowModal(false)

    const [createCheckIn] = useMutation(CreateCheckInMutation, {
        onCompleted: (data) => {
            setDateTime(data.createCheckIn.data.attributes.createdAt)
        }
    })

    const handleClick = () => {
        if (dateTime) {
            const now = DateTime.now()
            const checkInDate = DateTime.fromISO(dateTime)
            const {minutes} = now.diff(checkInDate, ["minutes"]).toObject()
            if (minutes < 5)
                setShowModal(true)
        } else {
            createCheckIn({
                variables: {
                    data: {
                        parking_lot: 88,
                        vehicle: vehicleId
                    }
                }
            })
        }
    }

    return (
        <div className="bg-white rounded-lg">
            <div className="p-8">
                <SummaryCardSection
                    icon={BiTime}
                    className="mb-2">
                    {
                        !dateTime
                            ?
                            "Aún no está contando el tiempo"
                            :
                            <CounterTime datetime={dateTime}/>
                    }
                </SummaryCardSection>
                <SummaryCardSection icon={BiDollarCircle}>
                    $0
                </SummaryCardSection>
            </div>
            <div>
                <Button
                    fullWidth
                    onClick={handleClick}>
                    {
                        dateTime
                            ?
                            "Imprimir factura"
                            :
                            "Comenzar conteo"
                    }
                </Button>
                <DeleModal isOpen={showModal}
                           toggle={closeModal}/>
            </div>
        </div>
    )
}

SummaryCard.propTypes = {
    vehicleId: PropTypes.string.isRequired,
}