import React from 'react'
import { Router, Route } from 'dva/router'
import Runindex from './routes/Runindex'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Runindex}>
      
      </Route>
    </Router>
  );
}

export default RouterConfig;
