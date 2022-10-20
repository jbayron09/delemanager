import PropTypes from "prop-types";
import {BiXCircle} from "react-icons/bi";
import classNames from "classnames";

export default function PlateDeleteBtn({className, onClick}) {
    return (
        <button
            type="button"
            className={classNames([
                "bg-red-500 text-xs text-white font-semibold flex items-center p-1 px-2 rounded-md uppercase",
                className && className
            ])}
            onClick={onClick}>
            <BiXCircle size='1.5em' className="mr-2"/>
            Borrar
        </button>
    )
}

PlateDeleteBtn.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}