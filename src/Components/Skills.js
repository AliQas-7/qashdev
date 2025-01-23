import React, { useEffect, useRef } from 'react';
import '../CSS/Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaAws, FaAndroid } from 'react-icons/fa';
import { DiMongodb, DiPostgresql } from 'react-icons/di';
import { SiRedux, SiGraphql, SiFirebase, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { FaPalette } from 'react-icons/fa';

const skills = [
  { name: "HTML", icon: <FaHtml5 />, level: 95 },
  { name: "CSS", icon: <FaCss3Alt />, level: 95 },
  { name: "JavaScript", icon: <FaJs />, level: 95 },
  { name: "React", icon: <FaReact />, level: 90 },
  { name: "Redux", icon: <SiRedux />, level: 85 },
  { name: "Node.js", icon: <FaNodeJs />, level: 90 },
  { name: "MongoDB", icon: <DiMongodb />, level: 80 },
  { name: "PostgreSQL", icon: <DiPostgresql />, level: 75 },
  { name: "TypeScript", icon: <SiTypescript />, level: 80 },
  { name: "Docker", icon: <FaDocker />, level: 70 },
  { name: "GraphQL", icon: <SiGraphql />, level: 75 },
  { name: "Firebase", icon: <SiFirebase />, level: 85 },
  { name: "AWS", icon: <FaAws />, level: 80 },
  { name: "Android", icon: <FaAndroid />, level: 85 },
  { name: "Material-UI", icon: <FaPalette />, level: 80 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 85 },
  { name: "Git", icon: <FaGitAlt />, level: 90 },
];

const Skills = () => {
  const skillsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 } // Lower threshold for better visibility detection
    );

    skillsRef.current.forEach((skill) => {
      if (skill) {
        observer.observe(skill);
        console.log(`Observing: ${skill.className}`); // Debugging
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-item"
              ref={(el) => (skillsRef.current[index] = el)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <p className="skill-name">{skill.name}</p>
              <div className="skill-bar">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-level">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
