import React from "react";
import {Link} from "react-router-dom";
import '../App.css';

export default function NavBrand(props){
    const {link, name} = props;
    return(
        <li className="nav-item brand align-content-center">
            <Link className="nav-link nav-brand text-dark px-4 py-2" to={link} > {name} </Link>
        </li>
    );
}