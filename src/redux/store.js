import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

const rootReducer = combineReducers({
  contacts: reducer,
  // contacts: {
  //   items: [],
  //   filter: '',
  // },
});

const store = createStore(rootReducer, composeWithDevTools());
// export const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
// );

export default store;
