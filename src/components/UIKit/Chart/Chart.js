// Forked from https://github.com/sentisis/charts-in-react

import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"

import { scaleTime, scaleLinear } from "d3-scale"
import { line } from "d3-shape"
import { extent } from "d3-array"
import styled from "styled-components"
import Point from "./Point"
import XAxis from "./XAxis"
import YAxis from "./YAxis"
import Tooltip from "./Tooltip"
import { typeMargin } from "./types"

const TooltipWrapper = styled.div`
  position: relative;
`
const drawLine = line()
  .x(d => d.x)
  .y(d => d.y)

class LineChart extends Component {
  state = {
    data: [],
    isTooltipVisible: false,
    tooltipData: {}
  }

  componentWillMount() {
    this.setData()
  }

  setData(props = this.props) {
    const { data, width, height, margin } = props

    const x = scaleTime()
      .rangeRound([0, width - margin.left - margin.right])
      .domain(extent(data, d => d.valueX))

    const y = scaleLinear()
      .rangeRound([height - margin.top - margin.bottom, 0])
      .domain(extent(data, d => d.valueY))

    const graphData = data.map(d => ({
      ...d,
      x: x(d.valueX),
      y: y(d.valueY)
    }))

    this.setState({
      data: graphData
    })
  }

  handleMouseEnterPoint = d => {
    this.setState({
      isTooltipVisible: true,
      tooltipData: d
    })
  }

  handleMouseLeavePoint = () => {
    this.setState({ isTooltipVisible: false })
  }

  render() {
    const {
      width,
      height,
      margin,
      getTooltipContent,
      axis,
      xAxisLabelFormatter
    } = this.props
    const { data, isTooltipVisible, tooltipData } = this.state
    return (
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          position: "relative"
        }}
      >
        <TooltipWrapper>
          <Tooltip
            hidden={!isTooltipVisible}
            d={tooltipData}
            getTooltipContent={getTooltipContent}
          />
        </TooltipWrapper>
        <svg width={width} height={height}>
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            <path
              fill="none"
              stroke="steelblue"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              d={drawLine(data)}
            />

            {data.map((d, i) => (
              <Point
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                d={d}
                onMouseEnter={this.handleMouseEnterPoint}
                onMouseLeave={this.handleMouseLeavePoint}
              />
            ))}
          </g>
        </svg>
        {axis && (
          <Fragment>
            <XAxis
              data={data}
              width={width}
              margin={margin}
              labelFormatter={xAxisLabelFormatter}
            />
            <YAxis data={data} height={height} margin={margin} />
          </Fragment>
        )}
      </div>
    )
  }
}

LineChart.defaultProps = {
  getTooltipContent: () => {},
  margin: {
    top: 20,
    right: 20,
    bottom: 20,
    left: 35
  },
  axis: true,
  xAxisLabelFormatter: () => {}
}
LineChart.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  margin: typeMargin,
  getTooltipContent: PropTypes.func,
  axis: PropTypes.bool,
  xAxisLabelFormatter: PropTypes.func
}

export default LineChart
