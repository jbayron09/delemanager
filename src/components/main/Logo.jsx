import PropTypes from "prop-types";
import {ReactComponent as DeleLogo} from './logo.svg';

export function Logo({size}) {
    return (
        <DeleLogo height={
            (size === 'sm') ? "32px" :
                (size === 'md') ? "48px" : ''
        }/>
    )
}

Logo.propTypes = {
    size: PropTypes.oneOf(['sm', 'md'])
}