import React from "react";
import {Link} from "react-router-dom";

export default function NavLink(props){
    const {link, name} = props;
    return(
        <li className="nav-item align-content-center">
            <Link className="nav-link text-dark px-4 py-2" to={"/" + link} > {name} </Link>
        </li>
    );
}