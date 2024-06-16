import React, { Fragment } from "react";
import ImageCard from "../components/ImageCard";

export default function Archive(){
    
    return(
        <Fragment>
          <header className='row py-5'>
            <div HName="col-8 mx-auto text-center">
            <h1>Archive</h1>
            <p>See all posts we have ever written</p>
            </div>
            
          </header>
          <section className='row'>
          <div className="col-sm-12 col-lg-4">
              <ImageCard 
              title="Architectural Engineering Wonders of the modern era for your Inspiration"
              author="Mario Sanchez"
              section="TECHNOLOGY"
              img="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75"
              />
            </div>
            <div className="col-sm-12 col-lg-4">
              <ImageCard 
              title="Architectural Engineering Wonders of the modern era for your Inspiration"
              author="Mario Sanchez"
              section="TECHNOLOGY"
              img="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75"
              />
            </div>
            <div className="col-sm-12 col-lg-4">
              <ImageCard 
              title="Architectural Engineering Wonders of the modern era for your Inspiration"
              author="Mario Sanchez"
              section="TECHNOLOGY"
              img="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75"
              />
            </div>
            <div className="col-sm-12 col-lg-4">
              <ImageCard 
              title="Architectural Engineering Wonders of the modern era for your Inspiration"
              author="Mario Sanchez"
              section="TECHNOLOGY"
              img="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75"
              />
            </div>
            <div className="col-sm-12 col-lg-4">
              <ImageCard 
              title="Architectural Engineering Wonders of the modern era for your Inspiration"
              author="Mario Sanchez"
              section="TECHNOLOGY"
              img="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75"
              />
            </div>
            <div className="col-sm-12 col-lg-4">
              <ImageCard 
              title="Architectural Engineering Wonders of the modern era for your Inspiration"
              author="Mario Sanchez"
              section="TECHNOLOGY"
              img="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75"
              />
            </div>

          </section>
          <section className='row py-5'>
            <div className="col-sm-12 col-lg-3 text-center mx-auto">
                <div className="btn-group btn-group-lg">
                    <button type="button" className="btn btn-light border">Previous</button>
                    <button type="button" className="btn btn-white border">Next</button>
                </div>
            </div>
          </section>
        </Fragment>
    );
}