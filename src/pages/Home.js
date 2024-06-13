import React, { Fragment } from "react";
import {Link} from "react-router-dom";
import ImageCard from '../components/ImageCard';

export default function Home(){
    
    return(
        <Fragment>
          <header className='row pt-5 pb-4'>
            <div className="col-sm-12 col-lg-6">
              <ImageCard 
              title="Architectural Engineering Wonders of the modern era for your Inspiration"
              author="Mario Sanchez"
              section="TECHNOLOGY"
              date="June 13, 2024"
              img="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75"
              />
            </div>
            <div className="col-sm-12 col-lg-6">
            <ImageCard 
              title="Architectural Engineering Wonders of the modern era for your Inspiration"
              author="Mario Sanchez"
              section="TECHNOLOGY"
              date="June 13, 2024"
              img="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F2fda477a7e32f813abb9a8ef425939e6a91c7973-987x1481.png%3Frect%3D0%2C279%2C987%2C607%26w%3D987%26auto%3Dformat&w=640&q=75"
              />
            </div>
          </header>
          <section className='row'>
          <div className="col-sm-12 col-lg-4">
              <ImageCard 
              title="Architectural Engineering Wonders of the modern era for your Inspiration"
              author="Mario Sanchez"
              section="TECHNOLOGY"
              date="June 13, 2024"
              img="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75"
              />
            </div>
            <div className="col-sm-12 col-lg-4">
              <ImageCard 
              title="Architectural Engineering Wonders of the modern era for your Inspiration"
              author="Mario Sanchez"
              section="TECHNOLOGY"
              date="June 13, 2024"
              img="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75"
              />
            </div>
            <div className="col-sm-12 col-lg-4">
              <ImageCard 
              title="Architectural Engineering Wonders of the modern era for your Inspiration"
              author="Mario Sanchez"
              section="TECHNOLOGY"
              date="June 13, 2024"
              img="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75"
              />
            </div>
            <div className="col-sm-12 col-lg-4">
              <ImageCard 
              title="Architectural Engineering Wonders of the modern era for your Inspiration"
              author="Mario Sanchez"
              section="TECHNOLOGY"
              date="June 13, 2024"
              img="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75"
              />
            </div>
            <div className="col-sm-12 col-lg-4">
              <ImageCard 
              title="Architectural Engineering Wonders of the modern era for your Inspiration"
              author="Mario Sanchez"
              section="TECHNOLOGY"
              date="June 13, 2024"
              img="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75"
              />
            </div>
            <div className="col-sm-12 col-lg-4">
              <ImageCard 
              title="Architectural Engineering Wonders of the modern era for your Inspiration"
              author="Mario Sanchez"
              section="TECHNOLOGY"
              date="June 13, 2024"
              img="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75"
              />
            </div>

          </section>
          <section className='row py-5'>
            <div className="col-sm-12 col-lg-3 text-center mx-auto">
            <Link to="archive" class="btn btn-white border">View All Posts</Link>
            </div>
          </section>
        </Fragment>
    );
}