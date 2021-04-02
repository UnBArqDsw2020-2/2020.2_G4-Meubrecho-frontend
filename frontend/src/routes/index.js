import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Registro from '../pages/Registro';
import Login from '../pages/Login';
import Home from '../pages/Home';
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/(|loja|venda|favoritos)' exact component={Home} />
        <Route path='/register' exact component={Registro} />
        <Route path='/login' component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
