import {DateTime} from "luxon";

export default function calculateDiff(now, checkInDate){
    const {days, hours, minutes, seconds} = now.diff(
        DateTime.fromISO(checkInDate), ["days", "hours","minutes","seconds"]
    ).toObject()

    if(days>0) return `Hace ${Math.ceil(days)} ${days>1 ? "días" : "día"}`
    if(hours>0) return `Hace ${Math.ceil(hours)} ${hours>1 ? "horas" : "hora"}`
    if(minutes>0) return `Hace ${Math.ceil(minutes)} ${minutes>1 ? "minutos" : "minuto"}`
    if(seconds>0) return "hace un momento"
}