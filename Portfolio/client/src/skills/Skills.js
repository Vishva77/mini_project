import React from "react";
import "./Skills.css";

export function Skills() {
  return (
    <div id="skills">
      <h1>SKILLS</h1>
      <ul className="skills-list">
        <h2>Frontend :</h2>
        <li>Html</li>
        <li>Css</li>
        <li>Javascript</li>
        <li>React.js</li>
      </ul>
      <ul className="skills-list">
        <h2>Backend :</h2>
        <li>React.js</li>
        <li>Node.js</li>
        <li>MongoDB</li>
      </ul>
      <ul className="skills-list">
        <h2>Additional Skills :</h2>
        <li>Git & GitHub</li>
        <li>Problem Solving</li>
        <li>Python</li>
      </ul>
    </div>
  );
}
