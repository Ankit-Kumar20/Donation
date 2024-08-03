import React, { useState } from 'react';
import { BrowserRouter , Route, Routes ,useNavigate} from 'react-router-dom';
import { Signup }from './components/Signup';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import "core-js/stable/atob";
import { jwtDecode } from 'jwt-decode'; 
import LandingPage from './components/LandingPage';


function App () {
  const [username, setUsername] = useState('');

  const handleLogin = (token) => {
    const decoded = jwtDecode(token); 
    setUsername(decoded.username);
  };

  return (
    <BrowserRouter>
      
      <div>
        
        <Routes>

          <Route path="/" element={<LandingPage />} />

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
