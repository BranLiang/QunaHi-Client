import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
import Qunahi from './containers/QunaHi';

const store = configureStore();
// const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Qunahi/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
