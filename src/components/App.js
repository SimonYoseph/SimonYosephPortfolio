import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { faSquareXTwitter, faLinkedin, faGithub,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Homepage from './Homepage';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Portfolio from './Portfolio';
import '../styles/App.css';



const App = () => {
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
      

        {/* Conditionally render the content only on the homepage */}
        <Switch>
          <Route exact path="/Homepage" render={() => (
            <div className="container">
              <div classname="text-align">
              <h1 className="text">I AM <span>SIMON YOSEPH,</span></h1>
              <h1 className="text">ONE WHO CREATES<span>TO EXPAND</span></h1>
              <h1 className="text">AND IMPLEMENT(S)<span>CREATIVITY</span></h1>
              <h1 className="text">SO</h1>
              <h1 className="text">LET'S CONNECT<span><a href="https://www.linkedin.com/in/simon-yoseph-a98124189/" target="_blank" rel="noopener noreferrer">LET'S CONNECT</a></span></h1>
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
            </div>
          )} />

          {/* Route for the About Me section without the additional content */}
          <Route path="/homepage" component={Homepage} />
          <Route path="/about" component={AboutMe} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;