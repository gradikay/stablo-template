import React, { Fragment, useContext } from "react";
import {Link} from "react-router-dom";
import ImageCard from '../components/ImageCard';
import { UseAppContext } from "../libs/contextLib";

export default function Home(){

  const {data, appTheme} = UseAppContext();
    
  return(
      <Fragment>
        <header className='row pt-5'>
        {
            data.posts.slice(0,2).map((post, index) => (
              <div className="col-sm-12 col-md-6" key={index}>
                <ImageCard 
                fullTitle={post.title}
                title={post.title.length > 40 ? post.title.slice(0,40) + " ... read more" : post.title}
                author={post.author}
                section={post.section[0]}
                section2={post.section[1]}
                date={post.date}
                img={post.image}
                profilePicture={post.profilePicture}
                />
              </div>
            ))
          }
        </header>

        <section className='row'>
          {
            data.posts.slice(2,).map((post, index) => (
              <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
                <ImageCard 
                fullTitle={post.title}
                title={post.title.length > 37 ? post.title.slice(0,37) + " ... read more" : post.title}
                author={post.author}
                section={post.section[0]}
                section2={post.section[1]}
                date={post.date}
                img={post.image}
                profilePicture={post.profilePicture}
                />
              </div>
            ))
          }
        </section>

        <section className='row pt-3 pb-5'>
          <div className="col-sm-12 col-lg-3 text-center mx-auto">
          <Link link="archive" className="btn btn-white shadow-sm" style={{color:appTheme.textColor, border:`2px solid ${appTheme.textColor}`}}>
            View All Posts
          </Link>
          </div>
        </section>
      </Fragment>
  );
}