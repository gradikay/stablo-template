import React from "react";

export default function ImageCard(props){
    const {img, title, section, author, date} = props;
    return(
        <div className="card border-0">
          <img className="card-img-top" src={img} alt="Card image" />
          <div className="card-header border-0 px-0 bg-white"> {section} </div>
          <div className="card-body px-0 py-0 bg-white">
            <h4 className="card-title">{title}</h4>
          </div>
          <div className="card-footer border-0 px-0 bg-white">{author} {date} </div>
        </div>
    );
}