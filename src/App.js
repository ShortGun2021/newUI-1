import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Components/Homepage/HomePage";
import SearchPage from "./Components/Search/SearchPage";
import CollectionsPage from "./Components/Collections/Collections";
import ExplorePage from "./Components/Explore/Explore";
import ProfilePage from "./Components/Profile/Profile";
import CardIndex from "./Components/NFTCard/CardIndex";
import NFTUpload from "./Components/Upload/Upload.tsx";
import ConnectWallet from "./Components/PhantomWallet/ConnectWallet.tsx";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import PrivateRoute from "./Controller/PrivateRoute";
import SettingsPage from "./Components/Settings/SettingsPage";

const App = () => {
  return (
    <>
      {/* <HomePage/> */}
      {/* <SearchPage/> */}
      {/* <CardIndex/> */}
      {/* <ProfilePage/> */}
      {/* <ExplorePage/> */}
      {/* <CollectionsPage/> */}

      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route
            exact
            path="/search"
            element={
              <PrivateRoute>
                <SearchPage />
              </PrivateRoute>
            }
          ></Route>
          <Route
            exact
            path="/explore"
            element={
              <PrivateRoute>
                <ExplorePage />
              </PrivateRoute>
            }
          ></Route>
          <Route
            exact
            path="/collections"
            element={
              <PrivateRoute>
                <CollectionsPage />
              </PrivateRoute>
            }
          ></Route>
          <Route
            exact
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          ></Route>
          <Route
            exact
            path="/nft-card"
            element={
              <PrivateRoute>
                <CardIndex />
              </PrivateRoute>
            }
          ></Route>
          <Route
            exact
            path="/admin"
            element={
              <PrivateRoute>
                <NFTUpload />
              </PrivateRoute>
            }
          ></Route>
          <Route
            exact
            path="/wallet"
            element={
              <PrivateRoute>
                <ConnectWallet />
              </PrivateRoute>
            }
          ></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>

          <Route exact path="/settings" element={<SettingsPage />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
