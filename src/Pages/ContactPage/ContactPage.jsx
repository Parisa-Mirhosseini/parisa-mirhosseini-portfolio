import React, { useState } from 'react';
import './ContactPage.scss';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (connect to your backend or email service)
    console.log('Form submitted:', formData);
    // Reset form or show success message
  };

  return (
    <div className="ContactPage">
      <div className="ContactPage__hero">
        <div className="ContactPage__content">
          <h1 className="ContactPage__title">Have a project in mind?</h1>
          <p className="ContactPage__description">
            Let's turn your vision into pixels and your pixels into magic.
          </p>
        </div>
      </div>

      <div className="ContactPage__container">
        <div className="ContactPage__grid">
         { /* Contact Form */}
          {/* <div className="ContactPage__form-section">
            <h2 className="ContactPage__form-title">Send me a message</h2> */}
            {/* <form className="ContactPage__form" onSubmit={handleSubmit}> */}
              {/* <div className="ContactPage__form-group">
                <label htmlFor="name" className="ContactPage__label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="ContactPage__input"
                  required
                  placeholder="Your name"
                />
              </div> */}

              {/* <div className="ContactPage__form-group">
                <label htmlFor="email" className="ContactPage__label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="ContactPage__input"
                  required
                  placeholder="Your email"
                />
              </div>

              <div className="ContactPage__form-group">
                <label htmlFor="message" className="ContactPage__label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="ContactPage__textarea"
                  rows="6"
                  required
                  placeholder="Tell me about your project..."
                />
              </div> */}

              {/* <button type="submit" className="ContactPage__submit">
                Send Message
              </button> */}
            {/* </form> */}
          {/* </div> */}

          {/* Contact Info */}
          <div className="ContactPage__info-section">
            <div className="ContactPage__info-card">
              <h3 className="ContactPage__info-title">Get in touch</h3>
              <p className="ContactPage__info-text">
                Feel free to reach out if you're looking for a developer, 
                have a question, or just want to connect.
              </p>

              <div className="ContactPage__contact-methods">
                <a 
                  href="mailto:parisamirhosseini2@gmail.com" 
                  className="ContactPage__contact-link"
                >
                  <span className="ContactPage__contact-icon">✉️</span>
                  <div>
                    <div className="ContactPage__contact-label">Email</div>
                    <div className="ContactPage__contact-value">codebyparisa@gmail.com</div>
                  </div>
                </a>

                <a 
                  href="https://github.com/Parisa-Mirhosseini" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ContactPage__contact-link"
                >
                  <span className="ContactPage__contact-icon">🐙</span>
                  <div>
                    <div className="ContactPage__contact-label">GitHub</div>
                    <div className="ContactPage__contact-value">@Parisa-Mirhosseini</div>
                  </div>
                </a>

                <a 
                  href="https://linkedin.com/in/parisa-miehosseini" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ContactPage__contact-link"
                >
                  <span className="ContactPage__contact-icon">💼</span>
                  <div>
                    <div className="ContactPage__contact-label">LinkedIn</div>
                    <div className="ContactPage__contact-value">parisa-miehosseini</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
      </div>
      </div>
    </div>
  );
}

export default ContactPage;