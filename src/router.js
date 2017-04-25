import React from 'react'
import { Router, Route } from 'dva/router'
import Index from './routes/Index'
import Login from './routes/Login'
import Register from './routes/Register'
import UserInfo from './routes/UserInfo'
import BorrowCenter from './routes/borrowCenter'
import Manager from './routes/Manager'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Index}>z
      	<Route path="/login" component={ Login }/>
      	<Route path="/register" component={ Register }/>
      	<Route path="/userCenter" component={ UserInfo }/>
      	<Route path="/book" component={ BorrowCenter }/>
        <Route path="/manager" component={ Manager }/>
      </Route>
    </Router>
  );
}

export default RouterConfig;
