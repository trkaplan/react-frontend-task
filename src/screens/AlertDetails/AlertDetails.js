import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { alertType } from "../../propTypes"
import { getAlertDetails } from "../../actions"

class AlertDetails extends Component {
  componentDidMount() {
    const { alertId } = this.props
    const { fetchData } = this.props
    fetchData(alertId)
  }

  render() {
    const { apiData } = this.props
    const { details, notes, isLoading } = apiData
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

AlertDetails.defaultProps = {
  apiData: null
}
AlertDetails.propTypes = {
  fetchData: PropTypes.func.isRequired,
  alertId: PropTypes.string.isRequired,
  apiData: PropTypes.shape({
    details: alertType,
    isLoading: PropTypes.bool
  })
}

const mapStateToProps = (state, { match }) => {
  const { id: alertId } = match.params

  return {
    apiData: state.alertsDetails,
    isLoading: state.isLoading,
    alertId
  }
}

const mapDispatchToProps = dispatch => ({
  fetchData: id => {
    dispatch(getAlertDetails(id))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlertDetails)
