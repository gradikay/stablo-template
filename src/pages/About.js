import React, { Fragment } from "react";
import ImageCard from "../components/ImageCard";
import { useAppContext } from "../libs/contextLib";

// About page component
export default function About() {
  const { appTheme } = useAppContext(); // Accessing appTheme from context

  return (
    <Fragment>
      {/* Header section */}
      <header className="row pt-5" style={{ color: appTheme.textColor }}>
        <div className="col-8 mx-auto text-center">
          <h1>About</h1>
          <p>We are a small passionate team.</p>
        </div>
      </header>

      {/* Image cards section */}
      <section className="row pt-5">
        <div className="col-4">
          <ImageCard
            title="none"
            author="none"
            section="none"
            img={`/images/woman2.png`}
          />
        </div>
        <div className="col-4">
          <ImageCard
            title="none"
            author="none"
            section="none"
            img={`/images/man1.png`}
          />
        </div>
        <div className="col-4">
          <ImageCard
            title="none"
            author="none"
            section=""
            img={`/images/woman3.png`}
          />
        </div>
      </section>

      {/* Main content section */}
      <section className="row" style={{ color: appTheme.textColor }}>
        <div className="col-9 mx-auto text-center">
          <p>
            We provide real-time connectivity to enable software providers and
            financial institutions to build integrated products for their small
            business customers.
          </p>
          <p>
            Our API infrastructure is leveraged by clients ranging from lenders
            to corporate card providers and business forecasting tools, with use
            cases including automatic reconciliation, business dashboarding, and
            loan decisioning.
          </p>
        </div>
        <div className="col-12 text-center mt-4">
          {/* Contact button */}
          <a
            className="btn shadow-sm"
            href="mailto:gradi_kayamba@yahoo.com"
            style={{
              color: appTheme.backgroundColor,
              backgroundColor: appTheme.textColor,
            }}
          >
            <span className="pe-2">Get in touch</span>
            <i className="material-icons d-block d-inline float-end">&#xe0be;</i>
          </a>
        </div>
      </section>
    </Fragment>
  );
}
