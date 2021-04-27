import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import 'modern-normalize/modern-normalize.css';

import store from './redux/store';
import App from './components/App';
// import App from './components/App_Old';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Болванка под reducer
const reducer = (state = {}, action) => state;

ReactDOM.render(
  <React.StrictMode>
    <Provider Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
