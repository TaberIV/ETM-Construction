import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import Home from "./pages/Home";
import Houses from "./pages/Houses";
import Logo from "./pages/Logo";

export default class Main extends Component {
  public render() {
    return (
      <div>
        <img src="/ETMlogo.svg" width="500" />
        <nav>
          <ul>
            <li>
              <NavLink exact={true} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/houses">Houses</NavLink>
            </li>
            <li>
              <NavLink to="/logo">Logo</NavLink>
            </li>
          </ul>
        </nav>
        <main>
          <Route exact={true} path="/" component={Home} />
          <Route path="/houses" component={Houses} />
          <Route path="/logo" component={Logo} />
        </main>
      </div>
    );
  }
}
