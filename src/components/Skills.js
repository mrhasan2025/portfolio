import React, { useState } from 'react';
import '../App.css';

const skills = [
  { name: 'Kali Linux', icon: '🐧', desc: 'A Debian-based OS for penetration testing and digital forensics.' },
  { name: 'Burp Suite', icon: '🧪', desc: 'Tool for testing web application security through HTTP request manipulation.' },
  { name: 'Nmap', icon: '🛰️', desc: 'A network scanning tool to discover hosts and services.' },
  { name: 'React', icon: '⚛️', desc: 'JavaScript library for building interactive UIs.' },
  { name: 'Node.js', icon: '🟢', desc: 'Backend runtime for JavaScript, enabling server-side development.' },
  { name: 'MongoDB', icon: '🍃', desc: 'NoSQL database optimized for scalability and flexibility.' },
  { name: 'Linux', icon: '💻', desc: 'Open-source OS widely used in servers, security, and development.' },
  { name: 'Git & GitHub', icon: '🐙', desc: 'Version control and code collaboration platform.' },
  { name: 'TryHackMe', icon: '🎯', desc: 'Hands-on cyber security training platform with real labs.' },
  { name: 'Bugcrowd', icon: '🐞', desc: 'Bug bounty platform for responsible vulnerability disclosure.' },
  { name: 'OWASP ZAP', icon: '🔍', desc: 'Security scanner for web applications with passive/active scanning.' },
  { name: 'Metasploit', icon: '💣', desc: 'Framework for developing, testing, and executing exploits.' },
];

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section className="section">
      <h2>Skills & Tools</h2>
      <div className="skill-list">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="skill-item"
            onClick={() => setActiveSkill(activeSkill === idx ? null : idx)}
          >
            <strong>{skill.icon} {skill.name}</strong>
            {activeSkill === idx && (
              <div className="tool-detail active">
                <p><strong>{skill.icon} {skill.name}</strong></p>
                <p>{skill.desc}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
