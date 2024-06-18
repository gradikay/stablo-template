import React from "react";
import { useAppContext } from "../libs/contextLib";

// Footer component
export default function Footer() {
  // Accessing appTheme and setAppTheme from context
  const { appTheme, setAppTheme } = useAppContext();

  return (
    <footer className='row py-5 mt-3' style={{ color: appTheme.textColor, borderTop: `2px solid ${appTheme.textColor}` }}>
      {/* Powered by Gradi section */}
      <div className="col-sm-12 col-md-3 col-lg-4 mb-3 text-center">
        <button type="button" className="btn" style={{ color: appTheme.backgroundColor, backgroundColor: appTheme.textColor }} disabled>
          Powered by <span className="brand"> Gradi </span>
        </button>
      </div>
      {/* Copyright and Made by section */}
      <div className="col-sm-12 col-md-6 col-lg-5 mb-1 text-center">
        <p>Copyright © 2024 Gradi Stable. All rights reserved.</p>
        <p>Built from scratch · <span className="brand" style={{ fontSize: "1.2rem" }}> Gradi Kayamba. </span> </p>
      </div>
      {/* Theme dropdown section */}
      <div className="col-sm-12 col-md-3 col-lg-3">
        <div className="dropdown text-center">
          <button
            type="button"
            data-bs-toggle="dropdown"
            className={`btn dropdown-toggle rounded shadow-sm`}
            style={{ color: appTheme.textColor, border: `2px solid ${appTheme.textColor}` }}
          >
            <span className="brand"> Theme </span>
          </button>

          {/* Dropdown menu for theme selection */}
          <ul className="dropdown-menu px-2 shadow mx-auto" style={{ backgroundColor: appTheme.backgroundColor, border: `2px solid ${appTheme.textColor}` }}>
            {/* Green Ocean theme */}
            <li>
              <button
                type="button"
                className="btn border"
                style={{ backgroundColor: "#ecf39e", color: "#132a13" }}
                onClick={() => setAppTheme({ backgroundColor: "#ecf39e", textColor: "#132a13" })}
              >
                Green Ocean
              </button>
            </li>
            {/* Blue Origin theme */}
            <li>
              <button
                type="button"
                className="btn border my-2 w-100"
                style={{ backgroundColor: "#023047", color: "#fb8500" }}
                onClick={() => setAppTheme({ backgroundColor: "#023047", textColor: "#fb8500" })}
              >
                Blue Origin
              </button>
            </li>
            {/* Black on white theme */}
            <li>
              <button
                type="button"
                className="btn border mb-2 w-100"
                style={{ backgroundColor: "black", color: "white" }}
                onClick={() => setAppTheme({ backgroundColor: "black", textColor: "white" })}
              >
                Black on white
              </button>
            </li>
            {/* Reset theme */}
            <li>
              <button
                type="button"
                className="btn border w-100"
                style={{ backgroundColor: "white", color: "black" }}
                onClick={() => setAppTheme({ backgroundColor: "white", textColor: "black" })}
              >
                Reset
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
