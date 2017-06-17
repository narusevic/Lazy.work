import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';

import LazyworkApp from './components/LazyworkApp';
import store, { history } from './store';

import './styles.css';

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={LazyworkApp} />
    </Router>
  </Provider>,
  document.querySelector('.app')
);
