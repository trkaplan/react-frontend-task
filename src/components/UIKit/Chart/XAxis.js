import React from "react"
import PropTypes from "prop-types"
import { scaleLinear } from "d3-scale"
import { ticks, extent } from "d3-array"
import { timeDay } from "d3-time"
import { typeMargin, typeData } from "./types"

const XAxis = ({ data, width, margin, labelFormatter }) => {
  const [min, max] = extent(data, d => d.valueX)
  const numberOfticks = timeDay.count(min, max) + 1
  const values = ticks(min, max, numberOfticks)
  const x = scaleLinear()
    .range([0, width - margin.left - margin.right])
    .domain([min, max])

  return (
    <div
      style={{
        position: "absolute",
        pointerEvents: "none",
        left: 0 + margin.left,
        right: 0 + margin.right,
        bottom: 0
      }}
    >
      {values.map((v, i) => (
        <span
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          style={{
            fontSize: "12px",
            position: "absolute",
            top: 0,
            left: `${x(v)}px`,
            transform: "translate(-50%)"
          }}
        >
          {labelFormatter ? labelFormatter(v) : v}
        </span>
      ))}
    </div>
  )
}
XAxis.defaultProps = {
  labelFormatter: () => {},
  margin: {
    top: 20,
    right: 20,
    bottom: 20,
    left: 35
  },
  data: {
    valueX: 0,
    valueY: 0
  }
}
XAxis.propTypes = {
  margin: typeMargin,
  width: PropTypes.number.isRequired,
  labelFormatter: PropTypes.func,
  data: typeData
}
export default XAxis
