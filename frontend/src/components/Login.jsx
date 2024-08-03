import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "core-js/stable/atob";
import { jwtDecode } from 'jwt-decode';


export function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    try {
      const response = await axios.post('http://localhost:3000/authentication/login', {
        email,
        password,
      });
      console.log('Token received:', response.data.token); // Log the token to verify it

      localStorage.setItem('token', response.data.token); // Store the token
      const decoded = jwtDecode(response.data.token); // Decode the token to get user info
      console.log(decoded)
      // Pass username to parent      
      navigate('/dashboard'); // Redirect to dashboard
    } catch (error) {
      setMessage('Error: ' + error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>

      {message && <p>{message}</p>}
    </div>
  );
}

