export default function bill(state = {
    statement: {
        generated: '2015-01-11',
        due: '2015-01-25',
        period: {
            from: '2015-01-26',
            to: '2015-02-25'
        }
    },
    total: 136.03,
}, action) {
  switch (action.type) {
    case 'STORE_BILL':
      return { ...state, ...action.bill };

    // initial state
    default:
      return state;
  }
}