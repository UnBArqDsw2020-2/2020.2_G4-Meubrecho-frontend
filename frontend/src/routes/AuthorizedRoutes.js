import { Redirect, BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Registro from '../pages/Registro';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Termos from '../pages/Termos';
export default function AuthorizedRoutes(parameters) {
  if (localStorage.getItem('authToken') !== null && localStorage.getItem('authToken') !== undefined) {
    console.log('teste');
    if (parameters.path === '/login' || parameters.path === '/register') return <Redirect to='/' />;
    return <Route {...parameters} />;
  } else if (parameters.path === '/termos') return <Route {...parameters} />;
  else if (parameters.path === '/login') return <Route {...parameters} />;
  else if (parameters.path === '/register') return <Route {...parameters} />;
  return <Redirect to={'/login'} />;
}
