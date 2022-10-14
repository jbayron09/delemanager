import {BiTime, BiDollarCircle} from "react-icons/bi";
import Button from "components/main/Button";
import SummaryCardSection from "routes/Dashboard/SummaryCard/components/SummaryCardSection";
import {DateTime} from "luxon";

export default function SummaryCard() {
    const date1 = DateTime.now()
    const date2 = DateTime.fromISO("2022-10-14T07:00:00")
    const diff = date1.diff(date2, ["months", "days", "hours", "minutes","seconds"]).toObject()

    return (
        <div className="bg-white rounded-lg">
            <div className="p-8">
                <SummaryCardSection
                    icon={BiTime}
                    className="mb-2">
                    {/*Aún no está contando el tiempo*/}
                    {diff.hours + " hora, " + diff.minutes + " minutos, " + Math.ceil(diff.seconds) + " segundos"}
                </SummaryCardSection>
                <SummaryCardSection icon={BiDollarCircle}>
                    $0
                </SummaryCardSection>
            </div>
            <Button
                fullWidth>
                Comenzar conteo
            </Button>
        </div>
    )
}