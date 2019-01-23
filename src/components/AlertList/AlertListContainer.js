import React, { Component, Fragment } from "react"
import styled from "styled-components"
import callApi from "../../utils/apiCaller"
import AlertList from "./AlertList"
import AlertListFilter from "../AlertListFilter"
import { API_URL_ALERTS } from "../../constants"

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`
const Column = styled.div`
  flex: ${props => `0 0 ${props.width};`};
  max-width: ${props => `${props.width};`};
`
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
          <Wrapper>
            <Column width="300px">
              <AlertListFilter
                selectedFilter={selectedFilter}
                onFilterUpdate={this.onFilterUpdate}
              />
            </Column>
            <Column width="auto">
              <AlertList alerts={alerts} selectedFilter={selectedFilter} />
            </Column>
          </Wrapper>
        )}
      </Fragment>
    )
  }
}

export default AlertListContainer
