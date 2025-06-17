import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ allowedRole, children }) => {
  const role = localStorage.getItem('role');

  if (role === allowedRole) {
    return children;
  }

  return <Navigate to="/unauthorized" />;
};

export default ProtectedRoute;

