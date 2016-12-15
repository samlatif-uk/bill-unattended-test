import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import Bill from "../../src/components/Bill";

const billJSON = require('../../bill.json');

// unit tests for the Bill component
describe('Bill component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const props = {dispatch: ()=>{}, bill: billJSON};
      const wrapper = shallow(<Bill {...props}/>);
      assert.equal(wrapper.length, 1);
    });
  });
});
