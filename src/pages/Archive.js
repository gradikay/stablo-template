import React, { Fragment } from "react";
import ImageCard from "../components/ImageCard";
import { UseAppContext } from "../libs/contextLib";
 // e
export default function Archive(){
  const {data, appTheme} = UseAppContext();
    return(
        <Fragment>
          <header className='row py-5 text-center' style={{color:appTheme.textColor, backgroundColor : appTheme.backgroundColor}}>
            <div HName="col-8 mx-auto text-center">
            <h1>Archive</h1>
            <p>See all posts we have ever written</p>
            </div>
            
          </header>
          <section className='row'>
          {
            data.posts.map((post, index) => (
              <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
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
        </section>
        </Fragment>
    );
}