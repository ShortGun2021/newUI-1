import React from "react";
import DesktopviewNav from "./DesktopviewNav";
import MobileviewNav from "./MobileviewNav";
import("../Styles/HomePageStyles/NFTNavbar.css");

require("bootstrap/dist/css/bootstrap.min.css");
const useAuth = () => {
  if (
    window.location.pathname === "/login" ||
    window.location.pathname === "/register"
  )
    return false;
  else return true;
};

export default function App() {
  const authUser = useAuth();
  return authUser ? (
    <>
      <div className="desktop">
        <DesktopviewNav />
      </div>{" "}
      <div className="mobile">
        <MobileviewNav />
      </div>
    </>
  ) : (
    <></>
  );
}
