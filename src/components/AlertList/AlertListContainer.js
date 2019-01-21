import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import AlertList from "./AlertList"
import { alertType, dateTimeRangeType } from "../../propTypes"
import { getAlerts } from "../../actions"

class AlertListContainer extends Component {
  componentDidMount() {
    const { fetchData } = this.props
    fetchData()
  }

  render() {
    const { apiData } = this.props
    const { alerts, isLoading } = apiData
    return (
      <Fragment>
        {isLoading && <span>Loading...</span>}
        {alerts && <AlertList alerts={alerts} />}
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  apiData: state.alerts,
  isLoading: state.isLoading
})

const mapDispatchToProps = dispatch => ({
  fetchData: () => {
    dispatch(getAlerts())
  }
})
AlertListContainer.defaultProps = {
  apiData: null
}

AlertListContainer.propTypes = {
  fetchData: PropTypes.func.isRequired,
  apiData: PropTypes.shape({
    alerts: PropTypes.arrayOf(alertType),
    dateTimeRange: dateTimeRangeType,
    isLoading: PropTypes.bool
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlertListContainer)
