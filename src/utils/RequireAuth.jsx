import React from 'react';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const isLoggedIn = localStorage.getItem('akic_logged_in') === 'true';
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default RequireAuth;
