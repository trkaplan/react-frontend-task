import React from "react"

import { scaleLinear } from "d3-scale"
import { ticks, extent } from "d3-array"
import PropTypes from "prop-types"
import { typeMargin, typeData } from "./types"

const YAxis = ({ data, height, margin }) => {
  const [min, max] = extent(data, d => d.valueY)
  const values = ticks(min, max, 10)

  const y = scaleLinear()
    .range([0, height - margin.top - margin.bottom])
    .domain([max, min])

  return (
    <div
      style={{
        width: "25px",
        position: "absolute",
        pointerEvents: "none",
        top: 0 + margin.top,
        left: 0,
        bottom: 0 + margin.bottom
      }}
    >
      {values.map((v, i) => (
        <span
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          style={{
            lineHeight: 0,
            fontSize: "12px",
            position: "absolute",
            right: 0,
            top: `${y(v)}px`
          }}
        >
          {v}
        </span>
      ))}
    </div>
  )
}
YAxis.defaultProps = {
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
YAxis.propTypes = {
  margin: typeMargin,
  height: PropTypes.number.isRequired,
  data: typeData
}
export default YAxis
