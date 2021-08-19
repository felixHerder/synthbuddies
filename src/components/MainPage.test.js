import { shallow, mount, render } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  }
  wrapper = shallow(<MainPage {...mockProps} />);
});

it('renders Mainpage without crashing', () => {
  expect(wrapper).toMatchSnapshot();
})


it('filters robots correctly 2', () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: "John",
      email: "john@gmail.com"
    }],
    searchField: 'a',
    isPending: false
  }
  const filteredRobots = []
  const wrapper3 = shallow(<MainPage {...mockProps3} />);
  expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
});

it('filters robots correctly 3', () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: "John",
      email: "john@gmail.com"
    }],
    searchField: 'a',
    isPending: true
  }
  const filteredRobots = []
  const wrapper3 = shallow(<MainPage {...mockProps3} />);
  expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
});