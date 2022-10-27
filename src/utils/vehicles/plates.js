export const formatPlate = plate =>
    plate.length > 3 && plate.indexOf(' ') === -1
        ? `${plate.substring(0, 3)} ${plate.substring(3, plate.length)}`
        : plate