import assert from "assert";
import billReducer from "../../src/reducers/bill";

// unit tests for the users reducers
// mocha - http://mochajs.org/#getting-started
// assert - https://nodejs.org/api/assert.html#assert_assert_deepequal_actual_expected_message
describe('Bill reducer', () => {
  describe('STORE_BILL', () => {
    it('should return the latest bill', () => {
      assert.deepEqual(
        billReducer({}, {
            type: 'STORE_BILL',
            bill: {
                statement: {
                    generated: '2015-01-11',
                    due: '2015-01-25',
                    period: {
                        from: '2015-01-26',
                        to: '2015-02-25'
                    }
                },
                total: 136.03,
            }
        })
      );
    });
  });
});
