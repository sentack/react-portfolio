import React, { useState } from "react";
import { techStackDetails } from "../Details";
import Skill from "../Components/skill";

function Skills() {
  const [selectedCategory, setselectedCategory] = useState("webdev");
  
  const handleButtonClick = (event) => {
    const buttonId = event.target.id;
    setselectedCategory(buttonId);

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.classList.remove('active'));

    // Add active class to selected button
    event.target.classList.add('active');
  };

  return (
    <main className="container mx-auto max-width pb-20 ">
      <section>
        <div className="text-content mx-auto items-center skill-buttons">
          <button className="active" id="webdev" onClick={handleButtonClick}>Web </button>
          <button id="mobile" onClick={handleButtonClick}>Mobile</button>
          <button id="databases" onClick={handleButtonClick}>Databases</button>
          <button id="tools" onClick={handleButtonClick}>Tools</button>
        </div>
      </section>
      <section className="grid grid-cols-2 grid-cols-3 md:grid-cols-4 xl:grid-cols-6 items-center gap-10 pt-6">
      {React.Children.toArray(
        techStackDetails
          .filter(({ type }) => selectedCategory === type || selectedCategory === "")
          .map(({ name, image, type }) => (
            <Skill
                  name={name}
                  image={image}
                  type={type}
                />
          ))
      )}
      </section>      
    </main>
  );
}

export default Skills;
