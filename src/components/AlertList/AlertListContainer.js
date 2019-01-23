import React, { Component, Fragment } from "react"
import callApi from "../../utils/apiCaller"
import AlertList from "./AlertList"
import AlertListFilter from "../AlertListFilter"
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
    }
  }

  componentDidMount() {
    callApi(API_URL_ALERTS).then(response => {
      this.setState({ alerts: response.alerts, isLoading: false })
    })
  }

  onFilterUpdate = selectedFilter => {
    this.setState({ selectedFilter })
  }

  render() {
    const { alerts, isLoading, selectedFilter } = this.state

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
            <Column width="auto">
              <AlertList alerts={alerts} selectedFilter={selectedFilter} />
            </Column>
          </PageWrapper>
        )}
      </Fragment>
    )
  }
}

export default AlertListContainer
