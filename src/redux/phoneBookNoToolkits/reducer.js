import { combineReducers } from 'redux';
import types from './types';
// import * as types from './types';

// const contactsInitial = {
//   items: [],
//   filter: '',
// };

// const itemsReducer = (state = [], { type, payload }) => {
const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_CONTACT:
      return [...state, payload];

    case types.DELETE_CONTACT:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

// const filterReducer = (state = '', { type, payload }) => {
const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER_CONTACTS:
      return payload;

    default:
      return state;
  }
};

// const reducer = { items: itemsReducer, filter: filterReducer };
// const reducerCombined = combineReducers(reducer);
// console.log('reducerObj in reducer: ', reducer);
// export default reducerCombined;

// export default combineReducers({ items: itemsReducer, filter: filterReducer });
// export default combineReducers({ items, filter });
const reducer = combineReducers({ items, filter });
export default reducer;

// export default reducer;
