import React, { useState } from 'react';
import './create.css';

function Create() {
  // State to store input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [designation, setDesignation] = useState('');

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Designation:', designation);

    // You can send this data to a server or process it further here
    alert(`Form submitted!\nEmail: ${email}\nPassword: ${password}\nDesignation: ${designation}`);
  };

  return (
    <div className="create">
      <div className="create-container">
        <h2 className="create-title">Please Enter Your Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-fields">
            <input
              type="text"
              placeholder="Email Address"
              className="create-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="create-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update state
              required
            />
          </div>
          <div className="select-fields">
          <select
            className="designation-dropdown"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)} // Update state
            required
          >
            <option value="" disabled>
              Select Designation
            </option>
            <option value="Professor">Professor</option>
            <option value="Teaching Assistant">Teaching Assistant</option>
            <option value="Student">Student</option>
          </select>
          </div>
          <button type="submit" className="create-button btn btn-primary">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
