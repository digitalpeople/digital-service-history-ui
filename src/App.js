import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './about';
import Home from './home';
import './app.scss';

const App = () => (
  <div className="app">
    <Router>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
      </ul>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  </div>
);

export default App;
