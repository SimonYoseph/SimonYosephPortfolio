import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { faSquareXTwitter, faLinkedin, faGithub,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Portfolio from './Portfolio';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../styles/App.css';

// Import statements...

const Homepage = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // GSAP and ScrollTrigger setup...

    const handleScroll = () => {
      setIsSticky(window.scrollY >= 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

        <div className={`tab-text-color ${isSticky ? 'sticky' : ''}`}>
          <nav>
            <Link to="/Homepage">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/portfolio">Portfolio</Link>
          </nav>
        </div>

       
  );
};

export default Homepage;
