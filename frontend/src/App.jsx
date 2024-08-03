import React, { useState } from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import { Signup }from './components/Signup';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import "core-js/stable/atob";
import { jwtDecode } from 'jwt-decode'; 


function App () {
  const [username, setUsername] = useState('');

  const handleLogin = (token) => {
    const decoded = jwtDecode(token); 
    setUsername(decoded.username);
  };

  return (
    <BrowserRouter>
      
      <div>
        
        <h1>Donation</h1>
        
        <Routes>
          <Route path="/signup" element={<Signup />} />
      
          <Route
            path="/login"
            element={<Login onLogin={handleLogin} />}
          />
          
          <Route
            path="/dashboard"
            element={<Dashboard username={username} />}
          />
          
          { /* <Route path="/" element={<Login onLogin={handleLogin} />} /> */}
        </Routes>
      </div>
    
    </BrowserRouter>
  );
};


export default App
