import React from "react";


function Skill({ name, image, type }) {
  
  return (
    <div className="skill dark:text-gray-400">
      <div className={`skill-card ${type}`}>
        <img className="" src={image} title={name} alt={name} />      
      </div>
      <h6 className="skill-name text-content flex justify-center items-center italic font-semibold transition duration-300 ease-in-out">
        {name}
      </h6>
    </div>
  );
}

export default Skill;
