import React from 'react';
import './App.css';
import Skills from './components/Skills'; // ✅ use the canvas Skills.js

const projects = [
  {
    name: 'Port Scanner',
    description: 'A Node.js tool to scan open ports on a target system.',
    icon: '🛡️',
    link: 'https://github.com/mrhasan2025/port-scanner'
  },
  {
    name: 'Bug Bounty Reports',
    description: 'Writeups from successful findings via Bugcrowd and HackerOne.',
    icon: '🐞',
    link: 'https://github.com/mrhasan2025/bug-bounty-reports'
  },
  {
    name: 'Web Pentesting Projects',
    description: 'Case studies of web apps tested for security holes.',
    icon: '🌐',
    link: 'https://github.com/mrhasan2025/web-pentest-projects'
  }
];

function App() {
  return (
    <div className="App">
      <header className="section">
        <img src="/profile.jpg" alt="Profile" className="profile-pic" />
        <h1>Mahamudul Hasan</h1>
        <h3 className="typewriter">Cyber Security | Ethical Hacking | Web Pentester</h3>
      </header>

      <section className="section">
        <h2>About Me</h2>
        <p>I’m Mahamudul Hasan — a Cyber Security Analyst, Web Pentester and Full Stack Developer. I specialize in finding vulnerabilities, securing applications, and building web systems with security-first principles.</p>
        <p>I’ve completed labs and real-world projects on TryHackMe and Bugcrowd, and I enjoy working on offensive security, reporting CVEs, and educating developers on secure coding.</p>
      </section>

      <Skills /> {/* ✅ now pulls circular progress UI */}

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

      <section className="section">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:mrhasanuae2021@gmail.com">mrhasanuae2021@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/mrhasan2025" target="_blank" rel="noreferrer">@mrhasan2025</a></p>
      </section>
      <footer className="copyright-notice">
  © {new Date().getFullYear()} Mahamudul Hasan. All rights reserved.
</footer>
    </div>
  );
}

export default App;
