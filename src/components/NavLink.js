import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../libs/contextLib";

/**
 * NavLink Component
 * 
 * Renders a navigation link item.
 * 
 * Props:
 * - link: The URL path to navigate to.
 * - name: The display name of the navigation link.
 */
export default function NavLink(props) {
    // Accessing appTheme from context
    const { appTheme } = useAppContext();
    // Destructuring props
    const { link, name } = props;

    return (
        <li className="nav-item align-content-center">
            {/* Link to navigate to the specified path */}
            <Link className="nav-link px-4 py-2" to={link} style={{ color: appTheme.textColor }}>
                {/* Display name of the link */}
                {name}
            </Link>
        </li>
    );
}
