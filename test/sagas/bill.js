import { call, put } from "redux-saga/effects";
import assert from "assert";
import ApiBill from "../../src/api/bill";
import { fetchBill } from "../../src/sagas/bill";

// unit tests for the bill saga
describe('Bill saga', () => {
  describe('fetchBill()', () => {
    const generator = fetchBill();

    it('should return the ApiBill.getBill call', () => {
      assert.deepEqual(generator.next().value, call(ApiBill.getBill));
    });

    it('should return the STORE_BILL action', () => {
      assert.deepEqual(generator.next().value, put({type: 'STORE_BILL', bill: undefined}));
    });

    it('should be finished', () => {
      assert.equal(generator.next().done, true);
    });
  });
});
