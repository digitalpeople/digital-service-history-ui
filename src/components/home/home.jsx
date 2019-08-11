import React from 'react';
import { Redirect } from 'react-router-dom';

const Home = () => {
  if (localStorage.getItem('userToken') !== null) {
    return <Redirect to="/about" />;
  }
  return <Redirect to="/login" />;
};

export default Home;
