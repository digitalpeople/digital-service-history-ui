import React, { useState } from 'react';
import TextInput from '../forms/text-input';
import './login.scss';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  console.log(username, password);

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

        <button type="submit">Login</button>

      </article>
    </section>
  );
};

export default Login;
