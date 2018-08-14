import React from "react";
import { NavLink, Route } from "react-router-dom";
import MainImage from "./components/MainImage";
import pageInfo from "./pages/pageInfo";
import IPageInfo from "./types/IPageInfo";

const renderPage = (page: IPageInfo) => (props: any) => {
  return <MainImage {...props} {...page.mainImg} />;
};

export default () => (
  <div className="site">
    <header className="header">
      <NavLink className="logo" to="/">
        <img className="logo__img" src="/img/logoWhite.svg" />
      </NavLink>
      <nav>
        {pageInfo.map(page => (
          <NavLink
            key={`${page.name}NavLink`}
            exact={page.path === "/"}
            to={page.path}
          >
            {page.name}
          </NavLink>
        ))}
      </nav>
    </header>

    {/* main */}
    {pageInfo.map(page => (
      <React.Fragment key={`${page.name}`}>
        <Route
          key={`${page.name}MainImage`}
          exact={page.path === "/"}
          path={page.path}
          render={renderPage(page)}
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

// ! Inline SVG, had issues on iOS
//// <svg className="logo__img">
////   <use
////     id="logo"
////     width="100%"
////     height="100%"
////     href="/img/logoWhite.svg#logo"
////   />
//// </svg>
