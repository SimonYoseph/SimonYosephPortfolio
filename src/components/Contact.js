import React from 'react';

import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      
      <h1 className="contact-header">Contact Me</h1>

      {/* Social Media Links */}
      <div className="social">
        {/* <a href="https://facebook.com/ondrej.p.barta" className="link facebook" target="_parent">
          <span className="fa fa-facebook-square"></span>
        </a>
        <a href="https://twitter.com/PageOnlineXS" className="link twitter" target="_parent">
          <span className="fa fa-twitter"></span>
        </a> */}
        <h3>Email Me</h3>
        <a href="mailto:simon97862012@gmail.com" className="link gmail" target="_parent"></a>
      </div>
      
    </section>
    
  );
};

export default Contact;
