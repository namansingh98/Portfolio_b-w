import React, { useEffect } from "react";
import { projectData } from "./Data";
import { projectsNav } from "./Data";
import WorkItems from "./WorkItems";
import "./Work.css";
import { useState } from "react";
function Works() {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectData);
    } else {
      const newProject = projectData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProject);
    }
  }, [item]);
  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index)
  };
  return (
    <div>
      {" "}
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              className={`${active === index ? "active__work" : ""}work__item`}
              key={index}
              onClick={(e) => handleClick(e, index)}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default Works;
