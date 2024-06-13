import React from "react";
import picthumb from "../images/me.jpg"

export default function ImageCard(props){
    const {img, title, section, author, date} = props;
    return(
        <div className="card border-0">
            <div className="mb-1 d-flex align-items-center justify-content-around">
                <img className="card-img-top rounded" src={img} alt="Card image" style={{ objectFit: "cover", height: "17rem"}}/>
            </div>
            <div className="card-header border-0 px-0 bg-white" style={{fontSize: "0.75rem", fontWeight: "500"}}>
                <p className="my-0">{section} </p>
                </div>
            <div className="card-body px-0 py-0 bg-white">
                <h2 className="card-title" style={{fontSize: "1.125rem"}}>{title}</h2>
            </div>
            <div className="card-footer border-0 px-0 bg-white">
                <p className="my-0 d-flex text-dark align-content-center" style={{fontSize: "0.875rem"}}>
                    <img src={picthumb} alt="Small Image" className="me-2 rounded-circle" style={{width: "20px", height: "20px"}}/>
                    {author} 
                    <span className="mx-3"> • </span>  
                    {date} 
                </p>
            </div>
        </div>
    );
}