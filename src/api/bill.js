// API Bill static class
export default class ApiBill {
  // fetch from server
  static getBill() {
    return fetch('https://still-scrubland-9880.herokuapp.com/bill.json')
  }
}
