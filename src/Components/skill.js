import React from "react";
import "animate.css";

function Skill({ name, image, type }) {
  return (
    <div className={`skill-card animate__animated animate__zoomIn ${type}`}>
      <img src={image} title={name} alt={name} />
    </div>
  );
}

export default Skill;
