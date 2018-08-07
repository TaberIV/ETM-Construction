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
    mainImage: string;
  }

  const pages: IPageInfo[] = [
    {
      component: Home,
      name: "Home",
      path: "/",
      mainImage: "ETM4.jpg"
    },
    {
      component: AboutUs,
      name: "About Us",
      path: "/aboutUs",
      mainImage: "ETM4.jpg"
    },
    {
      component: WhatWeDo,
      name: "What We Do",
      path: "/whatWeDo",
      mainImage: "ETM4.jpg"
    },
    {
      component: Testimonials,
      name: "Testimonials",
      path: "/testimonials",
      mainImage: "ETM4.jpg"
    },
    {
      component: Photos,
      name: "Photos",
      path: "/photos",
      mainImage: "ETM4.jpg"
    },
    {
      component: Contact,
      name: "Contact",
      path: "/contact",
      mainImage: "ETM4.jpg"
    }
  ];

  return (
    <div className="site">
      <header className="header">
        <NavLink className="logo" to="/">
          {/*
          <svg className="logo__img">
            <use
              id="logo"
              width="100%"
              height="100%"
              href="/img/logoWhite.svg#logo"
            />
          </svg> 
          */}
          <img className="logo__img" src="/img/logoWhite.svg" />
        </NavLink>
        <nav>
          {pages.map(page => (
            <NavLink
              key={`${page.name}NavLink`}
              exact={page.path === "/"}
              to={page.path}
            >
              {page.name}
            </NavLink>
          ))}
        </nav>
        <div className="spacer" />
      </header>
      {pages.map(page => (
        <React.Fragment>
          <div className="mainImage">
            <img src={`/img/houses/${page.mainImage}`} />
            <h1>Build A Lifestyle</h1>
          </div>
          <Route
            key={`${page.name}Route`}
            exact={page.path === "/"}
            path={page.path}
            component={page.component}
          />
        </React.Fragment>
      ))}
      <footer>
        <div className="LLC">ETM Construction LLC</div>
        <div className="address">11 Steepletop Road Rowayton, CT 06853</div>
        <div className="phone">(203) 838-7727</div>
      </footer>
    </div>
  );
};
