import React, { Component, Fragment } from "react"
import callApi from "../../utils/apiCaller"
import AlertList from "./AlertList"
import AlertListFilter from "../AlertListFilter"
import Chart from "../UIKit/Chart"
import { API_URL_ALERTS } from "../../constants"
import { PageWrapper, Column } from "./styled"

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

  getChartTooltipContent = data => {
    const { date, tinyId } = data
    const content = `Id: ${tinyId}, Date: ${date}`
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
              {graphVisible && (
                <Chart
                  data={alerts}
                  tooltipContent={this.getChartTooltipContent}
                />
              )}
              <AlertList
                alerts={alerts}
                selectedFilter={selectedFilter}
                toggleGraph={this.toggleGraph}
                graphVisible={graphVisible}
              />
            </Column>
          </PageWrapper>
        )}
      </Fragment>
    )
  }
}

export default AlertListContainer
