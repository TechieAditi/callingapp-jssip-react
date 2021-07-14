import { put, takeLatest,all, call, delay } from "redux-saga/effects";
import {
  setOutgoingCallStatus,
  dataFetchFailure,
} from "../../actions/sagaActions";


function* handleCallStatus(action) {
  try {
    yield put(setOutgoingCallStatus({status: action.status}));
  } catch (error) {
    yield put(dataFetchFailure());
  }
}



// eslint-disable-next-line import/prefer-default-export
export function* watchForHandleDataFetch() {
  
  yield all([
    takeLatest("CALL_STATUS",handleCallStatus),
  ])
}
