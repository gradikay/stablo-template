import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ImageCard from '../components/ImageCard';
import { useAppContext } from "../libs/contextLib";

/**
 * Home component displays the main page content including featured posts and a link to the archive.
 * @returns {JSX.Element} JSX element containing home page content.
 */
export default function Home() {
  // Accessing data and appTheme from AppContext
  const { data, appTheme } = useAppContext();
    
  return (
    <Fragment>
      {/* Featured posts section */}
      <header className='row py-3'>
        {data.posts.slice(0, 2).map((post, index) => (
          <div className="col-sm-12 col-md-6" key={index}>
            {/* ImageCard component displaying post information */}
            <ImageCard 
              fullTitle={post.title}
              title={post.title.length > 40 ? post.title.slice(0, 40) + " ... read more" : post.title}
              author={post.author}
              section={post.section[0]}
              section2={post.section[1]}
              date={post.date}
              img={post.image}
              profilePicture={post.profilePicture}
            />
          </div>
        ))}
      </header>

      {/* Other posts section */}
      <section className='row'>
        {data.posts.slice(2).map((post, index) => (
          <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
            {/* ImageCard component displaying post information */}
            <ImageCard 
              fullTitle={post.title}
              title={post.title.length > 37 ? post.title.slice(0, 37) + " ... read more" : post.title}
              author={post.author}
              section={post.section[0]}
              section2={post.section[1]}
              date={post.date}
              img={post.image}
              profilePicture={post.profilePicture}
            />
          </div>
        ))}
      </section>

      {/* View all posts button */}
      <section className='row pt-2 pb-4'>
        <div className="col-sm-12 col-lg-3 text-center mx-auto">
          {/* Link to the archive page */}
          <Link to="archive" className="btn btn-white shadow-sm" style={{ color: appTheme.textColor, border: `2px solid ${appTheme.textColor}` }}>
            View All Posts
          </Link>
        </div>
      </section>
    </Fragment>
  );
}