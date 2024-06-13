import React from "react";

export default function NavLink(props){
    const {link, name} = props;
    return(
        <li className="nav-item">
            <a className="nav-link text-dark px-4 py-2" href={link} > {name} </a>
        </li>
    );
}