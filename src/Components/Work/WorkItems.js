import React from "react";

function WorkItems({ item }) {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="img" class="work__img" />
      <h3 className="work__title">{item.name}</h3>
      <a href={item.link} className="work__button">
        Visit
        <i className="bx bx-right-arrow-alt work__button"></i>
      </a>
    </div>
  );
}

export default WorkItems;
