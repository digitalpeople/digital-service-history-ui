import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Navigation from './components/navigation/navigation';
import Login from './components/auth/login';
import Logout from './components/auth/logout';
import About from './components/about';
import Home from './home';
import './styles/base.scss';

const App = () => (
  <div className="app">
    <Router>
      <Navigation />
      <main className="container">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
      </main>
    </Router>
  </div>
);

export default App;
