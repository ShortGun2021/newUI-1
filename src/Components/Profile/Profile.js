import React, { useState } from "react";
import Profile_collected from "./Profile_collected";
import Profile_favourites from "./Profile_favourites";
import Profile_activity from "./Profile_activity";
import Profile_offers from "./Profile_offers";
import Profile_offersRecieved from "./Profile_offersRecieved";
import Profile_created from "./Profile_created";
import Image from "react-bootstrap/Image";
import { FaDiscord } from "react-icons/fa";
import { Spinner } from "react-bootstrap";
// import NFTNavbar from "../Homepage/NFTNavbar";
import Footer from "../Homepage/Footer";

import {
  BsFillShareFill,
  BsListUl,
  BsArrowUpLeft,
  BsArrowDownRight,
} from "react-icons/bs";
import { ButtonGroup, Button } from "react-bootstrap";
import { MdFavorite } from "react-icons/md";
import { AiFillFormatPainter, AiOutlineFileDone } from "react-icons/ai";
import { Link } from "react-router-dom";
import("../Styles/ProfilePageStyles/profile.css");

const profile = {
  coverimg: "https://wallpapercave.com/wp/wp3421912.jpg",
  profileimg:
    "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFkfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  name: "Full Name",
  bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
};

function Profile() {
  const Btns = {
    Collected: Profile_collected,
    Activity: Profile_activity,
    Favourites: Profile_favourites,
    OffersMade: Profile_offers,
    OffersRecieved: Profile_offersRecieved,
    Created: Profile_created,
  };
  const [Btnname, setBtnname] = useState("Collected");
  const BtnComponent = Btns[Btnname];
  let loadingCount = 0;
  const [loadings, setloadings] = useState(0);
  return (
    <>
      {loadings !== 1 ? (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <Spinner
            animation="border"
            style={{
              fontSize: "50px",
              color: "#6739B7",
              width: "100px",
              height: "100px",
              margin: "50px auto 40px auto",
            }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        ""
      )}
      <div
        style={
          loadings !== 1
            ? {
                opacity: "0.25",
                position: "fixed",
                overflowY: "scroll",
                width: "100%",
              }
            : {}
        }
      >
        {/* <NFTNavbar /> */}
        <div className="page">
          <div className="cover h-25 border">
            <img className="image" src={profile.coverimg} alt="cover photo" />
          </div>
          <div className="share">
            <div
              style={{
                position: "relative",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  position: "absolute",
                  right: 0,
                }}
              >
                <Button
                  variant="link"
                  className="shadow-none"
                  style={{
                    display: "inline-block",
                    width: "20px",
                  }}
                >
                  <FaDiscord style={{ color: "black" }} />
                </Button>
                <Button
                  variant="link"
                  className="shadow-none"
                  style={{ display: "inline-block", width: "30px" }}
                >
                  <BsFillShareFill style={{ color: "black" }} />
                </Button>
              </div>
            </div>
          </div>

          <Image className="pic" src={profile.profileimg} alt="profile" />
          <div className="matter">
            <div className="bio">
              <h2 className="name">{profile.name}</h2>
              <p className="desc">{profile.bio}</p>
            </div>
            <div className="d-flex justify-content-center border-bottom">
              <ButtonGroup className="btns" style={{ borderRadius: 0 }}>
                <Button
                  className="profilebtns shadow-none"
                  name="Collected"
                  onClick={() => setBtnname("Collected")}
                  style={
                    Btnname === "Collected"
                      ? {
                          color: "#6739B7",
                          borderBottom: "2px solid #6739B7",
                          borderRadius: 0,
                        }
                      : { color: "#636363" }
                  }
                  variant="link"
                >
                  <AiOutlineFileDone /> Collected
                </Button>
                <Button
                  className="profilebtns shadow-none"
                  name="Created"
                  onClick={() => setBtnname("Created")}
                  style={
                    Btnname === "Created"
                      ? {
                          color: "#6739B7",
                          borderBottom: "2px solid #6739B7",
                        }
                      : { color: "#636363" }
                  }
                  variant="link"
                >
                  <AiFillFormatPainter /> Created
                </Button>
                <Button
                  className="profilebtns shadow-none"
                  name="Favourites"
                  onClick={() => setBtnname("Favourites")}
                  style={
                    Btnname === "Favourites"
                      ? { color: "#6739B7", borderBottom: "2px solid #6739B7" }
                      : { color: "#636363" }
                  }
                  variant="link"
                >
                  <MdFavorite /> Favourites
                </Button>
                <Button
                  className="profilebtns shadow-none"
                  name="Activity"
                  onClick={() => setBtnname("Activity")}
                  style={
                    Btnname === "Activity"
                      ? { color: "#6739B7", borderBottom: "2px solid #6739B7" }
                      : { color: "#636363" }
                  }
                  variant="link"
                >
                  <BsListUl /> Activity
                </Button>

                <Button
                  className="profilebtns shadow-none"
                  name="Offers made"
                  onClick={() => setBtnname("OffersMade")}
                  style={
                    Btnname === "OffersMade"
                      ? { color: "#6739B7", borderBottom: "2px solid #6739B7" }
                      : { color: "#636363" }
                  }
                  variant="link"
                >
                  <BsArrowUpLeft />
                  Offers made
                </Button>

                <Button
                  className="profilebtns shadow-none"
                  name="Offers recieved"
                  onClick={() => setBtnname("OffersRecieved")}
                  style={
                    Btnname === "OffersRecieved"
                      ? {
                          color: "#6739B7",
                          borderBottom: "2px solid #6739B7",
                          borderRadius: 0,
                        }
                      : { color: "#636363" }
                  }
                  variant="link"
                >
                  <BsArrowDownRight /> Offers received
                </Button>
              </ButtonGroup>
            </div>
            <div>
              <BtnComponent
                setloadings={setloadings}
                loadingCount={loadingCount}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
