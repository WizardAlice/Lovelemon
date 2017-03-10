import React from 'react'
import { Router, Route } from 'dva/router'
import IndexPage from './routes/IndexPage'
import product from './routes/Product'
import Login from './routes/Login'
import Register from './routes/Register'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage}>
      	<Route path="/product" component={ product }/>
      	<Route path="/login" component={ Login }/>
      	<Route path="/register" component={ Register }/>
      </Route>
    </Router>
  );
}

export default RouterConfig;
