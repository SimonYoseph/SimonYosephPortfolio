import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter as Router, Route, Switch, Link, useLocation } from 'react-router-dom';
import { faSquareXTwitter, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Portfolio from './Portfolio';
import '../styles/App.css';

// Component to set background only for homepage
const PageWrapper = ({ children }) => {
  const location = useLocation();
  return <div className={location.pathname === '/' ? 'homepage' : 'default'}>{children}</div>;
};


const App = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
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
      <PageWrapper>
      <div className="page">
        {/* Navigation */}
        <div className={`tab-text-color ${isSticky ? 'sticky' : ''}`}>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/portfolio">Portfolio</Link>
          </nav>
        </div>

        {/* Routes */}
        <Switch>
          {/* Homepage */}
          <Route exact path="/" render={() => (
            <div className="container">
              <div className="text-align">
                <h1 className="text">I AM <span>SIMON YOSEPH.</span></h1>
                <h1 className="text">ONE WHO CREATES<span>TO EXPAND</span></h1>
                <h1 className="text">AND IMPLEMENT(S)<span>CREATIVITY</span></h1>
                <h1 className="text">SO</h1>
                <h1 className="text">LET'S
                  <span>
                    <a href="https://www.linkedin.com/in/simon-yoseph-a98124189/" target="_blank" rel="noopener noreferrer">
                      CONNECT
                    </a>
                  </span>
                </h1>
              </div>

              {/* Social Media Icons */}
              <div className="socialMediaIcons">
                <ul className="listSocial">
                  <li>
                    <a href="https://twitter.com/simon_yoseph" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faSquareXTwitter} />
                      <span>X</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/simon-yoseph-a98124189/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} />
                      <span>LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:simon97862012@gmail.com" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faEnvelope} />
                      <span>Gmail</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/SimonYoseph" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGithub} />               
                      <span>GitHub</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/simon_yoseph/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faInstagram} />                 
                      <span>Insta</span>
                    </a>
                  </li>
                  <li>
                    <a href="Simon's Resume.pdf" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faFilePdf} />                
                      <span>Resume</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )} />

          {/* Other Routes */}
          <Route path="/about" component={AboutMe} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </div>
      </PageWrapper>
    </Router>
  );
};

export default App;
