import { all, fork } from "redux-saga/effects";

import * as IncomingCallSagas from "./IncomingCallSagas";

export default function* rootSaga() {
  yield all([...Object.values(IncomingCallSagas)].map(fork));
  yield all([...Object.values(OutgoingCallSagas)].map(fork));
}
