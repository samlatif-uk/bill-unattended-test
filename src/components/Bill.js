import React from "react";
import { connect } from "react-redux";

class Bill extends React.Component {

  render() {
    const { bill } = this.props;
    return (
      <div className="col-xs-12">
        <div className="bill__statement">
          <h1>Statement overview</h1>
          <h2>Showing your bill for the following period:</h2>
          <p>{`From ${bill.statement.period.from} to ${bill.statement.period.to}`}</p>
          <p>{`Total cost for this period: ${bill.total}`}</p>
          <p>{`Payment due: ${bill.statement.due}`}</p>
        </div>
        <div className="bill__call-charges">
          <h1>Call Charges</h1>
          <ul>
            {
              JSON.stringify(bill.callCharges)
            }
          </ul>
        </div>
        <div className="bill__packages">
          <h1>Packages</h1>
          <ul>
            {
              JSON.stringify(bill.package)
            }
          </ul>
        </div>
        <div className="bill__sky-store">
          <h1>Sky Store</h1>
          <ul>
            {
              JSON.stringify(bill.skyStore)
            }
          </ul>
        </div>
      </div>
    );
  }
}

// export the connected class
function mapStateToProps(state) {
    return {
        bill: state.billReducer,
    };
}
export default connect(mapStateToProps)(Bill);