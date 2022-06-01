import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute = ({ component: Component, ...props }) => {
  const ProtectedRoute = ({ component: Component, ...props }) => {
  return props.loggedIn ? <Outlet /> : <Navigate to="/sign-in" />
};

export default ProtectedRoute;