import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions here, e.g., clearing tokens, etc.
    navigate('/');
  };

  return (
    <div className="logout-container">
      <h1>Logout</h1>
      <p>You have been logged out successfully.</p>
      <button onClick={handleLogout}>Return to Login</button>
    </div>
  );
}

export default Logout;
