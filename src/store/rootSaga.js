import { all } from "redux-saga/effects";
import { watchFetchCapsules } from "../store/capsules/capsulesSaga";

function* rootSaga() {
  yield all([watchFetchCapsules()]);
}

export default rootSaga;
