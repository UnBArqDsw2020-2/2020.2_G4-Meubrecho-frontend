import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Registro from '../pages/Registro';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Termos from '../pages/Termos';
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/register' exact component={Registro} />
        <Route path='/login' component={Login} />
        <Route path='/termos' component={Termos} />
      </Switch>
    </BrowserRouter>
  );
}
