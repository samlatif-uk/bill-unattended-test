import assert from "assert";
import billReducer from "../../src/reducers/bill";
const BILL = require('../../bill.json');

// unit tests for the bill reducer
// mocha - http://mochajs.org/#getting-started
// assert - https://nodejs.org/api/assert.html#assert_assert_deepequal_actual_expected_message
describe('Bill reducer', () => {
  describe('STORE_BILL', () => {
    it('should return the latest bill', () => {
      assert.deepEqual(
        billReducer({}, {
            type: 'STORE_BILL',
            bill: BILL
        })
      );
    });
  });
});
