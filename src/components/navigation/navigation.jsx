import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './navigation.scss';

const Navigation = (props) => {
  const { isAuthenticated } = props;

  const notAuthenticatedTemplate = (
    <ul className="nav">
      <li className="nav-item">
        <NavLink to="/login">Login</NavLink>
      </li>
    </ul>
  );

  const authenticatedTemplate = (
    <ul className="nav">
      <li className="nav-item">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/logout">Logout</NavLink>
      </li>
    </ul>
  );

  return (
    <nav>
      { isAuthenticated ? authenticatedTemplate : notAuthenticatedTemplate }
    </nav>
  );
};

Navigation.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Navigation);
