import React from "react";
import picthumb from "../images/me.jpg"
import '../ImageCard.css';

export default function ImageCard(props){
    const {img, title, section, section2, author, date} = props;

    return(
        <div className="card border-0 pb-4">
            <div className="imageZoomContainer mb-1 d-flex align-items-center justify-content-around">
                <img className="imageZoom card-img-top rounded" src={img} alt="Card image" style={{ objectFit: "cover", height: "17rem"}}/>
            </div>
            <div className="card-header px-2 border-0 bg-white" style={{fontSize: "0.75rem", fontWeight: "500"}}>
                <p className="my-0" style={{textTransform: "uppercase"}}>
                    <span className="text-primary"> {section} </span> 
                    <span className="mx-2 text-success"> {section2} </span>
                </p>
                </div>
            <div className="card-body py-0 px-2 bg-white">
                <h2 className="animated-text card-title" style={{fontSize: "1.125rem"}}>{title}</h2>
            </div>
            <div className="card-footer px-2 border-0 bg-white">
                <p className="my-0 d-flex align-content-center" style={{color: "gray", fontSize: "0.875rem", fontWeight: "500"}}>
                    <img src={picthumb} alt="Small Image" className="me-2 rounded-circle" style={{width: "20px", height: "20px"}}/>
                    {author} 
                    <span className="mx-3"> • </span>  
                    {date} 
                </p>
            </div>
        </div>
    );
}