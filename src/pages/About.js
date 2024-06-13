import React, { Fragment } from "react";
import ImageCard from "../components/ImageCard";

export default function About(){
    
    return(
        <Fragment>
          <header className='row pt-5'>
            <div className="col-8 mx-auto text-center">
            <h1>About</h1>
            <p>We are a small passionate team.</p>
            </div>
            
          </header>
          <section className="row pt-5">
            <div className="col-4">
            <ImageCard 
              title=""
              author=""
              section=""
              img="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75"
            />
             </div>
             <div className="col-4">
            <ImageCard 
              title=""
              author=""
              section=""
              img="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75"
            />
            </div>
            <div className="col-4">
            <ImageCard 
              title=""
              author=""
              section=""
              img="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75"
            />
            </div>

          </section>
          <section className="row pt-5">
            <div className="col-9 mx-auto text-center">
              <p>We provide real-time connectivity to enable software providers 
                and financial institutions to build integrated products for their small 
                business customers.</p>
              <p>Our API infrastructure is leveraged by clients ranging from lenders 
                to corporate card providers and business forecasting tools, with use cases 
                including 
                automatic reconciliation, business dashboarding, and loan decisioning.</p>
            </div>
            <div className="col-12 text-center">
              <a href="mailto:gradi_kayamba@yahoo.com"> Get in touch</a>

            </div>
          </section>
        </Fragment>
    );
}