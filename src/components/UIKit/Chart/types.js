import PropTypes from "prop-types"

// eslint-disable-next-line import/prefer-default-export
export const typeMargin = PropTypes.shape({
  top: PropTypes.number.isRequired,
  right: PropTypes.number.isRequired,
  bottom: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired
})

export const typeData = PropTypes.arrayOf(
  PropTypes.shape({
    valueX: PropTypes.oneOfType([PropTypes.number, PropTypes.instanceOf(Date)]),
    valueY: PropTypes.oneOfType([PropTypes.number, PropTypes.instanceOf(Date)])
  })
)
