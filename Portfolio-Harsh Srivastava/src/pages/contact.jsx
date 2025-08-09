import React from 'react';
import '../CSS/contact.css';

const Contact = () => {
  // Paste your unique Formspree URL here
  const FORM_ENDPOINT = "https://formspree.io/f/mpwljykn"; 

  return (
    <div className="contact-page">
      <h1>Get in Touch</h1>
      <p>Have a question or want to work together? Feel free to reach out!</p>
      
      <form
        action={FORM_ENDPOINT}
        method="POST"
        className="contact-form"
      >
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;