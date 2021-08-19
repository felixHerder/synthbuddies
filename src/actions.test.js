import * as actions from './actions';
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants"
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureStore([thunkMiddleware])


it('should create an action to search robots', () => {
  expect(actions.setSearchField('chars'))
    .toEqual({ type: CHANGE_SEARCH_FIELD, payload: 'chars' })
});

it('handles requesting robots API', () => {
  const store = mockStore();
  store.dispatch(actions.requestRobots());
  const action = store.getActions();
  const expectedAction = {
    type: REQUEST_ROBOTS_PENDING
  }
  expect(action[0]).toEqual(expectedAction);
});