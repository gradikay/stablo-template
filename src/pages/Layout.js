// Layout.js
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import NavLink from '../components/NavLink';
import NavBrand from '../components/NavBrand';
import { UseAppContext } from "../libs/contextLib";

const Layout = () => {
  const { appTheme } = UseAppContext();

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler brand shadow-sm"
            type="button"
            style={{ color: appTheme.textColor, border: `2px solid ${appTheme.textColor}` }}
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
            aria-controls="collapsibleNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="p-2 d-block">
              Stable
            </span>
          </button>
          <div className="collapse navbar-collapse mt-sm-3 mt-lg-0  justify-content-center" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <NavLink name="Home" link="" />
              <NavLink name="About" link="about" />
              <NavLink name="Contact" link="contact" />
              <NavBrand name="Stable" link="" />
              <NavLink name="Archive" link="archive" />
              <NavLink name="Pro Version" link="proversion"/>
              <NavLink name="Download" link="download"/>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
}

export default Layout;
