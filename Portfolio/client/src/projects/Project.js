import React from "react";
import "./Project.css";

const projectDetails = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of Project 1",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description of Project 2",
  },
  // Add more projects here as needed
];

export function Project() {
  return (
    <div id="projects">
      <h1>VISHVA K</h1>
      <div className="project-list">
        {projectDetails.map((project) => (
          <div key={project.id} className="project">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
