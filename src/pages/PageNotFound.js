import React, { Fragment } from "react";

/**
 * PageNotFound component displays a 404 error page.
 * It shows an image and a message indicating the page is not found.
 */
export default function PageNotFound() {
    return (
        <Fragment>
            {/* Header section with the 404 image */}
            <header className='row pt-5'>
                <div className="col-sm-12 col-lg-6 mx-auto">
                    {/* 404 Image */}
                    <img 
                        src={process.env.PUBLIC_URL + `/images/404.png`} 
                        alt="404 Not Found" 
                        title="Image by Freepik.com"
                        className="imageZoom card-img-top rounded shadow" 
                        style={{ objectFit: "cover", height: "17rem"}}
                    />
                </div>
            </header>
        </Fragment>
    );
}
