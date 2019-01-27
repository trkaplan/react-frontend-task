import React, { Component, Fragment } from "react"
import { timeFormat } from "d3-time-format"
import { withRouter } from "react-router"
import PropTypes from "prop-types"
import callApi from "../../utils/apiCaller"
import AlertList from "./AlertList"
import AlertListFilter from "../AlertListFilter"
import Chart from "../UIKit/Chart"
import { API_URL_ALERTS } from "../../constants"
import { PageWrapper, Column, ToggleGraphButton } from "./styled"

class AlertListContainer extends Component {
  state = {
    alerts: null,
    isLoading: true,
    selectedFilter: {
      id: "pre-1",
      title: "All",
      query: ""
    },
    graphVisible: false
  }

  componentDidMount() {
    callApi(API_URL_ALERTS).then(response => {
      this.setState({ alerts: response.alerts, isLoading: false })
    })
  }

  onFilterUpdate = selectedFilter => {
    this.setState({ selectedFilter })
  }

  toggleGraph = () => {
    this.setState(prevState => ({
      graphVisible: !prevState.graphVisible
    }))
  }

  openAlertDetails = alertId => {
    const { history } = this.props
    history.push(`alert/show/${alertId}`)
  }

  onPointClickHandler = alert => {
    this.openAlertDetails(alert.alertId)
  }

  getChartData = alerts =>
    alerts.map(alert => ({
      valueX: new Date(alert.createdAtTimestamp),
      valueY: alert.count,
      message: alert.message,
      alertId: alert.id
    }))

  getChartWidth = parentObj => {
    const parentObjectStyle = getComputedStyle(parentObj)
    return (
      parentObj.offsetWidth -
      (parseFloat(parentObjectStyle.paddingLeft) +
        parseFloat(parentObjectStyle.paddingRight))
    )
  }

  getChartTooltipContent = data => {
    const { valueX: date, valueY: count, message } = data
    return (
      <Fragment>
        <b>Message:</b> {message} <br />
        <br />
        <b>Count:</b> {count} <br />
        <b>Date:</b> {date.toGMTString()}
      </Fragment>
    )
  }

  render() {
    const { alerts, isLoading, selectedFilter, graphVisible } = this.state
    return (
      <Fragment>
        {isLoading && <span>Loading...</span>}
        {alerts && (
          <PageWrapper>
            <Column width="300px">
              <AlertListFilter
                selectedFilter={selectedFilter}
                onFilterUpdate={this.onFilterUpdate}
              />
            </Column>
            <Column
              padding="24px"
              ref={chartParent => {
                this.chartParent = chartParent
              }}
            >
              <ToggleGraphButton onClick={this.toggleGraph}>
                {graphVisible ? "Hide Graph" : "Show Graph"}
              </ToggleGraphButton>
              <h2>Alert List</h2>
              {graphVisible && (
                <Chart
                  data={this.getChartData(alerts)}
                  getTooltipContent={this.getChartTooltipContent}
                  width={this.getChartWidth(this.chartParent)}
                  height={250}
                  axis
                  xAxisLabelFormatter={timeFormat("%e %B")}
                  onPointClick={this.onPointClickHandler}
                />
              )}
              <AlertList alerts={alerts} selectedFilter={selectedFilter} />
            </Column>
          </PageWrapper>
        )}
      </Fragment>
    )
  }
}
AlertListContainer.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
}

export default withRouter(AlertListContainer)
