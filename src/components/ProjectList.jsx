import React, { useState } from "react";

const ProjectList = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Thesis",
      description:
        "My final thesis for my education to become a .NET developer.",
      link: "https://github.com/jespermisiorny/Examensarbete",
    },
    {
      id: 2,
      title: "BudgetApp",
      description: "A budget planner tool developed with CI/CD and TDD.",
      link: "https://github.com/Tres-Delinquentes/BudgetApp",
    },
    {
      id: 3,
      title: "Zombiefrogger",
      description:
        "A game made in javascript, it's a take on the classic game 'Frogger'.",
      link: "https://github.com/jespermisiorny/ZombieFrogger",
    },
    {
      id: 4,
      title: "GearInsight",
      description: "World of Warcraft Armory, but made with MAUI.",
      link: "https://github.com/andreastollmar/GearInsight2.0",
    },
    {
      id: 5,
      title: "Digital Afterlife",
      description: "What happens when a loved one passes away?",
      link: "https://github.com/andreastollmar/DigitalAfterlife2.0",
    },
  ];

  return (
    <div className="projects-list">
      {projects.map((project) => (
        <a
          key={project.id}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`project-item ${hoveredProject === project.id ? "hovered" : ""}`}
          onMouseEnter={() => setHoveredProject(project.id)}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <div className="project-item-content">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ProjectList;
