import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import 'modern-normalize/modern-normalize.css';

import App from './components/App';
// import App from './components/App_Old';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
