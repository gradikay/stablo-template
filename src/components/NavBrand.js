import React from "react";

export default function NavBrand(props){
    return(
        <li className="nav-item">
            <a className="nav-link nav-brand text-dark px-4 py-2" href={props.link} > {props.name} </a>
        </li>
    );
}