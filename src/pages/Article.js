import React, { Fragment } from "react";
import { useAppContext } from "../libs/contextLib";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Article component
export default function Article() {
  // Using the application context to access data and appTheme
  const { data, appTheme } = useAppContext();

  // Getting the 'title' parameter from the URL
  const { title } = useParams();

  // Finding the article with the matching title
  const article = data.posts.find((post) => post.title === title);

  return (
    <Fragment>
      {/* Header section */}
      <header className="row pt-3" style={{ color: appTheme.textColor }}>
        <div className="col-sm-12 col-lg-8 mx-auto">
          {/* Article title */}
          <h1 className="text-center"> {title} </h1>
          {/* Article sections */}
          <p className="text-capitalize text-center text-primary">
            <b> {article.section[0]} / {article.section[1]} </b>
          </p>
          {/* Author information */}
          <p
            className="my-0 rounded p-2 text-center"
            title={`Published by ${article.author} on ${article.date}`}
            style={{
              fontSize: "0.875rem",
              fontWeight: "500",
            }}
          >
            <img
              src={process.env.PUBLIC_URL + article.profilePicture}
              alt="Small Image"
              className="me-2 rounded-circle shadow"
              style={{
                width: "3.5rem",
                height: "3.5rem",
                objectFit: "cover",
                border: `2px dashed ${appTheme.textColor}`,
              }}
            />
            <span className=""> {article.author} </span>
            <span className="mx-2"> • </span>
            <span className=""> {article.date} </span>
          </p>
        </div>
      </header>

      {/* Main article content */}
      <section className="row">
        <div className="col-12 mx-auto p-3 pt-2">
          <img
            src={process.env.PUBLIC_URL + article.image}
            alt="Card image"
            title="Image by Freepik.com"
            className="imageZoom card-img-top rounded shadow-sm"
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      {/* Article body */}
      <article className="row mt-0" style={{ color: appTheme.textColor }}>
        <div className="col-sm-12 col-lg-9 mx-auto px-3">
          <h2 className="py-2" style={{ fontSize: "1.2rem" }}>
            {article.article[0].heading1}
          </h2>
          <p style={{ fontSize: "1rem" }}>{article.article[0].paragraph2}</p>
          <p style={{ fontSize: "1rem" }}>{article.article[0].paragraph3}</p>
          <h2 className="py-3" style={{ fontSize: "1.2rem" }}>
            {article.article[0].heading2}
          </h2>
          <p style={{ fontSize: "1rem" }}>{article.article[0].paragraph4}</p>
        </div>
      </article>

      {/* Related content and navigation */}
      <section className="row mt-3" style={{ color: appTheme.textColor }}>
        <div className="col-sm-12 col-lg-3 text-center mx-auto">
          <Link
            to="../archive"
            className="btn btn-white shadow-sm"
            style={{ color: appTheme.textColor, border: `2px solid ${appTheme.textColor}` }}
          >
            View All Posts
          </Link>
        </div>

        {/* Author section */}
        <section className="row mx-auto mt-5 pt-5 p-3" style={{ borderTop: `2px solid ${appTheme.textColor}` }}>
          <div className="col-sm-12 col-md-3 mb-3 text-center">
            <img
              src={process.env.PUBLIC_URL + article.profilePicture}
              alt="Small Image"
              className="me-2 rounded shadow-sm rounded-circle"
              style={{
                width: "10rem",
                height: "10rem",
                objectFit: "cover",
                border: `2px dashed ${appTheme.textColor}`,
              }}
            />
          </div>
          <div className="col-sm-12 col-md px-3" style={{ fontSize: "1.125rem" }}>
            <h3>About {article.author} </h3>
            <p>{article.aboutAuthor}</p>
          </div>
        </section>
      </section>
    </Fragment>
  );
}
