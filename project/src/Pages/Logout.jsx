import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any local storage/session tokens if used
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="logout-container">
      <div className="logout-card">
        <h1>Logged Out</h1>
        <p>You have been successfully logged out.</p>
        <button onClick={handleLogout}>Return to Login</button>
      </div>
    </div>
  );
}

export default Logout;
