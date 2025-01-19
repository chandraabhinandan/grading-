import React, { useState } from 'react';
import './login.css';

function Login() {
  // State to store input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log('Email:', email);
    console.log('Password:', password);

  };

  return (
    <div className="login">
      <div className="login-container">
        <h2 className="login-title">Please Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-fields">
            <input
              type="text"
              placeholder="Email Address"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update state
              required
            />
          </div>
          <button type="submit" className="login-button btn btn-primary">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
