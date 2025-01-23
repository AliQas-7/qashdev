// Projects.js
import React from 'react';
import '../CSS/Projects.css';

const projects = [
  {
    name: "Emergency Alert System Backend",
    description: "The backend infrastructure for an emergency alert system.",
    technologies: ["Node.js", "Express", "MongoDB"],
    link: "https://github.com/AliQas-7/Emergency_Alert_System_Backend",
  },
  {
    name: "Fun Text",
    description: "A web application that offers entertaining text transformations and effects.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/AliQas-7/Fun-Text",
  },
  {
    name: "NewsApp",
    description: "A mobile application delivering the latest news articles across various categories.",
    technologies: ["React Native", "Expo", "NewsAPI"],
    link: "https://github.com/AliQas-7/NewsApp",
  },
  {
    name: "CNN Layout",
    description: "A responsive web layout mimicking the CNN website for educational purposes.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    link: "https://github.com/AliQas-7/CNN-Layout",
  },
  {
    name: "QashinCode",
    description: "A platform for developers to share and collaborate on code snippets.",
    technologies: ["Node.js", "Express", "MongoDB"],
    link: "https://github.com/AliQas-7/QashinCode",
  },
  {
    name: "ACP Form",
    description: "A web-based form application for data collection and management.",
    technologies: ["React", "Redux", "Firebase"],
    link: "https://github.com/AliQas-7/acpForm-finalversion",
  },
  {
    name: "React Portfolio",
    description: "A personal portfolio website built with React to showcase projects and skills.",
    technologies: ["React", "CSS", "Netlify"],
    link: "https://github.com/AliQas-7/React-Portfolio",
  },
];


const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <li key={techIndex} className="project-tech-item">{tech}</li>
                ))}
              </ul>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;