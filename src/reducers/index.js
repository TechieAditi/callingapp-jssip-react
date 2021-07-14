import { combineReducers } from "redux";
import incomingCallStatus from "./incomingCallReducer";
import outgoingCallStatus from "./outgoingCallReducer";
export default combineReducers({
  incomingCallStatus,
  outgoingCallStatus
});
