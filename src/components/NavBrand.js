import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
import { useAppContext } from "../libs/contextLib";

/**
 * NavBrand Component
 * 
 * Renders a navigation brand item as a list item with a Link.
 * 
 * Props:
 * - link: String - The path or URL to navigate to.
 * - name: String - The name or label of the brand to display.
 */
export default function NavBrand(props) {
    const { appTheme } = useAppContext();
    const { link, name } = props;

    return (
        <li className={`nav-item brand align-content-center`}>
            {/* Navigation link with provided link and name */}
            <Link className="nav-link px-4 py-2" to={link} style={{ color: appTheme.textColor }}>
                {name}
            </Link>
        </li>
    );
}