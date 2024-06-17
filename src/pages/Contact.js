import React, { Fragment } from "react";
import { useAppContext } from "../libs/contextLib";

// Contact component displays contact information and a contact form.
const Contact = () => {
    // Using context to access appTheme
    const { appTheme } = useAppContext();
    
    return (
        <Fragment>
            {/* Header section */}
            <header className='row pt-5' style={{ color: appTheme.textColor, backgroundColor: appTheme.backgroundColor }}>
                <div className="col-8 mx-auto text-center">
                    <h1>Contact</h1>
                    <p>We are here to help.</p>
                </div>
            </header>
            {/* Contact section */}
            <section className="row pt-5" style={{ color: appTheme.textColor, backgroundColor: appTheme.backgroundColor }}>
                <div className="col-6">
                    <h1>Contact Stable</h1>
                    <p>Have something to say? We are here to help. 
                        Fill up the form or send email or call phone.</p> 
                    <address>1734 Atlanta, GA 30000 </address>
                    <p>hello@stabletemplate.com</p>
                    <p>+1 (900) 400 7000</p>              
                </div>
                <div className="col-6">
                    {/* Contact form */}
                    <form action="/">
                        <div className="mb-3">
                            <label htmlFor="fullname" className="form-label">Full Name</label>
                            <input type="text" className="form-control form-control-lg" autoComplete="off" placeholder="Full Name"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control form-control-lg" id="email" autoComplete="off" placeholder="Enter email" name="email"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="comment" className="form-label">Message</label>
                            <textarea className="form-control form-control-lg" rows="5" id="comment" name="text" placeholder="Your message"></textarea>
                        </div>
                        <div className="d-grid">
                            <button 
                                type="submit" 
                                className="btn btn-block btn-lg"
                                style={{ color: appTheme.backgroundColor, backgroundColor: appTheme.textColor }}
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

export default Contact;
