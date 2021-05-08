import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import 'modern-normalize/modern-normalize.css';

import store from './redux/store';
// import { store } from './redux/store';
// import * as store from './redux/store';
import App from './components/App';

import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
