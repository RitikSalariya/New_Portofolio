import React, { useState } from 'react';
import './Experience.css';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('work');

  const workData = [
    {
      role: 'Full Stack Developer Intern',
      company: 'PropAstra Venture Realty LLP',
      location: 'Bangalore, India',
      duration: 'Mar 2026 – Present',
      details: [
        'Developed responsive web application modules using React.js, translating Figma design requirements into highly reusable frontend components.',
        'Integrated React frontends with backend REST APIs and database services built on Node.js, Express.js, and PostgreSQL.',
        'Built cross-platform features using Dart & Flutter mobile application workflows, extending backend core APIs to a mobile client.',
        'Participated in daily debugging, unit testing, and ongoing feature enhancement integrations using Git-based team collaboration.'
      ]
    },
    {
      role: 'Public Policy Intern',
      company: 'Deputy Commissioner Office',
      location: 'Jalandhar, Punjab',
      duration: 'Dec 2024 – Feb 2025',
      details: [
        'Digitized complex administrative paperwork workflows to streamline local government services.',
        'Assisted in implementing and improving local citizen verification procedures.'
      ]
    },
    {
      role: 'Python Intern',
      company: 'GTB Institute',
      location: 'Jalandhar, Punjab',
      duration: 'Jun 2024 – Jul 2024',
      details: [
        'Designed and developed backend database modules using Python, Django framework, and MySQL database engines.',
        'Created optimized queries and organized core API routing models to improve response speeds.'
      ]
    }
  ];

  const educationData = [
    {
      degree: 'Bachelor of Technology (CSE)',
      institution: 'Punjab Technical University',
      duration: 'Graduated',
      grade: 'CGPA: 9.0',
      details: [
        'Specialization in Computer Science and Engineering.',
        'Acquired comprehensive foundations in Data Structures, Algorithms, DBMS, Operating Systems, and Software Engineering.',
        'Participated in coding bootcamps and local projects.'
      ]
    },
    {
      degree: '12th Grade (Senior Secondary)',
      institution: 'DSSD Senior Secondary School',
      duration: 'Completed',
      grade: 'Percentage: 93.2%',
      details: [
        'Focused on Mathematics, Physics, Chemistry, and Computer Science.',
        'Active participant in extracurricular science exhibitions.'
      ]
    },
    {
      degree: '10th Grade (Secondary School)',
      institution: 'Arya Senior Secondary School',
      duration: 'Completed',
      grade: 'Percentage: 95%',
      details: [
        'Outstanding academic performance with primary focus on science and logic reasoning.',
        'Elected as Class Representative.'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">
          My <span>Journey</span>
        </h2>

        <div className="experience-tabs">
          <button 
            className={`tab-btn ${activeTab === 'work' ? 'active' : ''}`}
            onClick={() => setActiveTab('work')}
          >
            <i className="fa-solid fa-briefcase"></i> Work Experience
          </button>
          <button 
            className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <i className="fa-solid fa-graduation-cap"></i> Education
          </button>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          {activeTab === 'work' ? (
            <div className="timeline-items">
              {workData.map((item, idx) => (
                <div key={idx} className="timeline-item animate-fade">
                  <div className="timeline-dot">
                    <i className="fa-solid fa-briefcase"></i>
                  </div>
                  <div className="timeline-date">{item.duration}</div>
                  <div className="glass-card timeline-card">
                    <h3 className="timeline-title">{item.role}</h3>
                    <h4 className="timeline-subtitle">{item.company} | <span className="loc">{item.location}</span></h4>
                    <ul className="timeline-details">
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="timeline-items">
              {educationData.map((item, idx) => (
                <div key={idx} className="timeline-item animate-fade">
                  <div className="timeline-dot education-dot">
                    <i className="fa-solid fa-graduation-cap"></i>
                  </div>
                  <div className="timeline-date">{item.grade}</div>
                  <div className="glass-card timeline-card">
                    <h3 className="timeline-title">{item.degree}</h3>
                    <h4 className="timeline-subtitle">{item.institution}</h4>
                    <ul className="timeline-details">
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
