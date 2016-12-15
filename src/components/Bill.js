import React from "react";
import { connect } from "react-redux";

class Bill extends React.Component {

  render() {
    console.log(this.props.bill);
    return (
      <div className="page-home">
        <h4>Welcome to your bill</h4>
      </div>
    );
  }
}

// export the connected class
function mapStateToProps(state) {
    return {
        bill: state.billReducer || [],
    };
}
export default connect(mapStateToProps)(Bill);