import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Qunahi from './containers/QunaHi';
import './index.css';

const store = configureStore();
// const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Qunahi
    store={store}
  />,
  document.getElementById('root')
);
