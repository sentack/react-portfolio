import React from "react";

function Skill({ name, image, type }) {
    return (
      <div className={`skill-card ${type}`}>
        <img src={image} title={name} alt={name} />
      </div>    
    );
}

export default Skill;
