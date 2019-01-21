import callApi from "./utils/apiCaller"
import {
  API_URL_ALERTS,
  API_URL_ALERT_DETAILS,
  API_URL_ALERT_NOTES
} from "./constants"

import {
  GET_ALERTS_REQUEST,
  GET_ALERTS_SUCCESS,
  GET_ALERTS_FAILURE,
  GET_ALERT_DETAILS_REQUEST,
  GET_ALERT_DETAILS_SUCCESS,
  GET_ALERT_DETAILS_FAILURE
} from "./action-types"

export const getAlerts = () => dispatch => {
  dispatch({ type: GET_ALERTS_REQUEST })
  const url = API_URL_ALERTS
  const options = { method: "GET" }
  callApi(url, options)
    .then(alerts => {
      dispatch({ type: GET_ALERTS_SUCCESS, payload: alerts })
    })
    .catch(err => {
      dispatch({ type: GET_ALERTS_FAILURE, payload: err, error: true })
    })
}
export const getAlertDetails = id => dispatch => {
  dispatch({ type: GET_ALERT_DETAILS_REQUEST })
  const options = { method: "GET" }
  const promises = [
    // TODO Convert querystrings to an object. Since fetch does not support
    // (https://github.com/github/fetch/issues/256) this, using Axios would be better.
    callApi(`${API_URL_ALERT_DETAILS}?id=${id}`, options),
    callApi(`${API_URL_ALERT_NOTES}?alertId=${id}`, options)
  ]
  Promise.all(promises)
    .then(([details, notes]) => {
      // TODO handle empty service response
      const detailsWithNotes = {
        details: details[0],
        notes
      }
      dispatch({ type: GET_ALERT_DETAILS_SUCCESS, payload: detailsWithNotes })
    })
    .catch(err => {
      dispatch({ type: GET_ALERT_DETAILS_FAILURE, payload: err, error: true })
    })
}
