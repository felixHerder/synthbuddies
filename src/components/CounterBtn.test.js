import { shallow, mount, render } from 'enzyme';
import React from 'react';
import CounterBtn from './CounterBtn';

it('expects to render CountertBtn comp', () => {
  const mockColor = "red";
  expect(shallow(<CounterBtn color={mockColor} />)).toMatchSnapshot();
});
it('correctly increments the counter', () => {
  const mockColor = "red";
  const wrapper = shallow(<CounterBtn color={mockColor} />);

  wrapper.find('[id="counter"]').simulate('click');
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 2 });
  expect(wrapper.props().color).toEqual("red");
})