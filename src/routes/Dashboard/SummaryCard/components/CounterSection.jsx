import PropTypes from "prop-types";

export default function CounterSection({value, label, addComma}) {
    value = Math.ceil(value)
    if (!value) return null
    return `${value} ${(value > 1) ? label + 's' : label}${addComma ? ', ' : ''}`;
}

CounterSection.propTypes = {
    label: PropTypes.oneOf(['dia', 'hora', 'minuto', 'segundo']).isRequired,
    value: PropTypes.number,
    addComma: PropTypes.bool
}

CounterSection.defaultProps = {
    addComma: false
}