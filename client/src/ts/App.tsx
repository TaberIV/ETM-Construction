import React from "react";
import { NavLink, Route } from "react-router-dom";
import MainImage from "./components/MainImage";
import pageInfo from "./pages/pageInfo";
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
            end={page.path === "/"}
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
        {page.mainImg && (
          <Route
            key={`${page.name}MainImage`}
            path={page.path}
            element={<MainImage {...page.mainImg} />}
          />
        )}
        <Route
          key={`${page.name}Route`}
          path={page.path}
          element={page.component}
        />
      </React.Fragment>
    ))}

    <footer>
      <div className="LLC">ETM Construction LLC</div>
      <div className="address">etmrowayton@gmail.com</div>
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
