import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import Bill from "../../src/components/Bill";

// unit tests for the Home component
describe('Bill component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const wrapper = shallow(<Bill/>);
      assert.equal(wrapper.length, 1);
    });
  });
});
