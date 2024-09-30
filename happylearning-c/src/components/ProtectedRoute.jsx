// ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Check if the token exists

  // If the token is not found, redirect to the login page
  if (!token) {
    return <Navigate to="/login" />;
  }

  // If the token is found, render the children components
  return children;
};

export default ProtectedRoute;
