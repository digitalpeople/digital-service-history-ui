import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Navigation from './components/navigation/navigation';
import Login from './components/login/login';
import About from './components/about';
import Home from './home';
import './styles/base.scss';

const navigation = {
  items: [
    {
      id: 0,
      path: '/about',
      text: 'About',
    },
    {
      id: 1,
      path: '/login',
      text: 'Login',
    },
  ],
};

const App = () => (
  <div className="app">
    <Router>
      <Navigation navigation={navigation} />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
    </Router>
  </div>
);

export default App;
