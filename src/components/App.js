import React, { Component } from "react";
import { connect } from "react-redux";
import { ProgressBar } from "react-bootstrap";
import "../stylesheets/main.scss";
import {Header} from './stateless/Header'

export class App extends Component {

  componentWillMount() {
    // the first time we load the app, we begin the fetching process and store the bill
    this.props.dispatch({type: 'FETCH_BILL'});
  }

  render() {
    // show the loading state while we wait for the app to load
    const {bill, children} = this.props;
    return !bill
        ? <ProgressBar active now={100}/>
        : <div className="container">
          <Header/>
            <div>
                {children}
            </div>
          </div>
  }
}

// export the connected class
function mapStateToProps(state) {
    return {
        bill: state.billReducer,
    };
}
export default connect(mapStateToProps)(App);