import React from 'react';

const Login = () => (
  <section className="login">
    <h2>Login</h2>
    <article className="container">
      <label htmlFor="username">
        Username
        <input
          type="text"
          placeholder="Username"
          name="username"
          required
        />
      </label>

      <label htmlFor="password">
        Password
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
      </label>

      <button type="submit">Login</button>

    </article>
  </section>
);

export default Login;
