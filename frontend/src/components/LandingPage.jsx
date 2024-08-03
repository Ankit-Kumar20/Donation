import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Welcome to the Donation App</h2>
      <button onClick={() => navigate('/login')}>Login</button>
      <button onClick={() => navigate('/signup')}>Sign Up</button>
    </div>
  );
}

export default LandingPage;
