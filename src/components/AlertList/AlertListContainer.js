import React, { Component, Fragment } from "react"
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

  getChartData = alerts =>
    alerts.map(alert => ({
      valueX: new Date(alert.createdAtTimestamp),
      valueY: alert.count
    }))

  getChartTooltipContent = data => {
    const { valueX: date, valueY: count } = data
    const content = `Count: ${count}, Date: ${date}`
    return <Fragment>{content}</Fragment>
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
            <Column width="auto" padding="24px">
              <ToggleGraphButton onClick={this.toggleGraph}>
                {graphVisible ? "Hide Graph" : "Show Graph"}
              </ToggleGraphButton>
              {graphVisible && (
                <Chart
                  data={this.getChartData(alerts)}
                  getTooltipContent={this.getChartTooltipContent}
                  width={800}
                  height={250}
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

export default AlertListContainer
