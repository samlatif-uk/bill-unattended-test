import React from "react";
import { connect } from "react-redux";
import { PanelGroup, Panel, Table } from "react-bootstrap";

export class Bill extends React.Component {

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
              <Table className="bill__call-charges" responsive>
                  <thead>
                    <tr>
                      <th>Called</th>
                      <th>Duration</th>
                      <th>Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                  {bill.callCharges.calls.map((item, index) =>
                     <tr key={index}>
                      <td>{item.called}</td>
                      <td>{item.duration}</td>
                      <td>{item.cost}</td>
                     </tr>
                  )}
                </tbody>
              </Table>
              <div className="panel-footer">
                  {`Total: ${bill.callCharges.total}`}
              </div>
          </Panel>
          <Panel header="Your Packages" eventKey="2">
              <Table className="bill__packages" responsive>
                  <thead>
                  <tr>
                      <th>Type</th>
                      <th>Name</th>
                      <th>Cost</th>
                  </tr>
                  </thead>
                  <tbody>
                  {bill.package.subscriptions.map((item, index) =>
                      <tr key={index}>
                          <td>{item.type}</td>
                          <td>{item.name}</td>
                          <td>{item.cost}</td>
                      </tr>
                  )}
                  </tbody>
              </Table>
              <div className="panel-footer">
                  {`Total: ${bill.package.total}`}
              </div>
          </Panel>
          <Panel header="Sky Store" eventKey="3">
              <h3>Your Rentals</h3>
              <Table className="bill__sky-store-rentals" responsive>
                  <thead>
                  <tr>
                      <th>Title</th>
                      <th>Cost</th>
                  </tr>
                  </thead>
                  <tbody>
                  {bill.skyStore.rentals.map((item, index) =>
                      <tr key={index}>
                          <td>{item.title}</td>
                          <td>{item.cost}</td>
                      </tr>
                  )}
                  </tbody>
              </Table>
              <h3>Buy and Keep</h3>
              <Table className="bill__sky-store-keep" responsive>
                  <thead>
                  <tr>
                      <th>Title</th>
                      <th>Cost</th>
                  </tr>
                  </thead>
                  <tbody>
                  {bill.skyStore.buyAndKeep.map((item, index) =>
                      <tr key={index}>
                          <td>{item.title}</td>
                          <td>{item.cost}</td>
                      </tr>
                  )}
                  </tbody>
              </Table>
              <div className="panel-footer">
                  {`Total: ${bill.skyStore.total}`}
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