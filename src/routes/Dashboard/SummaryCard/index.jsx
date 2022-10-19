import {useState} from "react";
import {BiTime, BiDollarCircle} from "react-icons/bi";
import {DateTime} from "luxon";
import Button from "components/main/Button";
import SummaryCardSection from "routes/Dashboard/SummaryCard/components/SummaryCardSection";
import CounterTime from "routes/Dashboard/SummaryCard/components/CounterTime";
import DeleModal from "components/modals/DeleModal";

export default function SummaryCard() {
    const [isPrint, setIsPrint] = useState(false)
    const [switchBtn, setSwitchBtn] = useState(false)

    const datetime = "2022-10-19T17:10:00"
    const startCounter = () => setSwitchBtn(true);

    const printInvoice = () => {
        const now = DateTime.now()
        const checkInDate = DateTime.fromISO(datetime)
        const {minutes} = now.diff(checkInDate, ["minutes"]).toObject()
        if (minutes < 5) {
            setIsPrint(true)
        }
    }
    const closeModal = () => setIsPrint(false)

    return (
        <div className="bg-white rounded-lg">
            <div className="p-8">
                <SummaryCardSection
                    icon={BiTime}
                    className="mb-2">
                    {
                        !switchBtn
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
                {
                    !switchBtn
                        ?
                        <Button
                            fullWidth
                            onClick={startCounter}>
                            Comenzar conteo
                        </Button>
                        :
                        <Button
                            fullWidth
                            onClick={printInvoice}>
                            Imprimir factura
                        </Button>
                }
                <DeleModal isOpen={isPrint}
                           toggle={closeModal}/>
            </div>
        </div>
    )
}