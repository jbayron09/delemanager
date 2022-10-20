import {useState} from "react";
import {BiTime, BiDollarCircle} from "react-icons/bi";
import {DateTime} from "luxon";
import Button from "components/main/Button";
import SummaryCardSection from "routes/Dashboard/SummaryCard/components/SummaryCardSection";
import CounterTime from "routes/Dashboard/SummaryCard/components/CounterTime";
import DeleModal from "components/modals/DeleModal";

export default function SummaryCard() {
    const [showModal, setShowModal] = useState(false)
    const [counterIsActive, setCounterIsActive] = useState(false)

    const datetime = "2022-10-20T11:36:00"
    const closeModal = () => setShowModal(false)

    const handleClick = () => {
        setCounterIsActive(true)
        if (counterIsActive){
            const now = DateTime.now()
            const checkInDate = DateTime.fromISO(datetime)
            const {minutes} = now.diff(checkInDate, ["minutes"]).toObject()
            if (minutes < 5)
                setShowModal(true)
        }
    }

    return (
        <div className="bg-white rounded-lg">
            <div className="p-8">
                <SummaryCardSection
                    icon={BiTime}
                    className="mb-2">
                    {
                        !counterIsActive
                            ?
                            "Aún no está contando el tiempo"
                            :
                            <CounterTime datetime={datetime}/>
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
                        counterIsActive
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