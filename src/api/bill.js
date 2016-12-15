// API Bill static class
export default class ApiBill {
  // fetch from server
  static getBill() {
    return fetch('https://still-scrubland-9880.herokuapp.com/bill.json')
        .then(res => (res.status === 200 || res.status === 304)
                ? res.json() // return json on success status code
                : res.statusText // otherwise return error status text
        )
  }
}
