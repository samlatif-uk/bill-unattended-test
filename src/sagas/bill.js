import { call, put } from "redux-saga/effects";
import API from "../api/bill";

// fetch the bill
export function* fetchBill() {
  // call the api to fetch bill.json
  const bill = yield call(API.getBill);
  if (bill !== '')
  // save the bill in state
  yield put({
    type: 'STORE_BILL',
    bill: bill,
  });
}
