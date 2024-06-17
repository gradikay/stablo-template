import React, { Fragment } from "react";
import { UseAppContext } from "../libs/contextLib";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";


export default function Article(){
  const {data, appTheme} = UseAppContext();
  const {title} = useParams();
  const article = data.posts.find(post => post.title === title);
    return(
        <Fragment>
          <header className='row pt-5 pb-3' style={{color:appTheme.textColor}}>
            <div className="col-8 mx-auto">
                <h1 className="text-center"> {title} </h1>
                <p className="text-capitalize text-center text-primary"> 
                    <b> {article.section[0]} / {article.section[1]} </b> 
                </p>
                <p className="my-0  rounded p-2 text-center" title={`Publishe by ${article.author} on ${article.date}`} style={{fontSize: "0.875rem", fontWeight: "500"}}>
                    <img 
                    src={process.env.PUBLIC_URL + article.profilePicture} 
                    alt="Small Image" 
                    className="me-2 rounded-circle shadow"
                    style={{width: "3.5rem", height: "3.5rem", objectFit: "cover", border:`2px dashed ${appTheme.textColor}`}}
                    />
                    <span className=""> {article.author} </span>  
                    <span className="mx-2"> • </span> 
                    <span className=""> {article.date} </span> 
                     
                </p>
            </div>
            
          </header>
          <section className='row'>
              <div className="col-12">
              <img 
                src={process.env.PUBLIC_URL + article.image} alt="Card image" 
                title="Image by Freepik.com"
                className="imageZoom card-img-top rounded shadow-sm" 
                style={{ objectFit: "cover"}}
                />
              </div>
        </section>
        <article className="row my-4" style={{color:appTheme.textColor}}>
          <div className="col-9 mx-auto">

          <h2 className="py-3" style={{fontSize: "1.2rem"}}>{article.article[0].heading1}</h2>
          <p style={{fontSize: "1rem"}}>{article.article[0].paragraph2}</p>
          <p style={{fontSize: "1rem"}}>{article.article[0].paragraph3}</p>
          <h2 className="py-3" style={{fontSize: "1.2rem"}}>{article.article[0].heading2}</h2>
          <p style={{fontSize: "1rem"}}>{article.article[0].paragraph4}</p>
          </div>

        </article>
        <section className='row py-3' style={{color:appTheme.textColor}}>
          <div className="col-sm-12 col-lg-3 text-center mx-auto">
          <Link to="../archive" className="btn btn-white shadow-sm" style={{color:appTheme.textColor, border:`2px solid ${appTheme.textColor}`}}>
            View All Posts
          </Link>
          </div>
          
          <section className='row mt-5 p-5 pb-0'>
            <div className="col-sm-12 col-md-3 mb-3 text-center">
              <img 
                src={process.env.PUBLIC_URL + article.profilePicture} 
                alt="Small Image" 
                className="me-2 rounded shadow-sm rounded-circle"
                style={{width: "10rem", height: "10rem", objectFit: "cover", border:`2px dashed ${appTheme.textColor}`}}
                />
            </div>
            <div className="col-sm-12 col-md m-3" style={{fontSize:"1.125rem"}}>
                <h3>About {article.author} </h3>
                <p>{article.aboutAuthor}</p>
            </div>
          </section>
        </section>

        </Fragment>
    );
}