import React, { Component, Fragment } from "react"
import callApi from "../../utils/apiCaller"
import AlertList from "./AlertList"
import { API_URL_ALERTS } from "../../constants"

class AlertListContainer extends Component {
  state = { alerts: null, isLoading: true }

  componentDidMount() {
    callApi(API_URL_ALERTS).then(response => {
      this.setState({ alerts: response.alerts, isLoading: false })
    })
  }

  render() {
    const { alerts, isLoading } = this.state

    return (
      <Fragment>
        {isLoading && <span>Loading...</span>}
        {alerts && <AlertList alerts={alerts} />}
      </Fragment>
    )
  }
}

export default AlertListContainer
