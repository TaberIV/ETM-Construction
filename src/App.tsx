import React from "react";
import { NavLink, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Photos from "./pages/Photos";
import Testimonials from "./pages/Testimonials";
import WhatWeDo from "./pages/WhatWeDo";

export default () => {
  interface IPageInfo {
    component: React.StatelessComponent;
    name: string;
    path: string;
  }

  const pages: IPageInfo[] = [
    { component: Home, name: "Home", path: "/" },
    { component: AboutUs, name: "About Us", path: "/aboutUs" },
    { component: WhatWeDo, name: "What We Do", path: "/whatWeDo" },
    { component: Testimonials, name: "Testimonials", path: "/testimonials" },
    { component: Photos, name: "Photos", path: "/photos" },
    { component: Contact, name: "Contact", path: "/contact" }
  ];

  return (
    <div className="site">
      <header>
        <NavLink className="logo" to="/">
          <img src="/img/logo.svg" />
        </NavLink>
        <nav>
          {pages.map(page => (
            <NavLink exact={page.path === "/"} to={page.path}>
              {page.name}
            </NavLink>
          ))}
        </nav>
        <div className="spacer" />
      </header>
      {pages.map(page => (
        <Route
          key={`${page.name}Route`}
          exact={page.path === "/"}
          path={page.path}
          component={page.component}
        />
      ))}
      <footer>
        <div>ETM Construction LLC</div>
        <div>11 Steepletop Road Rowayton, CT 06853</div>
        <div>(203) 838-7727</div>
      </footer>
    </div>
  );
};
