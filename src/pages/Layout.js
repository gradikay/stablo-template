import React, { Fragment } from "react";
import {Outlet} from "react-router-dom";
import NavLink from '../components/NavLink';
import NavBrand from '../components/NavBrand';

const Layout = () =>{
    return(
        <Fragment>
            <nav className="navbar navbar-expand-sm justify-content-center">
                <ul className="navbar-nav">
                <NavLink name="Home" link="" />
                <NavLink name="About" link="about" />
                <NavLink name="Contact" link="contact" />
                <NavBrand name="Stable" link="" />
                <NavLink name="Archive" link="archive" />
                <NavLink name="Pro Version" link="proversion" />
                <NavLink name="Download" link="download" />
                </ul>
            </nav>
            <Outlet/>
          </Fragment>
    );
}

export default Layout;