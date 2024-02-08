import React from 'react';
import { faSquareXTwitter, faLinkedin, faGithub,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

       {/* Social Media Icons */}
       <div className="socialMediaIcons">
                <ul className="listSocial">
                  <li>
                    <a href="https://twitter.com/simon_yoseph" target="_blank" >
                      <FontAwesomeIcon icon={faSquareXTwitter} />
                      <span>X</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/simon-yoseph-a98124189/" target="_blank" >
                      <FontAwesomeIcon icon={faLinkedin} />
                      <span>LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:simon97862012@gmail.com" target="_blank" >
                      <FontAwesomeIcon icon={faEnvelope} />
                      <span>Gmail</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/SimonYoseph" target="_blank" >
                      <FontAwesomeIcon icon={faGithub} />               
                      <span>GitHub</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/simon_yoseph/" target="_blank" >
                      <FontAwesomeIcon icon={faInstagram} />                 
                      <span>Insta</span>
                    </a>
                  </li>
                  <li>
                    <a href="Simon Yoseph Resume.pdf" target="_blank" >
                      <FontAwesomeIcon icon={faFilePdf} />                
                      <span>Insta</span>
                    </a>
                  </li>
                </ul>
              </div>
      
    </section>
    
  );
};

export default Contact;
