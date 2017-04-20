import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';
import Qunahi from './containers/QunaHi';
import './index.css';

ReactDOM.render(
  <Qunahi />,
  document.getElementById('root')
);
