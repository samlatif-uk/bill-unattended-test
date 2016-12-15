import React from "react";
import { connect } from "react-redux";
import { PanelGroup, Panel } from "react-bootstrap";

class Bill extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        activeKey: 1
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }


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
        <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>
          <Panel header="Call Charges" eventKey="1">
              <div className="bill__call-charges">
                  {
                      JSON.stringify(bill.callCharges)
                  }
              </div>
          </Panel>
          <Panel header="Your Packages" eventKey="2">
              <div className="bill__packages">
              {
                  JSON.stringify(bill.package)
              }
              </div>
          </Panel>
          <Panel header="Sky Store" eventKey="3">
              <div className="bill__sky-store">
              {
                  JSON.stringify(bill.skyStore)
              }
              </div>
          </Panel>
        </PanelGroup>

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