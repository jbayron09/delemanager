import PropTypes from 'prop-types'
import { formatPlate } from "utils/vehicles/plates"
import classNames from "classnames"

export default function FormattedPlate({ plate }) {
  const formatted = formatPlate(plate)

  return (
      <span>
        {
          Array.from(formatted).map((letter, index) => {
            const isSeparator = letter === ' '

            return (
                <span
                    key={index}
                    className={classNames([
                      'inline-block w-3',
                      isSeparator && 'w-2'
                    ])}>
                {letter}
              </span>
            )
          })
        }
      </span>
  )
}

FormattedPlate.propTypes = {
  plate: PropTypes.string.isRequired
}