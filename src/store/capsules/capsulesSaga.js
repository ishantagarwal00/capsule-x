import { call, put, takeLatest } from "redux-saga/effects";
import { fetchCapsulesFromApi } from "../api";
import {
  setCapsules, setOriginalData, fetchCapsules,
  fetchCapsulesSuccess, fetchCapsulesFailure,
} from "./capsulesSlice";

function* fetchCapsulesSaga() {
  try {
    const capsulesData = yield call(fetchCapsulesFromApi);
    yield put(setCapsules(capsulesData));
    yield put(setOriginalData(capsulesData));
    yield put(fetchCapsulesSuccess());
  } catch (error) {
    yield put(fetchCapsulesFailure("SpaceX API is temporarily unavailable. Please try again later."));
  }
}

export function* watchFetchCapsules() {
  yield takeLatest(fetchCapsules, fetchCapsulesSaga);
}
