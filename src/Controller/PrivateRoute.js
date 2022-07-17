import React from "react";
import { Navigate } from "react-router-dom";

const useAuth = () => {
  return localStorage.getItem("user");
};
const PrivateRoute = ({ children }) => {
  //   const Navigate = useNavigate();

  const authUser = useAuth();
  if (!authUser) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
