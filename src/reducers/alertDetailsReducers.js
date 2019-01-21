import {
  GET_ALERT_DETAILS_REQUEST,
  GET_ALERT_DETAILS_SUCCESS,
  GET_ALERT_DETAILS_FAILURE
} from "../action-types"

const initialState = { details: null, isLoading: false }

const alertsDetails = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALERT_DETAILS_REQUEST:
      return { ...state, isLoading: true }
    case GET_ALERT_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        details: action.payload.details,
        notes: action.payload.notes
      }
    case GET_ALERT_DETAILS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.message
      }
    default:
      return state
  }
}

export default alertsDetails
