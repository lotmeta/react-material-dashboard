import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import App from './App';

import DataContext, { data } from './contexts/dadosEmpresa';

ReactDOM.render(
  <App />
  , document.getElementById('root'));

serviceWorker.unregister();
