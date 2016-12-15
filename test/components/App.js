import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import { App } from "../../src/components/App";

const billJSON = require('../../bill.json')

// unit tests for the App component
describe('App component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const props = {dispatch: ()=>{}, bill: billJSON};
      const wrapper = shallow(<App {...props}/>);
      assert.equal(wrapper.length, 1);
    });
  });
});
