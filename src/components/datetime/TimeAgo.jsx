import {DateTime} from "luxon";

export default function TimeAgo({now, datetime}){
    const {days, hours, minutes, seconds} = now.diff(
        DateTime.fromISO(datetime), ["days", "hours","minutes","seconds"]
    ).toObject()

    const timeAgo =
        (days>0) ? `Hace ${Math.ceil(days)} ${days > 1 ? "días" : "día"}` :
        (hours>0) ? `Hace ${Math.ceil(hours)} ${hours>1 ? "horas" : "hora"}` :
        (minutes>0) ? `Hace ${Math.ceil(minutes)} ${minutes>1 ? "minutos" : "minuto"}` :
        (seconds>0) && "hace un momento"

    return <span>{timeAgo}</span>
}