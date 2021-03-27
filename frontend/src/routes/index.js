import { BrowserRouter,Switch, Route } from "react-router-dom";
import React from "react";
import Registro from "../pages/Registro";
import Login from '../pages/Login';
export default function Routes() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Registro} />
          <Route path="/login" component={Login} />
  
        </Switch>
    </BrowserRouter>
  );
}
