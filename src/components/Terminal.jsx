import React, { useState, useRef, useEffect } from 'react';
import './Terminal.css';

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to Ritik\'s Interactive Shell v1.0.0' },
    { type: 'system', text: 'Type "help" to see available commands or click the buttons below.' }
  ]);
  const logsRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const scrollToBottom = () => {
    if (logsRef.current) {
      logsRef.current.scrollTo({
        top: logsRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  const handleCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    let reply = [];
    switch (trimmed) {
      case 'help':
        reply = [
          { type: 'output', text: 'Available commands:' },
          { type: 'output-indent', text: 'bio        - Brief biography about Ritik' },
          { type: 'output-indent', text: 'skills     - Summary of technical stack' },
          { type: 'output-indent', text: 'projects   - List of major full-stack projects' },
          { type: 'output-indent', text: 'experience - Work history and internships' },
          { type: 'output-indent', text: 'education  - Academic details & grades' },
          { type: 'output-indent', text: 'resume     - Trigger download of resume PDF' },
          { type: 'output-indent', text: 'contact    - Get contact details (Email, Phone)' },
          { type: 'output-indent', text: 'clear      - Clear the terminal screen' }
        ];
        break;
      case 'bio':
        reply = [
          { type: 'output', text: 'Ritik - Full Stack Web Developer based in Bangalore, India.' },
          { type: 'output', text: 'Experienced in designing, building, and deploying responsive, production-grade applications.' },
          { type: 'output', text: 'Passionate about coding clean frontend UIs in React, robust backend servers in Node/Express or Python/Django, and structuring databases with PostgreSQL/MongoDB.' }
        ];
        break;
      case 'skills':
        reply = [
          { type: 'output', text: 'Technical Skills Profile:' },
          { type: 'output-accent', text: '• Languages: JavaScript, Python, HTML5, CSS3, Dart' },
          { type: 'output-accent', text: '• Frontend: React.js, React Router, Bootstrap, Fetch API' },
          { type: 'output-accent', text: '• Backend: Node.js, Express.js, Django, REST API, CRUD' },
          { type: 'output-accent', text: '• Databases: MongoDB, PostgreSQL, MySQL, SQLite' },
          { type: 'output-accent', text: '• Tools/Concepts: Git, GitHub, Docker, Postman, Vercel, Render, JWT Auth' }
        ];
        break;
      case 'projects':
        reply = [
          { type: 'output', text: 'Featured Projects:' },
          { type: 'output-indent', text: '1. PropAstra Real Estate Platform - React, PostgreSQL, REST APIs. Live in production.' },
          { type: 'output-indent', text: '2. FanFest 2026 - MERN Creator Management System. Live Demo: https://fan-fest-2026.vercel.app/' },
          { type: 'output-indent', text: '3. HR Portal - Recruiter platform using React, Express, PostgreSQL with full CRUD.' },
          { type: 'output-indent', text: '4. House Price Prediction - Flask, ML model, JavaScript frontend. Live Demo: https://housepriceprediction-ge7w.onrender.com/' },
          { type: 'output-indent', text: '5. Hospital Management - Django & MySQL appointment system.' }
        ];
        break;
      case 'experience':
        reply = [
          { type: 'output', text: 'Professional Experience Timeline:' },
          { type: 'output-accent', text: '• Full Stack Developer Intern — PropAstra Venture Realty LLP (Mar 2026 - Present)' },
          { type: 'output-indent', text: '  - Developed responsive React web application modules and reusable components.' },
          { type: 'output-indent', text: '  - Integrated REST APIs built on Node.js/Express.js & PostgreSQL.' },
          { type: 'output-indent', text: '  - Extended core backend APIs to a cross-platform Flutter mobile client.' },
          { type: 'output-accent', text: '• Public Policy Intern — Deputy Commissioner Office (Dec 2024 - Feb 2025)' },
          { type: 'output-indent', text: '  - Digitized administrative workflows and improved local verification systems.' },
          { type: 'output-accent', text: '• Python Intern — GTB Institute (Jun 2024 - Jul 2024)' },
          { type: 'output-indent', text: '  - Programmed backend logic using Python/Django and MySQL database queries.' }
        ];
        break;
      case 'education':
        reply = [
          { type: 'output', text: 'Academic Background:' },
          { type: 'output-indent', text: '• B.Tech in Computer Science Engineering - Punjab Technical University' },
          { type: 'output-indent-accent', text: '  Grade: CGPA 9.0' },
          { type: 'output-indent', text: '• 12th Grade - DSSD Senior Secondary School' },
          { type: 'output-indent-accent', text: '  Grade: 93.2%' },
          { type: 'output-indent', text: '• 10th Grade - Arya Senior Secondary School' },
          { type: 'output-indent-accent', text: '  Grade: 95%' }
        ];
        break;
      case 'resume':
        reply = [
          { type: 'output', text: 'Downloading resume PDF...' }
        ];
        // Trigger file download
        const link = document.createElement('a');
        link.href = '/Ritik_Resume_.pdf';
        link.download = 'Ritik_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        break;
      case 'contact':
        reply = [
          { type: 'output', text: 'Contact Information:' },
          { type: 'output-accent', text: '• Email: ritiksalariya@gmail.com' },
          { type: 'output-accent', text: '• Phone: +91 9530743176' },
          { type: 'output-accent', text: '• Location: Bangalore, Karnataka, India' },
          { type: 'output-indent', text: 'Feel free to reach out via call or email for opportunities!' }
        ];
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        reply = [
          { type: 'error', text: `Command not found: "${trimmed}". Type "help" to see available commands.` }
        ];
    }

    setHistory((prev) => [
      ...prev,
      { type: 'input', text: cmdText },
      ...reply
    ]);
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  return (
    <section id="terminal" className="terminal-section">
      <div className="container">
        <h2 className="section-title">
          Interactive <span>Shell</span>
        </h2>
        <p className="terminal-subtitle">
          Recruiter-friendly terminal interface. Run commands to inspect my background.
        </p>

        <div className="terminal-wrapper glass-card">
          <div className="terminal-bar">
            <div className="terminal-buttons">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="terminal-tab">guest@ritik-portfolio:~</div>
          </div>

          <div className="terminal-window">
            <div className="terminal-logs" ref={logsRef}>
              {history.map((log, index) => {
                if (log.type === 'input') {
                  return (
                    <div key={index} className="log-line input-line">
                      <span className="prompt">guest@ritik-shell:~$</span>
                      <span className="text">{log.text}</span>
                    </div>
                  );
                }
                return (
                  <div key={index} className={`log-line ${log.type}-line`}>
                    {log.type === 'error' && <span className="error-indicator">[ERROR] </span>}
                    <span className="text">{log.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="terminal-input-row">
              <span className="prompt">guest@ritik-shell:~$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="type here..."
                autoFocus
                className="terminal-input"
              />
            </div>
          </div>
        </div>

        <div className="terminal-shortcuts">
          <button onClick={() => handleCommand('bio')} className="shortcut-btn">
            <i className="fa-solid fa-user"></i> bio
          </button>
          <button onClick={() => handleCommand('skills')} className="shortcut-btn">
            <i className="fa-solid fa-gears"></i> skills
          </button>
          <button onClick={() => handleCommand('projects')} className="shortcut-btn">
            <i className="fa-solid fa-folder-open"></i> projects
          </button>
          <button onClick={() => handleCommand('experience')} className="shortcut-btn">
            <i className="fa-solid fa-briefcase"></i> experience
          </button>
          <button onClick={() => handleCommand('education')} className="shortcut-btn">
            <i className="fa-solid fa-graduation-cap"></i> education
          </button>
          <button onClick={() => handleCommand('resume')} className="shortcut-btn">
            <i className="fa-solid fa-file-pdf"></i> resume
          </button>
          <button onClick={() => handleCommand('contact')} className="shortcut-btn">
            <i className="fa-solid fa-address-book"></i> contact
          </button>
          <button onClick={() => handleCommand('clear')} className="shortcut-btn clear-btn">
            <i className="fa-solid fa-trash-can"></i> clear
          </button>
        </div>
      </div>
    </section>
  );
}
