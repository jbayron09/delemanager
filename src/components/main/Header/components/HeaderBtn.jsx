import PropTypes from "prop-types";

export function HeaderBtn({children}){
    return (
        <button className="p-5">
            {children}
        </button>
    )
}

HeaderBtn.propTypes = {
    children: PropTypes.node.isRequired
}