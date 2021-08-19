import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants"

import * as reducers from './reducers';

describe('searchRobots', () => {
  const initialStateSearch = {
    searchField: ''
  }
  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' });
  });
  it('should handle Change searchfield', () => {
    expect(reducers.searchRobots(initialStateSearch, { type: CHANGE_SEARCH_FIELD, payload: 'abc' })).toEqual({ searchField: 'abc' });
  })
});

describe('requestRobots', () => {
  const initialStateRobots = {
    robots: [],
    isPending: false,
    error: ''
  }
  it('should return the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it('should handle REQUEST_ROBOTS_PENDING', () => {
    expect(reducers.requestRobots(initialStateRobots, { type: REQUEST_ROBOTS_PENDING })).toEqual({ robots: [], isPending: true, error: '' })
  })

  it('should handle REQUEST_ROBOTS_SUCCESS', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: [{
        id: '123',
        name: 'test',
        email: 'test@email.com'
      }]
    })).toEqual({
      robots: [{
        id: '123',
        name: 'test',
        email: 'test@email.com'
      }], isPending: false, error: ''
    })
  });
  it('should handle REQUEST_ROBOTS_FAILED', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_FAILED,
      payload: 'error'
    })).toEqual({
      robots: [], isPending: false, error: 'error'
    })
  });
});