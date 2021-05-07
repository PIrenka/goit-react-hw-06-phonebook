import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

const rootReducer = combineReducers({
  contacts: reducer,
});

const store = createStore(rootReducer, composeWithDevTools());
// export const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
// );

export default store;

//=============================================
//=============================================
//=============================================

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import contactsReducer from './Phone/phone-reducer';

// const persistConfig = {
//   key: 'phoneBooks',
//   storage,
//   blacklist: ['filter'],
// };
// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   logger,
// ];

// const store = configureStore({
//   reducer: {
//     contacts: persistReducer(persistConfig, contactsReducer),
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });

// const persistor = persistStore(store);

// export default { store, persistor };
