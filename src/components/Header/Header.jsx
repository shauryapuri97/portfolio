import React, { useState } from "react";
import "./header.css";
import CV from '../../assets/ShauryaPuriCV.pdf'

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
                href={CV}
                className="button--header"
                download
                target="_blank"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
        <div className="nav__toggle" onClick={() => downloadCV()}>
          <a href={CV} className="button--header" download target="_blank">
            Download CV
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
