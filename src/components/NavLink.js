import React from "react";
import {Link} from "react-router-dom";
import { UseAppContext } from "../libs/contextLib";

export default function NavLink(props){
    const {appTheme} = UseAppContext();
    const {link, name} = props;
    return(
        <li className={`nav-item align-content-center`}>
            <Link className="nav-link px-4 py-2" to={"/" + link} style={{color:appTheme.textColor}}> 
                {name} 
            </Link>
        </li>
    );
}