import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Cardlist from './Cardlist';

it('expects to render Cardlist comp', () => {
  const mockRobots = [
    {
      id: 1,
      name: "John Dode",
      username: "johnjohn",
      email: 'john@email.com'
    }
  ];
  expect((shallow(<Cardlist robots={mockRobots} />))).toMatchSnapshot();
});