import PropTypes from "prop-types";
import {ReactComponent as DeleLogo} from './logo.svg';

export function Logo({size}) {
    let height

    switch (size) {
        case 'sm':
            height = '32px';
            break
        case 'md':
            height = '48px';
            break
        default:
            throw new Error('Provided size to Logo is no valid');
    }

    return (
        <DeleLogo height={height}/>
    )
}

Logo.propTypes = {
    size: PropTypes.oneOf(['sm', 'md'])
}

Logo.defaultProps = {
    size: 'sm'
}