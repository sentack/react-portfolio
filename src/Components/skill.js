import React, { useEffect } from "react";


function Skill({ name, image, type }) {
  
  return (
    <div className="skill">
      <div  className={`skill-card ${type}`}>
        <img src={image} title={name} alt={name} />      
      </div>
      <h6 className="skill-name">{name}</h6>
    </div>
  );
}

export default Skill;
