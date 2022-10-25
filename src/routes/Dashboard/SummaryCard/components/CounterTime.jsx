import {DateTime} from "luxon";
import {useCallback, useEffect, useState} from "react";
import CounterSection from "routes/Dashboard/SummaryCard/components/CounterSection";
import PropTypes from "prop-types";

export default function CounterTime({datetime}) {
    const [diff, setDiff] = useState({})
    const calculateDiff = useCallback(() => {
        const now = DateTime.now()
        const checkInDate = DateTime.fromISO(datetime)
        setDiff(now.diff(checkInDate, ["months", "days", "hours", "minutes", "seconds"]).toObject())
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

CounterTime.propTypes = {
    datetime: PropTypes.string
}

