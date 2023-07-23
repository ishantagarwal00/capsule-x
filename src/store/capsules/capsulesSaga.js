import { call, put, takeLatest } from "redux-saga/effects";
import { fetchCapsulesFromApi } from "../api";
import { setCapsules, fetchCapsules } from "./capsulesSlice";

function* fetchCapsulesSaga() {
  try {
    const capsulesData = yield call(fetchCapsulesFromApi);
    yield put(setCapsules(capsulesData));
  } catch (error) {}
}

export function* watchFetchCapsules() {
  yield takeLatest(fetchCapsules, fetchCapsulesSaga);
}
