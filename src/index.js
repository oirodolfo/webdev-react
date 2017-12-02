// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider } from 'material-ui/styles';

import theme from './theme';

const MaterialApp = () => (
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(<MaterialApp />, document.getElementById("root"));

registerServiceWorker();
