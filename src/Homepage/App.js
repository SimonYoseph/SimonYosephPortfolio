import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { faSquareXTwitter, faLinkedin, faGithub,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AboutMe from '../components/AboutMe/AboutMe';
import Contact from '../components/Contact/Contact';
import Portfolio from '../components/Portfolio/Portfolio';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../styles/App.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Get all elements with the class 'text'
    const textElements = gsap.utils.toArray('.text');

    // Apply GSAP animation to each text element
    textElements.forEach((text) => {
      gsap.to(text, {
        backgroundSize: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: text,
          start: 'center 80%',
          end: 'center 20%',
          scrub: true,
        },
      });
    });

    // Event listener for sticky header
    const handleScroll = () => {
      setIsSticky(window.scrollY >= 100);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <Router>
      <div>
        <div className={`tab-text-color ${isSticky ? 'sticky' : ''}`}>
          <nav>
            <Link to="/Homepage">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/portfolio">Portfolio</Link>
          </nav>
        </div>
        <div className="container">
          <h1 className="text">I AM <span>SIMON YOSEPH</span></h1>
          <h1 className="text">ONE WHO CREATES<span>TO EXPAND</span></h1>
          <h1 className="text">AND IMPLEMENTS<span>CREATIVITY</span></h1>
          <h1 className="text">SO</h1>
          <h1 className="text">LET'S CONNECT<span><a href="https://www.linkedin.com/in/simon-yoseph-a98124189/" target="_blank" rel="noopener noreferrer">LET'S CONNECT</a></span></h1>

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
        </div>
      </div>
      <div className="main-tabs">
        <Switch>
          <Route path="/about" component={AboutMe} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
