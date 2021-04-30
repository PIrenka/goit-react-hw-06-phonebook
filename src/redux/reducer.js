import { combineReducers } from 'redux';
import * as types from './types';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_CONTACT:
      return [...state, payload];

    case types.DELETE_CONTACT:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER_CONTACTS:
      return payload;

    default:
      return state;
  }
};
export default combineReducers({ items: itemsReducer, filter: filterReducer });
