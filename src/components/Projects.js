import React from 'react';
import '../App.css';

const projects = [
  {
    name: 'Port Scanner',
    description: 'A Node.js tool to scan open ports on a target system.',
    icon: '🛡️',
    link: 'https://github.com/mrhasan2025/port-scanner'
  },
  {
    name: 'Vuln Dashboard',
    description: 'A dashboard to track and report vulnerabilities (React + MongoDB).',
    icon: '📊',
    link: 'https://github.com/mrhasan2025/vuln-dashboard'
  },
  {
    name: 'Portfolio Website',
    description: 'This portfolio built with React and deployed on Vercel.',
    icon: '🌐',
    link: 'https://github.com/mrhasan2025/portfolio'
  }
];

const Projects = () => {
  return (
    <section className="section">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, idx) => (
          <a key={idx} href={project.link} className="project-card" target="_blank" rel="noopener noreferrer">
            <div className="project-icon">{project.icon}</div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
