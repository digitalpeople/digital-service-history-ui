import React from 'react';
import './login.scss';

const Login = () => (
  <section className="login">
    <header>Login</header>
    <article className="container">
      <div className="form-group">
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="form-control"
          required
        />
        <span className="form-highlight" />
        <span className="form-bar" />
        <span htmlFor="username" className="float-label">login</span>
      </div>
      <input
        type="password"
        placeholder="Password"
        name="password"
        required
      />

      <button type="submit">Login</button>

    </article>
  </section>
);

export default Login;
