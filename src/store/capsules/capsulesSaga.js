import { call, put, takeLatest } from "redux-saga/effects";
import { fetchCapsulesFromApi, getFallbackCapsules } from "../api";
import {
  setCapsules, setOriginalData, fetchCapsules,
  fetchCapsulesSuccess,
} from "./capsulesSlice";

function* fetchCapsulesSaga() {
  try {
    const capsulesData = yield call(fetchCapsulesFromApi);
    yield put(setCapsules(capsulesData));
    yield put(setOriginalData(capsulesData));
    yield put(fetchCapsulesSuccess());
  } catch {
    const fallback = getFallbackCapsules();
    yield put(setCapsules(fallback));
    yield put(setOriginalData(fallback));
    yield put(fetchCapsulesSuccess());
  }
}

export function* watchFetchCapsules() {
  yield takeLatest(fetchCapsules, fetchCapsulesSaga);
}
