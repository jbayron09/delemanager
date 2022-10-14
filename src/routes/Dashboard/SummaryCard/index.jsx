import {BiTime, BiDollarCircle} from "react-icons/bi";
import Button from "components/main/Button";
import SummaryCardSection from "routes/Dashboard/SummaryCard/components/SummaryCardSection";

import CounterTime from "routes/Dashboard/SummaryCard/components/CounterTime";

export default function SummaryCard() {

    return (
        <div className="bg-white rounded-lg">
            <div className="p-8">
                <SummaryCardSection
                    icon={BiTime}
                    className="mb-2">
                    {/*Aún no está contando el tiempo*/}
                    <CounterTime/>
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