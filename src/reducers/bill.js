export default function bill(state = {}, action) {
  switch (action.type) {
    case 'STORE_BILL': return action.bill;

    // initial state
    default:
      return state;
  }
}