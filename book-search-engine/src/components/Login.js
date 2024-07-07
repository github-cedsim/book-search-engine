import React, { useState } from 'react';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Implement login functionality here
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="email"
        value={formState.email}
        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
        placeholder="Email"
      />
      <input
        type="password"
        value={formState.password}
        onChange={(e) => setFormState({ ...formState, password: e.target.value })}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;