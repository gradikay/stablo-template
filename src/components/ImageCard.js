import React from "react";
import '../ImageCard.css';
import { UseAppContext } from "../libs/contextLib";
import { Link } from "react-router-dom";

export default function ImageCard(props){
    const {appTheme} = UseAppContext();
    const {img, title, section, section2, author, date, profilePicture, fullTitle} = props;

    return(
        <div className="card pb-4 border-0" style={{backgroundColor:appTheme.backgroundColor}}>
            <div className="imageZoomContainer mb-1 d-flex align-items-center justify-content-around">
                <img 
                src={img} alt="Card image" 
                title="Image by Freepik.com"
                className="imageZoom card-img-top rounded shadow-sm" 
                style={{ objectFit: "cover", height: "17rem"}}
                />
            </div>
            <div className={`card-header px-2 border-0 ${section == "none" ? "d-none" : "" }`} style={{backgroundColor:appTheme.backgroundColor, fontSize: "0.75rem", fontWeight: "500"}}>
                <p className="my-0" title={`Category: ${section}`} style={{textTransform: "uppercase"}}>
                    <span className="text-primary"> 
                        {section} 
                    </span> 
                    <span className="mx-2 text-success"> 
                        {section2}
                    </span>
                </p>
                </div>
            <div className={`card-body py-0 px-2 ${title == "none" ? "d-none" : "" }`}>
                <Link className="nav-link" to={`../article/${fullTitle}`}>
                    <h2 className="animated-text card-title" title={`${fullTitle}`} style={{backgroundColor:appTheme.backgroundColor, fontSize: "1.125rem", color:appTheme.textColor}}>
                        {title}
                    </h2>
                </Link>
            </div>
            <div className={`card-footer px-2 border-0 ${author == "none" ? "d-none" : "" }`} style={{backgroundColor: appTheme.backgroundColor, color:appTheme.textColor, opacity:"0.70"}}>
                <p className="my-0 d-flex align-content-center rounded p-2" title={`Publishe by ${author} on ${date}`} style={{fontSize: "0.875rem", border:`2px dashed ${appTheme.textColor}`, fontWeight: "500"}}>
                    <img 
                    src={profilePicture} 
                    alt="Small Image" 
                    className="me-2 rounded-circle" 
                    style={{width: "20px", height: "20px", objectFit: "cover"}}
                    />
                    {author} 
                    <span className="mx-3"> • </span>  
                    {date} 
                </p>
            </div>
        </div>
    );
}