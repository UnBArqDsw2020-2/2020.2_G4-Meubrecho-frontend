import { BrowserRouter,Switch, Route } from "react-router-dom";
import React from "react";
import Registro from "../pages/Registro";

export default function Routes() {
  return (
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Registro} />
        </Switch>
    </BrowserRouter>
  );
}
