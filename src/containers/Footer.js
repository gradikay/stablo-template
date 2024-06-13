import React from "react";

export default function Footer(){
    return(
        <footer className='row border-top py-5 mt-5'>
            <div className="col-sm-12 col-lg-3 text-center">
              <div className="dropdown dropstart dropup">
                <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown2">
                  Powered by Gradi
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Link 1</a></li>
                  <li><a className="dropdown-item" href="#">Link 2</a></li>
                  <li><a className="dropdown-item" href="#">Link 3</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6 text-center">
                <p>Copyright © 2024 Stablo. All rights reserved.</p>
                <p>Made by Web3Templates · Github</p>
            </div>
            <div className="col-sm-12 col-lg-3">
            <div className="dropdown dropend">
                <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown2">
                  System
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Link 1</a></li>
                  <li><a className="dropdown-item" href="#">Link 2</a></li>
                  <li><a className="dropdown-item" href="#">Link 3</a></li>
                </ul>
              </div>
            </div>
          </footer>
    );
}