import React, { useState } from "react";
import "../Services/Services.css";
function Service() {
  const [toggle, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>
      <div className="services__container container grid">
        <div className="service__content">
          <div>
            <i className="bx bx-layout service__icon"></i>
            <h3 className="service__title">lorem</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="bx bx-right-arrow-alt"></i>
          </span>
          <div
            className={
              toggle === 1 ? "services__modal active-modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="bx bx-x services__modal-close"
              ></i>

              <h3 className="services__modal-title">h</h3>
              <p className="services__modal-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                incidunt sequi deserunt exercitationem dolorem iure, hic iste
                maiores eum ratione earum rerum corrupti! Eius maxime iure
                explicabo magnam unde. Ipsam?
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="service__content">
          <div>
            <i className="bx bx-layout service__icon"></i>
            <h3 className="service__title">lorem</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="bx bx-right-arrow-alt"></i>
          </span>
          <div
            className={
              toggle === 1 ? "services__modal active-modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="bx bx-x services__modal-close"
              ></i>

              <h3
                className="services__modal-title
              "
              >l</h3>
              <p className="services__modal-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                incidunt sequi deserunt exercitationem dolorem iure, hic iste
                maiores eum ratione earum rerum corrupti! Eius maxime iure
                explicabo magnam unde. Ipsam?
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="service__content">
          <div>
            <i className="bx bx-layout service__icon"></i>
            <h3 className="service__title">lorem</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="bx bx-right-arrow-alt"></i>
          </span>
          <div
            className={
              toggle === 1 ? "services__modal active-modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="bx bx-x services__modal-close"
              ></i>

              <h3
                className="services__modal-title
              "
              >o</h3>
              <p className="services__modal-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                incidunt sequi deserunt exercitationem dolorem iure, hic iste
                maiores eum ratione earum rerum corrupti! Eius maxime iure
                explicabo magnam unde. Ipsam?
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
