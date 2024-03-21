import React from "react";
import { techStackDetails } from "../Details";

function Skills() {
  const {
    html,
    css,
    js,
    react,
    tailwind,
    bootstrap,
    sass,
    vscode,
    git,
    github,
    npm,
    figma,
    java,
    py,
    php,
    cplus,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-2 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Skills I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-2 grid-cols-3 md:grid-cols-4 xl:grid-cols-6 items-center gap-10 pt-6">
        <div className="skill-card">
          <img src={html} title="HTML" alt="" />
        </div>
        <div className="skill-card">
          <img src={css} title="CSS" alt="" />
        </div>
        <div className="skill-card">
          <img src={sass} title="SASS" alt="" />
        </div>
        <div className="skill-card">
          <img src={tailwind} title="Tailwind CSS" alt="" />
        </div>
        <div className="skill-card">
          <img src={bootstrap} title="Bootstrap" alt="" />
        </div>
        <div className="skill-card">
          <img src={js} title="JavaScript" alt="" />
        </div>
        <div className="skill-card">
          <img src={react} title="React" alt="" />
        </div>
        <div className="skill-card">
          <img src={cplus} title="C++" alt="" />
        </div>
        <div className="skill-card">
          <img src={php} title="PHP" alt="" />
        </div>
        <div className="skill-card">
          <img src={java} title="Java" alt="" />
        </div>
        <div className="skill-card">
          <img src={py} title="Python" alt="" />
        </div>
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 items-center gap-10 pt-6">
        <div class="skill-card">
          <img src={vscode} title="Visual Studio Code" alt="" />
        </div>

        <div class="skill-card">
          <img src={git} title="Git" alt="Git" />
        </div>

        <div class="skill-card">
          <img src={github} title="Github" alt="Github" />
        </div>

        <div class="skill-card">
          <img src={figma} title="Figma" alt="Figma" />
        </div>

        <div class="skill-card">
          <img src={npm} title="NPM" alt="NPM" />
        </div>
      </section>
    </main>
  );
}

export default Skills;
