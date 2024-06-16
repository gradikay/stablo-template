import React, { Fragment } from "react";
import ImageCard from "../components/ImageCard";
import { UseAppContext } from "../libs/contextLib";

export default function About(){
  const {appTheme} = UseAppContext();
    return(
        <Fragment>
          <header className='row pt-5' style={{color:appTheme.textColor}}>
            <div className="col-8 mx-auto text-center">
            <h1>About</h1>
            <p>We are a small passionate team.</p>
            </div>
            
          </header>
          <section className="row pt-5" >
            <div className="col-4">
            <ImageCard 
              title="none"
              author="none"
              section="none"
              img="https://img.freepik.com/free-photo/black-businesswoman-smiling_74855-1086.jpg?t=st=1718550589~exp=1718554189~hmac=0bdfa3b9a24d2541a28cdba6f07a09fc5027d87061d9d5157fb80351eb5c7c82&w=996"
            />
             </div>
             <div className="col-4">
            <ImageCard 
              title="none"
              author="none"
              section="none"
              img="https://img.freepik.com/free-photo/portrait-expressive-young-man-wearing-formal-suit_273609-6942.jpg?t=st=1718548582~exp=1718552182~hmac=e6c98624100d48830986ec058bc9cb04148966bd0d5b83396522dc73b22e7c99&w=996"
            />
            </div>
            <div className="col-4">
            <ImageCard 
              title="none"
              author="none"
              section=""
              img="https://img.freepik.com/free-photo/young-beautiful-woman-smiling-posing-purple-wall_176420-2852.jpg?t=st=1718548754~exp=1718552354~hmac=c7421191f9f63780506a60513dbc9b43e02251f2b1d782f441464ec3ded98780&w=996"
            />
            </div>

          </section>
          <section className="row" style={{color:appTheme.textColor}}>
            <div className="col-9 mx-auto text-center">
              <p>We provide real-time connectivity to enable software providers 
                and financial institutions to build integrated products for their small 
                business customers.</p>
              <p>Our API infrastructure is leveraged by clients ranging from lenders 
                to corporate card providers and business forecasting tools, with use cases 
                including 
                automatic reconciliation, business dashboarding, and loan decisioning.</p>
            </div>
            <div className="col-12 text-center mt-4">
              <a className="btn shadow-sm" href="mailto:gradi_kayamba@yahoo.com" style={{color:appTheme.backgroundColor, backgroundColor:appTheme.textColor}}> 
                <span className="pe-2">Get in touch</span>
                <i className="material-icons d-block d-inline float-end"> &#xe0be; </i>
              </a>

            </div>
          </section>
        </Fragment>
    );
}