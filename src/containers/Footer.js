import React from "react";
import { UseAppContext } from "../libs/contextLib";

export default function Footer(){

  const {appTheme, setAppTheme} = UseAppContext();
  //console.log(); // Testing/Debugging

    return(
        <footer className='row py-5 mt-5' style={{color:appTheme.textColor, borderTop:`2px solid ${appTheme.textColor}`}}>
            <div className="col-sm-12 col-md-3 col-lg-4 mb-3 text-center">
              <button type="button" className="btn" style={{color:appTheme.backgroundColor, backgroundColor : appTheme.textColor}} disabled >
                Powered by <span className="brand"> Gradi </span>
              </button>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 mb-3 text-center">
                <p>Copyright © 2024 Gradi Stable. All rights reserved.</p>
                <p>Made from scratch · Gradi Kayamba</p>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-4">
            <div className="dropdown dropend text-center">
                <button 
                type="button" 
                data-bs-toggle="dropdown"
                className={`btn dropdown-toggle rounded shadow-sm`}
                style={{color:appTheme.textColor, border:`2px solid ${appTheme.textColor}`}}
                >
                   <span className="brand"> Theme </span>
                </button>
                
                <ul className="dropdown-menu px-2">
                  <li>
                    <button 
                    type="button" 
                    className="btn border"
                    style={{backgroundColor: "#ecf39e", color: "#132a13"}}
                    onClick={() => setAppTheme({backgroundColor: "#ecf39e", textColor: "#132a13"})}
                    >
                      Green Ocean
                    </button>
                  </li>
                  <li>
                    <button 
                    type="button" 
                    className="btn border my-2"
                    style={{backgroundColor: "#023047", color: "#fb8500"}}
                    onClick={() => setAppTheme({backgroundColor: "#023047", textColor: "#fb8500"})}
                    >
                      Blue Origin
                    </button>
                  </li>
                  <li>
                    <button 
                    type="button" 
                    className="btn border mb-2"
                    style={{backgroundColor: "black", color: "white"}}
                    onClick={() => setAppTheme({backgroundColor: "black", textColor: "white"})}
                    >
                      Black on white
                    </button>
                    <li>
                    <button 
                    type="button" 
                    className="btn border"
                    style={{backgroundColor: "white", color: "black"}}
                    onClick={() => setAppTheme({backgroundColor: "white", textColor: "black"})}
                    >
                      Reset
                    </button>
                  </li>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
    );
}