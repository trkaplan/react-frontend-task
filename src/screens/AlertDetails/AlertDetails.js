import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import callApi from "../../utils/apiCaller"
import { API_URL_ALERT_DETAILS, API_URL_ALERT_NOTES } from "../../constants"

class AlertDetails extends Component {
  state = {
    details: {},
    notes: {},
    isLoading: true
  }

  componentDidMount() {
    const { match } = this.props
    const { id } = match.params

    const options = { method: "GET" }
    const promises = [
      // TODO Convert querystrings to an object. Since fetch does not support
      // (https://github.com/github/fetch/issues/256) this, using Axios would be better.
      callApi(`${API_URL_ALERT_DETAILS}?id=${id}`, options),
      callApi(`${API_URL_ALERT_NOTES}?alertId=${id}`, options)
    ]
    Promise.all(promises).then(([details, notes]) => {
      // TODO handle empty service response
      const detailsObject = details[0]
      this.setState({ details: detailsObject, notes, isLoading: false })
    })
  }

  render() {
    const { details, notes, isLoading } = this.state

    return (
      <Fragment>
        {isLoading && <span>Loading...</span>}
        {details && (
          <div>
            <h1>Alert Details</h1>
            details: <pre>{JSON.stringify(details)}</pre>
            <hr />
            notes: <pre>{JSON.stringify(notes)}</pre>
          </div>
        )}
      </Fragment>
    )
  }
}
AlertDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }).isRequired
}
export default AlertDetails
