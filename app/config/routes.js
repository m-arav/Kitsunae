import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Main from '../components/Main';
import Test from '../components/test';

const routes = (
  <Router history={hashHistory} >
    <Route path='/' component={Main} />
    <Route path=':studio' component={Test} />
  </Router>
);

export default routes;
