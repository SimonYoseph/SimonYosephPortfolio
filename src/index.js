import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import App from './Homepage/App';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';


ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={App} />
      <Route path="/" component={AboutMe} />
      <Route path="/" component={Contact} />
      <Route path="/" component={Portfolio} />
    </Switch>
  </Router>,
  document.getElementById('root')
);





