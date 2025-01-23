import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../CSS/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          console.log('Email sent successfully!', response.status, response.text);
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' }); // Reset form
        },
        (err) => {
          console.error('Failed to send email:', err);
          setStatus('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-description">
          Have a question or want to work together? Feel free to reach out!
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-input"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-input"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-input"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="form-button">
            Send Message
          </button>
        </form>
        {status && <p className="form-status">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
