import React, { useState } from 'react';

const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Implement signup functionality here
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={formState.username}
        onChange={(e) => setFormState({ ...formState, username: e.target.value })}
        placeholder="Username"
      />
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
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;