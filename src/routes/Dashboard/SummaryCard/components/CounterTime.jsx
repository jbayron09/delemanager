import {DateTime} from "luxon";
import {useCallback, useEffect, useState} from "react";
import Fraction from "routes/Dashboard/SummaryCard/components/Fraction";

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

    return (<div>
        <Fraction value={diff.hours} label='hora'/>
        <Fraction value={diff.minutes} label='minuto'/>
        <Fraction value={diff.seconds} label='segundo'/>
    </div>)
}