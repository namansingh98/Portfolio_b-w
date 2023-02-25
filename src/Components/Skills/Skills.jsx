import React from "react";
import Frontend from "../Skills/Frontend";
import "../Skills/Skills.css";
import Other from "./Other.jsx";
const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skills__container container grid">
        <Frontend />
        <Other />
      </div>
    </section>
  );
};

export default Skills;
