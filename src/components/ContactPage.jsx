import React, { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

// Thank You Popup Component
const ThankYouPopup = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content animate-scale">
        <div className="popup-icon">✓</div>
        <h2>Thank You!</h2>
        <p>Thank you for contacting me. I'll get back to you soon!</p>
        <button className="btn btn-primary" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

// Contact Page Component
const ContactPage = () => {
  const [contactRef, contactVisible] = useScrollAnimation(0.2);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setShowPopup(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="page">
      <section 
        ref={contactRef}
        className={`contact-section ${contactVisible ? 'animate-fade-in' : ''}`}
      >
        <div className="container">
          <h1 className="page-title">Get In Touch</h1>
          <div className="contact-content">
            <div className="contact-info animate-slide-up">
              <h3>Let's Connect</h3>
              <p>I'm always open to discussing new opportunities and interesting projects.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <strong>Email:</strong> example@gmail.com
                </div>
                <div className="contact-item">
                  <strong>Phone:</strong> +91 xxx-xxxx-xxx
                </div>
                <div className="contact-item">
                  <strong>Location:</strong> dubai
                </div>
              </div>
            </div>
            <form className="contact-form animate-slide-up-delay-1" onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                className="form-input"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                className="form-input"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <textarea 
                name="message"
                placeholder="Your Message" 
                rows="5" 
                className="form-input"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>
      <ThankYouPopup isVisible={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
};

export default ContactPage; 