import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Naman</h1>
        <ul className="footer__list">
          <li>
          <a href="#home" className="footer__link">
              Home
            </a>
            <a href="#about" className="footer__link">
              About
            </a>
            <a href="#contact" className="footer__link">
              Contact me
            </a>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a href="" className="footer__social-link" target="-blank">
            <i className="uil uil-instagram"></i>
          </a>
          <a href="" className="footer__social-link" target="-blank">
            <i className="uil uil-dribbble"></i>
          </a>
          <a href="" className="footer__social-link" target="-blank">
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
        <span className="footer__copy">&#169; Naman Rathore</span>
      </div>
    </footer>
  );
}

export default Footer;
