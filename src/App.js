import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/login/login';
import About from './components/about';
import Home from './home';
import './styles/base.scss';

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
        <li className="nav-item">
          <Link to="/login">Login</Link>
        </li>
      </ul>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
    </Router>
  </div>
);

export default App;
