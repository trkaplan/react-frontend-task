import { combineReducers } from "redux"
import alerts from "./alertsReducers"
import alertsDetails from "./alertDetailsReducers"

const reducers = combineReducers({
  alerts,
  alertsDetails
})

export default reducers
