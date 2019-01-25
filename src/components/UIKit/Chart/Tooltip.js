import React from "react"
import PropTypes from "prop-types"

const Tooltip = ({ hidden, d, getTooltipContent }) =>
  !hidden && (
    <div
      style={{
        opacity: 0.9,
        transform: `translate(${d.x}px, ${d.y - 45}px)`,
        position: "absolute",
        padding: "12px",
        border: "1px solid #c5c5c5",
        backgroundColor: "#fbfbfb",
        maxWidth: "300px"
      }}
    >
      {d && getTooltipContent(d)}
    </div>
  )
Tooltip.defaultProps = {
  getTooltipContent: () => {}
}
Tooltip.propTypes = {
  getTooltipContent: PropTypes.func,
  hidden: PropTypes.bool.isRequired,
  d: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  })
}
export default Tooltip
