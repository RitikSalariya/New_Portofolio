import React from 'react';
import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: 'fa-solid fa-code',
      color: 'var(--primary-color)',
      skills: ['JavaScript', 'Python', 'HTML5', 'CSS3', 'Dart']
    },
    {
      title: 'Frontend Development',
      icon: 'fa-solid fa-desktop',
      color: 'var(--secondary-color)',
      skills: ['React.js', 'React Router', 'Bootstrap', 'Responsive Web Design', 'Fetch API', 'DOM Manipulation']
    },
    {
      title: 'Backend & Databases',
      icon: 'fa-solid fa-server',
      color: 'var(--success-color)',
      skills: ['Node.js', 'Express.js', 'Django', 'REST API Design', 'CRUD Operations', 'MongoDB', 'PostgreSQL', 'MySQL', 'SQLite']
    },
    {
      title: 'Tools & DevOps',
      icon: 'fa-solid fa-screwdriver-wrench',
      color: '#f59e0b', // Amber
      skills: ['Git & GitHub', 'Docker', 'Postman', 'Vercel', 'Render', 'VS Code', 'API Integration', 'Authentication (JWT)', 'Agile & Debugging']
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="glow-blob glow-blob-3"></div>
      
      <div className="container">
        <h2 className="section-title">
          Technical <span>Skills</span>
        </h2>
        <p className="skills-subtitle">
          A collection of languages, frameworks, and tools that I use to bring ideas to life.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="glass-card skill-card animate-fade" style={{ '--accent-color': category.color }}>
              <div className="skill-card-header">
                <div className="icon-wrapper" style={{ backgroundColor: `rgba(${category.color === 'var(--primary-color)' ? '139, 92, 246' : category.color === 'var(--secondary-color)' ? '6, 182, 212' : category.color === 'var(--success-color)' ? '16, 185, 129' : '245, 158, 11'}, 0.1)`, color: category.color }}>
                  <i className={category.icon}></i>
                </div>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
