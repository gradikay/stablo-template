import React from "react";
import '../ImageCard.css';
import { useAppContext } from "../libs/contextLib";
import { Link } from "react-router-dom";

// ImageCard component displays a card with image, title, section, author, and date
export default function ImageCard(props) {
    // Accessing theme from context
    const { appTheme } = useAppContext();

    // Destructuring props
    const { img, title, section, section2, author, date, profilePicture, fullTitle } = props;

    return (
        // Link to the article with fullTitle as the dynamic parameter
        <Link style={{ textDecoration: "none", cursor: "pointer" }} to={`../article/${fullTitle}`}>

            <div className="card pb-4 border-0" style={{ backgroundColor: appTheme.backgroundColor }}>
                {/* Container for image with zoom effect */}
                <div className="imageZoomContainer mb-1 d-flex align-items-center justify-content-around">
                    {/* Image element */}
                    <img
                        src={process.env.PUBLIC_URL + img}
                        alt=""
                        className="imageZoom card-img-top rounded shadow-sm"
                        style={{ objectFit: "cover", height: "17rem" }}
                    />
                </div>
                {/* Section header */}
                <div className={`card-header px-2 border-0 ${section === "none" ? "d-none" : ""}`} style={{ backgroundColor: appTheme.backgroundColor, fontSize: "0.75rem", fontWeight: "500" }}>
                    {/* Section information */}
                    <p className="my-0" title={`Category: ${section}`} style={{ textTransform: "uppercase" }}>
                        <span className="text-primary">
                            {section}
                        </span>
                        <span className="mx-2 text-success">
                            {section2}
                        </span>
                    </p>
                </div>
                {/* Card body */}
                <div className={`card-body py-0 px-2 ${title === "none" ? "d-none" : ""}`}>
                    {/* Link to the article */}
                    <Link className="nav-link" link={`../article/${fullTitle}`}>
                        {/* Article title */}
                        <h2 className="animated-text card-title" title={`${fullTitle}`} style={{ backgroundColor: appTheme.backgroundColor, fontSize: "1.125rem", color: appTheme.textColor }}>
                            {title}
                        </h2>
                    </Link>
                </div>
                {/* Card footer */}
                <div className={`card-footer px-2 border-0 ${author === "none" ? "d-none" : ""}`} style={{ backgroundColor: appTheme.backgroundColor, color: appTheme.textColor, opacity: "0.70" }}>
                    {/* Author and date information */}
                    <p className="my-0 d-flex align-content-center rounded p-2" title={`Published by ${author} on ${date}`} style={{ fontSize: "0.875rem", border: `2px dashed ${appTheme.textColor}`, fontWeight: "500" }}>
                        {/* Author profile picture */}
                        <img
                            src={process.env.PUBLIC_URL + profilePicture}
                            alt=""
                            className="me-2 rounded-circle"
                            style={{ width: "20px", height: "20px", objectFit: "cover" }}
                        />
                        {author}
                        {/* Separator */}
                        <span className="mx-3"> • </span>
                        {date}
                    </p>
                </div>
            </div>
        </Link>
    );
}
