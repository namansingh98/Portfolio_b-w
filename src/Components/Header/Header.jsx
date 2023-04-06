import React, { useState } from "react";
import "./Header.css";
function Header() {
  const [toggle, showMenu] = useState(false);

  return (
    <div className="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          Naman{" "}
        </a>
        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="uil uil-estate active-link"></i>Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user"></i>About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt"></i>Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#Qualification" className="nav__link">
                <i className="uil uil-scenery"></i>Qualification
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-estate"></i>Contact
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
          <i className="uil uil-bars"></i>
        </div>
      </nav>
    </div>
  );
}

export default Header;
