import {DateTime} from "luxon";
import {useCallback, useEffect, useState} from "react";
import CounterSection from "routes/Dashboard/SummaryCard/components/CounterSection";

export default function CounterTime() {
    const [diff, setDiff] = useState({})
    const calculateDiff = useCallback(() => {
        const date1 = DateTime.now()
        const date2 = DateTime.fromISO("2022-10-16T15:00:00")
        setDiff(date1.diff(date2, ["months", "days", "hours", "minutes", "seconds"]).toObject())
    })

    useEffect(() => {
        const timeout = setTimeout(calculateDiff, 1000)

        return () => clearTimeout(timeout)
    }, [calculateDiff])

    return (
        <span>
            <CounterSection value={diff.hours} label="hora" addComma/>
            <CounterSection value={diff.minutes} label="minuto" addComma/>
            <CounterSection value={diff.seconds} label="segundo"/>
        </span>
    )
}