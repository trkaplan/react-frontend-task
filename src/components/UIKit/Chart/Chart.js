/* eslint-disable react/prop-types */
import React from "react"

const Chart = ({ data, tooltipContent }) => (
  <div>
    <div>GRAPH, Work in progress</div>
    {tooltipContent({ date: "test", tinyId: "1" })}
    {JSON.stringify(data)}
  </div>
)

export default Chart
