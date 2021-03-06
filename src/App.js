import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Chart } from 'react-chartjs-2';
import { ThemeProvider } from '@material-ui/styles';
import validate from 'validate.js';

import { chartjs } from './helpers';
import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
import validators from './common/validators';
import Routes from './Routes';

import ContextProvider from 'contexts';
//import DataContext, { data } from './contexts/dadosEmpresa';
import Store from './contexts/Store';

const browserHistory = createBrowserHistory();

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
  draw: chartjs.draw
});

validate.validators = {
  ...validate.validators,
  ...validators
};


const App = () => {

  //const [state, setState] = useState(data);

  return (
    <ThemeProvider theme={theme}>
      <Store>
        <ContextProvider>
          <Router history={browserHistory}>
            <Routes />
          </Router>
        </ContextProvider>
      </Store>
    </ThemeProvider >
  );

}

export default App;
