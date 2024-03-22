import React, { useState } from "react";
import { techStackDetails } from "../Details";
import Skill from "../Components/skill";


function Skills() {
  const [selectedButton, setSelectedButton] = useState("frontend");

  const handleButtonClick = (event) => {
    const buttonId = event.target.id;
    setSelectedButton(buttonId);
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.classList.remove('active'));

    // Add active class to selected button
    event.target.classList.add('active');
  };

  return (
    <main className="container mx-auto max-width pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Skills I've been working with recently
        </p>
        <div className="text-content mx-auto items-center gap-10 skill-buttons">
        <button className="active" id="frontend" onClick={handleButtonClick}>Frontend</button>
        <button id="backend" onClick={handleButtonClick}>Backend</button>
        <button id="others" onClick={handleButtonClick}>Others</button>
        <button id="tools" onClick={handleButtonClick}>Tools</button>
        </div>
      </section>
      <section className="grid grid-cols-2 grid-cols-3 md:grid-cols-4 xl:grid-cols-6 items-center gap-10 pt-6">
        {React.Children.toArray(
          techStackDetails
            .filter(({ type }) => selectedButton === type || selectedButton === "")
            .map(({ name, image, type }) => (
              <Skill name={name} image={image} type={type} />
            ))
        )}
      </section>      
    </main>
  );
}

export default Skills;
