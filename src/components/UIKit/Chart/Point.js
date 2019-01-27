import React from "react"
import PropTypes from "prop-types"

const Point = ({ d, onMouseEnter, onMouseLeave, onClick }) => (
  <circle
    cx={d.x}
    cy={d.y}
    r="4"
    fill="white"
    stroke="steelBlue"
    strokeWidth="2.5"
    onMouseEnter={() => onMouseEnter(d)}
    onClick={() => onClick(d)}
    onMouseLeave={() => onMouseLeave(d)}
  />
)
Point.defaultProps = {
  onClick: () => {}
}
Point.propTypes = {
  d: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onClick: PropTypes.func
}
export default Point
