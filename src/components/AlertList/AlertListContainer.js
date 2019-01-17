import React, { Component, Fragment } from "react"
import callApi from "../../utils/apiCaller"
import AlertList from "./AlertList"
import { API_URL_ALERTS } from "../../constants"

function processResponse(data) {
  return data
}

class AlertListContainer extends Component {
  state = { dataAlerts: {}, isLoading: true }

  componentDidMount() {
    callApi(API_URL_ALERTS).then(response => {
      const result = processResponse(response)
      this.setState({ dataAlerts: result, isLoading: false })
    })
  }

  render() {
    const { dataAlerts, isLoading } = this.state

    return (
      <Fragment>
        {isLoading && <span>Loading...</span>}
        {!isLoading && <AlertList data={dataAlerts} />}
      </Fragment>
    )
  }
}

export default AlertListContainer
