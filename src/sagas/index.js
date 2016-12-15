import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { fetchBill } from "./bill";

// main saga generators
export function* sagas() {
    yield [
        fork(takeLatest, 'FETCH_BILL', fetchBill),
    ];
}
