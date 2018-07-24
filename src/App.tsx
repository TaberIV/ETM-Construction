import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import Home from "./pages/Home";
import Houses from "./pages/Houses";
import Logo from "./pages/Logo";

export default class Main extends Component {
  public render() {
    return (
      <div>
        <h1 className="heavy">ETM Construction</h1>
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

{
  /* <svg viewBox="0 0 240 80" className="logo">
  <text x="0" y="10">
    ETM
  </text>
  <rect
    x="21.1"
    y=".9"
    width="7.2"
    height="8.1"
    fill="white"
    fillOpacity="0.4"
  />
</svg>; */
}
