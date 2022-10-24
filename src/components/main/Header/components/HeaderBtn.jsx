import PropTypes from "prop-types";

export default function HeaderBtn({onClick, children}){
    return (
        <button className="p-5 text-gray-400" onClick={onClick}>
            {children}
        </button>
    )
}

HeaderBtn.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}