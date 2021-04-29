import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Registro from '../pages/Registro';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Termos from '../pages/Termos';
import AuthorizedRoutes from './AuthorizedRoutes';
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthorizedRoutes exact path='/' component={Home} />
        <AuthorizedRoutes exact path='/login' component={Login} />
        <AuthorizedRoutes exact path='/termos' component={Termos} />
        <AuthorizedRoutes exact path='/register' component={Registro} />
      </Switch>
    </BrowserRouter>
  );
}
