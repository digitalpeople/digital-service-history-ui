import React from 'react';
import TextInput from '../forms/text-input';
import './login.scss';

const Login = () => (
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

      <button type="submit">Login</button>

    </article>
  </section>
);

export default Login;
