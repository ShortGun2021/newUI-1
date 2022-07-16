import React from "react";
import DesktopviewNav from "./DesktopviewNav";
import MobileviewNav from "./MobileviewNav";
import("../Styles/HomePageStyles/NFTNavbar.css");

require("bootstrap/dist/css/bootstrap.min.css");
const useAuth = () => {
  return localStorage.getItem("user");
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
