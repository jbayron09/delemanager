import {DateTime} from "luxon";
import {useCallback, useEffect, useState} from "react";

export default function CounterTime() {
    const [diff, setDiff] = useState(null)

    const calculateDiff = useCallback(() => {
        const date1 = DateTime.now()
        const date2 = DateTime.fromISO("2022-10-14T17:12:00")
        setDiff(date1.diff(date2, ["months", "days", "hours", "minutes", "seconds"]).toObject())
    })

    useEffect(() => {
        const timeout = setTimeout(calculateDiff, 1000)

        return () => clearTimeout(timeout)
    }, [calculateDiff])

    return (diff &&
        <>
            {
                (diff.hours > 0 ?
                    diff.hours + (diff.hours === 1 ? " hora, " : " horas, ") : "") +
                (diff.minutes > 0 ?
                    diff.minutes + (diff.minutes === 1 ? " minuto, " : " minutos, ") : "") +
                Math.ceil(diff.seconds) +
                (Math.ceil(diff.seconds) === 1 ? " segundo" : " segundos")
            }
        </>)
}