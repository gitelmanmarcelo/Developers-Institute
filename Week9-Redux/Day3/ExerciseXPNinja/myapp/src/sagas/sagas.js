// import { delay } from "redux-saga"
import { delay, takeLatest, put } from "redux-saga/effects";

function* ageUpAsync() {
  yield put({ type: "LOGO_ON" });
    yield delay(5000);
    yield put({ type: "LOGO_OFF" });
    yield put({ type: "AGE_UP_ASYNC", payload: 1 });
  }

  export function* watchAgeUp() {
    yield takeLatest("AGE_UP", ageUpAsync);
  }