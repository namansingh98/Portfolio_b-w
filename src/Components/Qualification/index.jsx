import React, { useState } from "react";
import "./Qualification.css";
function Qualification() {
  const [toggle, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="Qualification">
      <h2 className="section__title">Qualification </h2>
      <span className="section__subtitle">My Personal Journey</span>
      <div className="qualification-container container">
        <div className="qualification__tabs">
          <div
            className={
              toggle === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggle === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-bx-calendar qualification__icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggle === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">High School</h3>
                <span className="qualification__subtitle">
                  K.C.G.S.V.M - Mathura
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-bx-calendar-alt">March 2016</i>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Intermediate</h3>
                <span className="qualification__subtitle">Kamla Lal Inter College </span>
                <div className="qualification__calendar">
                  <i className="uil uil-bx-calendar-alt">April 2018 </i>
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.sc (Computer Science)</h3>
                <span className="qualification__subtitle">
                shri babulal mahavidyalaya goverdhan - Mathura
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-bx-calendar-alt">March 2022-Present</i>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
          <div
            className={
              toggle === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Designer</h3>
                <span className="qualification__subtitle">
                  Delhi - Institute
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-bx-calendar-alt">March 2019-19</i>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">Delhi - IRSDC</span>
                <div className="qualification__calendar">
                  <i className="uil uil-bx-calendar-alt">April 2020-21 </i>
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">WordPress Developer</h3>
                <span className="qualification__subtitle">
                  Bytes Logic It Solution - Noida
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-bx-calendar-alt">June 2022 - 25 August</i>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
