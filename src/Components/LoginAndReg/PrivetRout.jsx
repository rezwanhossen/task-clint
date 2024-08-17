import React from "react";
import useAuth from "../Hook/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRout = ({ children }) => {
  const { user, lodding } = useAuth();
  const location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>;
  }
  return <div>{children} </div>;
};

export default PrivetRout;
