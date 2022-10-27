const regex = /^[A-Z]{3}[0-9]{2,3}([A-Z]{1})?$/

export const cleanPlate = plate => plate.replace(' ', '')

export const formatPlate = plate =>
    plate.length > 3 && plate.indexOf(' ') === -1
        ? `${plate.substring(0, 3)} ${plate.substring(3, plate.length)}`
        : plate

export const isValidPlate = plate => cleanPlate(plate).match(regex) !== null