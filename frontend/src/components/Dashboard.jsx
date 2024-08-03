import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; 

export function Dashboard() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const decoded = jwtDecode(token);
      setUsername(decoded.username);
    } catch (error) {
      
      console.error('Error decoding token:', error);
      navigate('/login'); 
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate('/login'); 
  };

  return (
    <div>
      <h2>Hi there, {username}!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
