export default function Fraction({diff}) {
    const timeFractions = {
        dias: diff.days,
        horas: diff.hours,
        minutos: diff.minutes,
        segundos: diff.seconds
    }
    const timeFractionsKeys = Object.keys(timeFractions)
    const timeFractionsValues = Object.values(timeFractions)

    return timeFractionsKeys.map((time, index) => {
        return (timeFractionsValues[index] > 0 ?
            timeFractionsValues[index] === 1 ?
                Math.ceil(timeFractionsValues[index]) + " " + (timeFractionsKeys[index].slice(0, (timeFractionsKeys[index].length) - 1)) + ", "
                :
                Math.ceil(timeFractionsValues[index]) + " " + timeFractionsKeys[index] + ", "
            :
            "")
    })
}
