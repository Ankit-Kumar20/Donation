import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);

  const navigate = useNavigate();

  async function handleSignup (e) {
    try {
      await axios.post('http://localhost:3000/authentication/signup', {
        username,
        email,
        password,
        private : isPrivate
      });
      setMessage('User created successfully. Please log in.');
      navigate('/login');
    } catch (error) {
      setMessage('Error: ' + error.response.data);
    }  
  };

  return (
    <div>
      <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
       <label>
          <input
            type="checkbox"
            checked={isPrivate}
            onChange={(e) => setIsPrivate(e.target.checked)}
          />
          Private Account
        </label>

        <button onClick={handleSignup}>Sign Up</button>
      {message && <p>{message}</p>}
    </div>
  );
};

