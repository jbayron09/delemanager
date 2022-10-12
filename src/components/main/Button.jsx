import PropTypes from "prop-types";
import classNames from "classnames";

export function Button({children, fullWidth, ...rest}) {
    return (
        <button
            className={classNames([
                "text-white bg-orange-500 text-center rounded-sm pt-2 pb-2 pl-8 pr-8",
                fullWidth && "w-full"
            ])}
            {...rest}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node,
}