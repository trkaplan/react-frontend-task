import React, { Component } from "react"
import PropTypes from "prop-types"

class Point extends Component {
  state = { isHover: false }

  onMouseEnterHandler = (d, e, onMouseEnter) => {
    onMouseEnter(d, e)
    this.setState({ isHover: true })
  }

  onMouseLeaveHandler = (d, onMouseLeave) => {
    onMouseLeave(d)
    this.setState({ isHover: false })
  }

  render() {
    const { d, onMouseEnter, onMouseLeave, onClick } = this.props
    const { isHover } = this.state
    const fillColor = isHover ? "steelBlue" : "white"
    return (
      <circle
        cx={d.x}
        cy={d.y}
        r="4"
        fill={fillColor}
        style={{ cursor: "pointer" }}
        stroke="steelBlue"
        strokeWidth="2.5"
        onMouseEnter={e => this.onMouseEnterHandler(d, e, onMouseEnter)}
        onClick={() => onClick(d)}
        onMouseLeave={() => this.onMouseLeaveHandler(d, onMouseLeave)}
      />
    )
  }
}

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
