import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextInput from '../forms/text-input';
import { loginAction } from './login.action';
import './login.scss';

const Login = (props) => {
  const {
    onLogin,
  } = props;

  return (
    <section className="login">
      <header>Login</header>
      <article className="container">
        <TextInput
          name="username"
          label="Username"
        />

        <TextInput
          name="password"
          label="Password"
          isPassword
        />

        <button
          type="submit"
          className="btn btn-primary btn-block"
          onClick={() => onLogin({ username: 'user', password: 'abc123' })}
        >
          Login
        </button>

      </article>
    </section>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  login: state.login,
});

const mapDispatchToProps = dispatch => ({
  onLogin: ({ username, password }) => dispatch(loginAction({ username, password })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
