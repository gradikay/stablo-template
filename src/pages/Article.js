import React, { Fragment } from "react";
import ImageCard from "../components/ImageCard";
import { UseAppContext } from "../libs/contextLib";
import { useParams } from "react-router-dom";

export default function Article(){
  const {data, appTheme} = UseAppContext();
  const {title} = useParams();
  const article = data.posts.find(post => post.title === title);
    return(
        <Fragment>
          <header className='row py-5' style={{color:appTheme.textColor, backgroundColor : appTheme.backgroundColor}}>
            <div className="col-8 mx-auto">
                <h1 className="text-center"> {title} </h1>
                <p className="text-capitalize text-center"> 
                    <b> {article.section[0]} / {article.section[1]} </b> 
                </p>
                <p className="my-0  rounded p-2 text-center" title={`Publishe by ${article.author} on ${article.date}`} style={{fontSize: "0.875rem", fontWeight: "500"}}>
                    <img 
                    src={article.profilePicture} 
                    alt="Small Image" 
                    className="me-2 rounded-circle shadow"
                    style={{width: "3rem", height: "3rem", objectFit: "cover", border:`2px dashed ${appTheme.textColor}`}}
                    />
                    <span className="me-2"> {article.author} </span>  
                    <span className=""> {article.date} </span> 
                     
                </p>
            </div>
            
          </header>
          <section className='row'>
              <div className="col-12">
              <img 
                src={article.image} alt="Card image" 
                title="Image by Freepik.com"
                className="imageZoom card-img-top rounded shadow-sm" 
                style={{ objectFit: "cover"}}
                />
              </div>
        </section>
          <section className='row pb-5 pt-3'>
            <div className="col-sm-12 col-lg-3 text-center mx-auto">
            <ul className="pagination">
              <li className="page-item"><a className="page-link" style={{color:appTheme.backgroundColor, backgroundColor:appTheme.textColor}}  href="#">Previous</a></li>
              <li className="page-item"><a className="page-link" style={{color:appTheme.backgroundColor, backgroundColor:appTheme.textColor}} href="#">1</a></li>
              <li className="page-item"><a className="page-link" style={{color:appTheme.backgroundColor, backgroundColor:appTheme.textColor}} href="#">2</a></li>
              <li className="page-item"><a className="page-link" style={{color:appTheme.backgroundColor, backgroundColor:appTheme.textColor}}href="#">3</a></li>
              <li className="page-item"><a className="page-link" style={{color:appTheme.backgroundColor, backgroundColor:appTheme.textColor}}href="#">Next</a></li>
            </ul>
            </div>
          </section>
        </Fragment>
    );
}