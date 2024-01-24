import React, { useEffect, useState } from 'react';
import { faPaperPlane, faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Contact.css';

const Contact = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', name);
    // Add your logic for handling the form submission here
    // Reset the input values after submission
    setName('');
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  };

  useEffect(() => {
    const form = document.querySelector('#contact-form');
    form.addEventListener('submit', handleSubmit);

    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, []);

  return (
    <section id="contact">
      <h1 className="section-header">Contact</h1>
      <div className="contact-wrapper">
        <form id="contact-form" className="form-horizontal" role="form">
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="NAME"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="EMAIL"
                name="email"
                required
              />
            </div>
          </div>

          <textarea
            className="form-control"
            rows="10"
            placeholder="MESSAGE"
            name="message"
            required
          ></textarea>

          <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
            <div className="alt-send-button">
              <FontAwesomeIcon icon={faPaperPlane} />
              <span className="send-text">SEND</span>
            </div>
          </button>
        </form>

        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <FontAwesomeIcon icon={faMapMarker} />
              <span className="contact-text place">Maryland</span>
            </li>

            <li className="list-item">
              <FontAwesomeIcon icon={faPhone} />
              <span className="contact-text phone">
                <a href="tel:1-212-555-5555" title="Give me a call">(301) 213-9202</a>
              </span>
            </li>

            <li className="list-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="contact-text gmail">
                <a href="mailto:simon97862012@gmail.com" title="Send me an email">simon97862012@gmail.com</a>
              </span>
            </li>
          </ul>

         
        </div>
      </div>
    </section>
  );
};

export default Contact;
