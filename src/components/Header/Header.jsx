import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const downloadCV = () => {
    console.log("DOWNLOAD CV");
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Shaurya Puri
        </a>
        <div className={`nav__menu`}>
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="./assets/profile.jpg"
                className="button--header"
                download
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
        <div className="nav__toggle" onClick={() => downloadCV()}>
          <a href="./assets/profile.jpg" className="button--header" download>
            Download CV
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
