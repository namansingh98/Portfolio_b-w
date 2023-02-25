import React from "react";
import "./Scroll.css";
function Scroll() {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scroll-up");
    // when the scroll is higher then 560 viewport height , add
    // the show scroll class to a tag with the scroll top class 
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });
  return (
    <a href="#" className="scroll-up">
      <i className="uil uil-arrow-up scroll-up__icon"></i>
    </a>
  );
}

export default Scroll;
