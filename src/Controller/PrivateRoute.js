import React from "react";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { Navigate } from "react-router-dom";

const useAuth = () => {
  const { publicKey } = useWallet();

  return publicKey?.toBase58();
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
