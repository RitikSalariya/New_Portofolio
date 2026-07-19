import React, { useState } from 'react';
import './Projects.css';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projectsData = [
    {
      id: 1,
      title: 'PropAstra Real Estate Platform',
      category: 'react',
      tech: ['React.js', 'PostgreSQL', 'REST APIs', 'Web Design'],
      description: 'Customer-facing web application module built for PropAstra Venture Realty. Engineered reusable components and integrated backend APIs to support smooth property search, listings, and client transactions.',
      features: [
        'Developed customer-facing modules with modular React structures.',
        'Integrated REST APIs for database communications and query optimizations.',
        'Currently active in production on the official corporate site.'
      ],
      demoLink: 'https://propastra.com', // fallback/mock
      githubLink: 'https://github.com/ritiksalariya/propastra-platform',
      live: true
    },
    {
      id: 2,
      title: 'FanFest 2026 creator portal',
      category: 'react',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth'],
      description: 'A full-stack creator application management platform that allows creators to apply, reviewers to evaluate submissions, and admins to manage events and track status in real-time.',
      features: [
        'Full MERN Stack implementation with state management and authentication.',
        'Interactive dashboards for creator status tracking and validation forms.',
        'Seamless deployment on Vercel and Render cloud platforms.'
      ],
      demoLink: 'https://fan-fest-2026.vercel.app/',
      githubLink: 'https://github.com/ritiksalariya/fanfest-2026',
      live: true
    },
    {
      id: 3,
      title: 'HR recruitment Portal',
      category: 'react',
      tech: ['React.js', 'Express.js', 'PostgreSQL', 'CRUD REST APIs'],
      description: 'An enterprise recruitment portal developed to handle candidate job profiles, interview scheduling, and application statuses. Built with a responsive React dashboard and PostgreSQL relational design.',
      features: [
        'Full CRUD operations for managing candidates, jobs, and recruiter actions.',
        'Optimized Express.js server middlewares for backend operations.',
        'Designed database schemas with foreign-key relationships in Postgres.'
      ],
      demoLink: '',
      githubLink: 'https://github.com/ritiksalariya/hr-portal',
      live: false
    },
    {
      id: 4,
      title: 'House Price Prediction Model',
      category: 'python',
      tech: ['Flask', 'Machine Learning', 'HTML/CSS', 'JavaScript', 'Render'],
      description: 'A machine learning full-stack web application. Deployed a trained regression model estimating housing values based on input parameters (location, square feet, rooms) with real-time browser inference.',
      features: [
        'Trained and exported high-performance ML price estimation models.',
        'Created a Python Flask REST endpoint for quick prediction calculations.',
        'Interactive and responsive web UI for parameters input and result visualization.'
      ],
      demoLink: 'https://housepriceprediction-ge7w.onrender.com/',
      githubLink: 'https://github.com/ritiksalariya/house-price-prediction',
      live: true
    },
    {
      id: 5,
      title: 'Hospital Management System',
      category: 'python',
      tech: ['Django', 'MySQL', 'Bootstrap', 'User Authentication'],
      description: 'A medical portal enabling patients to schedule visits, doctors to manage appointments, and admins to review healthcare database updates. Backed by Django templates and relational MySQL.',
      features: [
        'Secure multi-role authentication (Patients, Doctors, Administrators).',
        'Dynamic calendar appointment scheduler with validation checks.',
        'Responsive administrative dashboard layout.'
      ],
      demoLink: '',
      githubLink: 'https://github.com/ritiksalariya/hospital-management',
      live: false
    }
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>
        
        <div className="projects-filter">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
            onClick={() => setFilter('all')}
          >
            All Work
          </button>
          <button 
            className={`filter-btn ${filter === 'react' ? 'active' : ''}`} 
            onClick={() => setFilter('react')}
          >
            React / MERN
          </button>
          <button 
            className={`filter-btn ${filter === 'python' ? 'active' : ''}`} 
            onClick={() => setFilter('python')}
          >
            Python / ML / Django
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-card project-card animate-fade">
              <div className="project-header">
                <div className="project-folder">
                  <i className="fa-regular fa-folder-open"></i>
                </div>
                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" title="View Source Code">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  {project.demoLink && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" title="View Live Demo">
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              
              <ul className="project-features">
                {project.features.map((feat, index) => (
                  <li key={index}>
                    <i className="fa-solid fa-caret-right"></i> {feat}
                  </li>
                ))}
              </ul>

              <div className="project-tech-list">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="project-tech-badge">{t}</span>
                ))}
              </div>

              {project.demoLink && (
                <div className="project-action-footer">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    Live Demo <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
