import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '25cf6b1f-abb0-4800-9a2d-7bff9e52432d',
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New Contact Form Submission',
          message: formData.message
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        console.error('Submission failed:', result);
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="glow-blob glow-blob-2"></div>
      
      <div className="container">
        <h2 className="section-title">
          Get In <span>Touch</span>
        </h2>
        <p className="contact-subtitle">
          Have an interesting project or a job opportunity? I'd love to hear from you.
        </p>

        <div className="contact-container">
          <div className="contact-info glass-card animate-fade">
            <h3>Let's Connect</h3>
            <p className="info-desc">
              I am open to full-time opportunities, internship contracts, and freelance projects. 
              Let's create something remarkable together.
            </p>

            <div className="info-items">
              <a href="mailto:ritiksalariya@gmail.com" className="info-item">
                <div className="info-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="info-text">
                  <span className="label">Email Me</span>
                  <span className="value">ritiksalariya@gmail.com</span>
                </div>
              </a>

              <a href="tel:+919530743176" className="info-item">
                <div className="info-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="info-text">
                  <span className="label">Call Me</span>
                  <span className="value">+91 9530743176</span>
                </div>
              </a>

              <div className="info-item">
                <div className="info-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="info-text">
                  <span className="label">Location</span>
                  <span className="value">Bangalore, Karnataka, India</span>
                </div>
              </div>
            </div>

            <div className="social-links-footer">
              <a href="https://github.com/ritiksalariya" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/ritiksalariya" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper glass-card animate-fade">
            <h3>Send Message</h3>
            
            {status === 'success' ? (
              <div className="success-message">
                <div className="success-icon">
                  <i className="fa-solid fa-circle-check"></i>
                </div>
                <h4>Message Sent!</h4>
                <p>
                  Thank you! Your message has been sent successfully. I will review it and get back to you shortly.
                </p>
                <button onClick={() => setStatus('idle')} className="btn btn-primary btn-sm">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="form-input"
                    id="contact-name"
                  />
                  <label htmlFor="contact-name" className="form-label">Your Name</label>
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="form-input"
                    id="contact-email"
                  />
                  <label htmlFor="contact-email" className="form-label">Your Email</label>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder=" "
                    className="form-input"
                    id="contact-subject"
                  />
                  <label htmlFor="contact-subject" className="form-label">Subject</label>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    rows="5"
                    className="form-input form-textarea"
                    id="contact-message"
                  ></textarea>
                  <label htmlFor="contact-message" className="form-label">Message</label>
                </div>

                {status === 'error' && (
                  <p className="error-text">Please fill out all required fields.</p>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'sending'} 
                  className="btn btn-primary submit-btn"
                >
                  {status === 'sending' ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin"></i> Preparing...
                    </>
                  ) : (
                    <>
                      Send Message <i className="fa-solid fa-paper-plane"></i>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
