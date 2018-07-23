import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Houses from "./pages/Houses";

export default class Main extends Component {
  public render() {
    return (
      <div>
        <h1>ETM Construction</h1>
        <nav>
          <div>
            <NavLink exact={true} to="/">
              Home
            </NavLink>
          </div>
          <div>
            <NavLink to="/houses">Houses</NavLink>
          </div>
          <div>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </nav>
        <main>
          <Route exact={true} path="/" component={Home} />
          <Route path="/houses" component={Houses} />
          <Route path="/contact" component={Contact} />
        </main>
      </div>
    );
  }
}
