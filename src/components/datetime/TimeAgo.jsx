import {DateTime} from "luxon";

export default function calculateDiff(now, checkInDate){
    const {days, hours, minutes, seconds} = now.diff(
        DateTime.fromISO(checkInDate), ["days", "hours","minutes","seconds"]
    ).toObject()

    if(days>0) return <span>Hace {Math.ceil(days)} {days>1 ? "días" : "día"}</span>
    if(hours>0) return <span>Hace {Math.ceil(hours)} {hours>1 ? "horas" : "hora"}</span>
    if(minutes>0) return <span>Hace {Math.ceil(minutes)} {minutes>1 ? "minutos" : "minuto"}`</span>
    if(seconds>0) return <span>hace un momento</span>
}