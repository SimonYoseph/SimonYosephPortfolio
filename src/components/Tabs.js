import React from 'react';
import { Link } from 'react-router-dom';

const Tabs = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Tabs;