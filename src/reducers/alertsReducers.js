import {
  GET_ALERTS_REQUEST,
  GET_ALERTS_SUCCESS,
  GET_ALERTS_FAILURE
} from "../action-types"

const initialState = { alerts: null, isLoading: false }

const alerts = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALERTS_REQUEST:
      return { ...state, isLoading: true }
    case GET_ALERTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        alerts: action.payload.alerts,
        dateTimeRange: action.payload.dateTimeRange
      }
    case GET_ALERTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.message
      }
    default:
      return state
  }
}

export default alerts
