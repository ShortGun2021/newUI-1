import React from "react";
import SideNavSettings from "./SideNavSettings";
import ProfileSettings from "./ProfileSettings";
import PreviewPage from "./PreviewPage";

// this is the main settings page
const SettingsPage = () => {
  return (
    <>
    <div className="row">
        <div className="col-3"><SideNavSettings/></div>
        <div className="col-5"><ProfileSettings/></div>
        <div className="col-4"><PreviewPage/></div>
    </div>
    
    </>
  );
};

export default SettingsPage;
