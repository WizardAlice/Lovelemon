import React from 'react'
import { Router, Route } from 'dva/router'
import Runindex from './routes/Runindex'
import Userinfo from './routes/userinfo'
import Userupload from './routes/userupload'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Runindex}>
      </Route>
      <Route path="/userinfo" component={Userinfo}>
      </Route>
      <Route path="/userupload" component={Userupload} />
    </Router>
  );
}

export default RouterConfig;
