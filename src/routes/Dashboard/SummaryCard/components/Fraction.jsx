import PropTypes from "prop-types";

export default function CounterSection({value, label}) {
    if (!Math.ceil(value)) return null
    switch (label) {
        case 'segundo':
            return (Math.ceil(value) + " " + (Math.ceil(value) > 1 ? label + "s " : label + " "));
        default :
            return (Math.ceil(value) + " " + (Math.ceil(value) > 1 ? label + "s, " : label + " "));
    }
}
CounterSection.propTypes = {
    label: PropTypes.oneOf(['dia', 'hora', 'minuto', 'segundo'])
}
