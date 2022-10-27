import PropTypes from 'prop-types'
import { formatPlate } from "utils/vehicles/plates"

export default function FormattedPlate({plate}) {
  return (
      <span>
        {formatPlate(plate)}
      </span>
  )
}

FormattedPlate.propTypes = {
  plate: PropTypes.string.isRequired
}