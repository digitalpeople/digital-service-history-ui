import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import TextInput from '../forms/text-input';
import { loginAction } from '../../store/auth/auth.action';
import './login.scss';

const Login = (props) => {
  const {
    onLogin,
    auth,
  } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (auth.isAuthenticated) {
    return <Redirect to="/about" />;
  }

  return (
    <section className="login">
      <header>Login</header>
      <article className="container">
        <TextInput
          name="username"
          label="Username"
          onChange={value => setUsername(value)}
        />

        <TextInput
          name="password"
          label="Password"
          onChange={value => setPassword(value)}
          isPassword
        />

        <button
          type="submit"
          className="btn btn-primary btn-block"
          onClick={() => onLogin({
            username,
            password,
          })}
        >
          Login
        </button>

      </article>
    </section>
  );
};

Login.propTypes = {
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
  }).isRequired,
  onLogin: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  onLogin: ({ username, password }) => dispatch(loginAction({ username, password })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
