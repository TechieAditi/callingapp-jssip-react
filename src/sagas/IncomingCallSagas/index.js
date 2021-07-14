import { put, takeLatest,all, call, delay } from "redux-saga/effects";
import {
  dataFetchFailure,
  dataFetchStatus,
} from "../../actions/sagaActions";


function* handleDataFetchSaga(action) {
  try {
    yield put(dataFetchStatus({status: action.status, number : action.number}));
  } catch (error) {
    yield put(dataFetchFailure());
  }
}



// eslint-disable-next-line import/prefer-default-export
export function* watchForHandleDataFetch() {
  
  yield all([
    takeLatest("FETCH_STATUS",handleDataFetchSaga),
  ])
}
