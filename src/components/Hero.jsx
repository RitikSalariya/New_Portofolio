import React, { useState, useEffect } from 'react';
import './Hero.css';

export default function Hero() {
  const roles = ['Full Stack Web Developer', 'React & Node.js Developer', 'Problem Solver'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText === fullText) {
          // Pause at the end of the word
          setTypingSpeed(2000);
          setIsDeleting(true);
        } else {
          setTypingSpeed(100);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(500);
        } else {
          setTypingSpeed(50);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section id="hero" className="hero-section">
      <div className="glow-blob glow-blob-1"></div>
      <div className="glow-blob glow-blob-2"></div>

      <div className="container hero-container animate-fade">
        <div className="hero-content">
          <p className="hero-intro">Hi, my name is</p>
          <h1 className="hero-name">RITIK<span>.</span></h1>
          <h2 className="hero-role-wrapper">
            I am a&nbsp;<span className="hero-role">{displayedText}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-description">
            A passionate Full Stack Web Developer with hands-on experience designing and building responsive,
            production-grade web applications. I specialize in React.js, Node.js, Express.js, MongoDB,
            and PostgreSQL. I love building clean, user-centric interfaces and highly optimized backend services.
          </p>

          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">
              <i className="fa-solid fa-code"></i> View Projects
            </a>
            <a href="/Ritik_Resume_.pdf" download="Ritik_Resume.pdf" className="btn btn-secondary">
              <i className="fa-solid fa-file-arrow-down"></i> Download Resume
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/ritiksalariya" target="_blank" rel="noopener noreferrer" title="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/ritik-salariya-201155256/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#contact" title="Email ritiksalariya@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a href="tel:+919530743176" title="Call +91 9530743176">
              <i className="fa-solid fa-phone"></i>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-terminal-card glass-card">
            <div className="terminal-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="title">developer.js</span>
            </div>
            <div className="terminal-body">
              <pre>
                <code>
                  <span className="keyword">const</span> developer = &#123;
                  name: <span className="string">'Ritik'</span>,
                  title: <span className="string">'Full Stack Developer'</span>,
                  skills: [
                  <span className="string">'React'</span>, <span className="string">'Node.js'</span>,
                  <span className="string">'PostgreSQL'</span>, <span className="string">'MongoDB'</span>
                  ],
                  passion: <span className="string">'Building scalable apps'</span>,
                  location: <span className="string">'Bangalore, India'</span>
                  &#125;;

                  <span className="comment">// Ready to collaborate!</span>
                  console.log(developer.passion);
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
