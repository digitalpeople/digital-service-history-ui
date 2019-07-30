import React from 'react';
import './login.scss';

const Login = () => (
  <section className="login">
    <header>Login</header>
    <article className="container">
      <div className="form-group">
        <input
          type="text"
          name="username"
          className="form-control"
          required
        />
        <span
          htmlFor="username"
          className="label"
        >
          Username
        </span>
      </div>

      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          required
        />
        <span
          htmlFor="password"
          className="label"
        >
          Password
        </span>
      </div>
      <button type="submit">Login</button>

    </article>
  </section>
);

export default Login;
