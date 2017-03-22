import React from 'react'
import { Router, Route } from 'dva/router'
import Index from './routes/Index'
import Login from './routes/Login'
import Register from './routes/Register'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Index}>
      	<Route path="/login" component={ Login }/>
      	<Route path="/register" component={ Register }/>
      </Route>
    </Router>
  );
}

export default RouterConfig;
