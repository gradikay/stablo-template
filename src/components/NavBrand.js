import React from "react";
import {Link} from "react-router-dom";
import '../App.css';
import { UseAppContext } from "../libs/contextLib";

export default function NavBrand(props){
    const {appTheme} = UseAppContext();
    const {link, name} = props;
    return(
        <li className="nav-item brand align-content-center">
            <Link className="nav-link px-4 py-2" to={link} style={{color:appTheme.textColor}}> 
                {name}
             </Link>
        </li>
    );
}