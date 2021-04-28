import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import 'modern-normalize/modern-normalize.css';

import store from './redux/store';
import App from './components/App';
// import App from './components/App_Old';

import { Provider } from 'react-redux';
console.log('store.getState(): ', store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
