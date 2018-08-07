import React from "react";
import { NavLink, Route } from "react-router-dom";
import MainImage from "./components/MainImage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Photos from "./pages/Photos";
import Testimonials from "./pages/Testimonials";
import WhatWeDo from "./pages/WhatWeDo";

export default () => {
  const pages: IPageInfo[] = [
    {
      component: Home,
      name: "Home",
      path: "/",
      imgSrc: "ETM4.jpg",
      heading: "Build a Lifestyle"
    },
    {
      component: AboutUs,
      name: "About Us",
      path: "/aboutUs",
      imgSrc: "ETM4.jpg",
      heading: "Build a Lifestyle"
    },
    {
      component: WhatWeDo,
      name: "What We Do",
      path: "/whatWeDo",
      imgSrc: "ETM4.jpg",
      heading: "Build a Lifestyle"
    },
    {
      component: Testimonials,
      name: "Testimonials",
      path: "/testimonials",
      imgSrc: "ETM4.jpg",
      heading: "Build a Lifestyle"
    },
    {
      component: Photos,
      name: "Photos",
      path: "/photos",
      imgSrc: "ETM4.jpg",
      heading: "Build a Lifestyle"
    },
    {
      component: Contact,
      name: "Contact",
      path: "/contact",
      imgSrc: "ETM4.jpg",
      heading: "Build a Lifestyle"
    }
  ];

  const pageRender = (page: IPageInfo) => () => (
    <MainImage imgSrc={page.imgSrc} heading={page.heading} />
  );

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
          <Route
            key={`${page.name}Route`}
            exact={page.path === "/"}
            path={page.path}
            render={pageRender(page)}
          />
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
