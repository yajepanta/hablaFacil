import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./home.js";
import { Voto } from "./voto.js";
import { MiembroDeMesa } from "./miembroMesa.js";
import Contador from "./Contador.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Navigation.js";

export default function App() {
  return (
    <Router>
  
      
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/voto">Voto responsable</Link>
            </li>
            <li>
              <Link to="/miembrodemesa">Miembro de mesa</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/voto">
          <Voto/>
          </Route>
          <Route path="/miembrodemesa">
            <MiembroDeMesa />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Contador />
      </div>
    </Router>
  );
}
