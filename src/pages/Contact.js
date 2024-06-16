import React, { Fragment } from "react";
import { UseAppContext } from "../libs/contextLib";

export default function Contact(){
    const {appTheme} = UseAppContext();
    
    return(
        <Fragment>
          <header className='row pt-5' style={{color:appTheme.textColor, backgroundColor : appTheme.backgroundColor}}>
            <div className="col-8 mx-auto text-center">
            <h1>Contact</h1>
            <p>We are here to help.</p>
            </div>
            
          </header>
          <section className="row pt-5" style={{color:appTheme.textColor, backgroundColor : appTheme.backgroundColor}}>
            <div className="col-6">
                <h1>Contact Stable</h1>
                <p>Have something to say? We are here to help. 
                    Fill up the form or send email or call phone.</p> 
                <address>1734 Sanfransisco, CA 93063</address>
                <p>hello@stablotemplate.com</p>
                <p>+1 (900) 400 7000</p>              
            </div>
            <div className="col-6">
            <form action="/">
                <div className="">
                    <label for="fullname" className="form-label"></label>
                    <input type="text" className="form-control form-control-lg" autoComplete="off" placeholder="Full Name"/>
                </div>
                <div className="">
                    <label for="email" className="form-label"></label>
                    <input type="email" className="form-control form-control-lg" id="email" autoComplete="off" placeholder="Enter email" name="email"/>
                </div>
                <div className="mb-3">
                <label for="comment"></label>
                <textarea className="form-control form-control-lg" rows="5" id="comment" name="text" placeholder="Your message"></textarea>
                </div>
                <div className="d-grid">
                    <button 
                    type="submit" 
                    className="btn btn-block btn-lg"
                    style={{color:appTheme.backgroundColor, backgroundColor:appTheme.textColor}}
                    >
                        <b>Send Message</b>
                    </button>

                </div>
                </form>            
            </div>
          </section>
        </Fragment>
    );
}