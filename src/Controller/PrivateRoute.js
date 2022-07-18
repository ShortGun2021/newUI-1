import React from "react";
import { Navigate } from "react-router-dom";

const useAuth = () => {
  const user = localStorage.getItem("user");
  const walletAddress = localStorage.getItem("walletAddress");
  const publicKey = localStorage.getItem("publicKey");
  // console.log(publicKey !== walletAddress);
  if (publicKey !== walletAddress && walletAddress !== "") return false;
  else return user && walletAddress;
};
const PrivateRoute = ({ children }) => {
  //   const Navigate = useNavigate();

  const authUser = useAuth();
  // console.log(authUser);
  if (!authUser) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
