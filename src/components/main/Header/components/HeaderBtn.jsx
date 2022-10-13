import PropTypes from "prop-types";

export function HeaderBtn({children}){
    return (
        <button className="p-5 text-gray-400">
            {children}
        </button>
    )
}

HeaderBtn.propTypes = {
    children: PropTypes.node.isRequired
}