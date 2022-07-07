import React, { useState } from "react";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import ("../Styles/HomePageStyles/TabPanelCategories.css");
require("bootstrap/dist/css/bootstrap.min.css");

const TabPanelCategories = () => {
  const [Btnname, setBtnname] = useState("TabPanel Categories");
  return (
    <>
      <div
        style={{
          width: "75%",
          margin: "10px auto 0 auto",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <div className="allbtns">
          <ButtonGroup
            className="btns d-flex justify-content-center"
            style={{
              width: "100%",
              height: "50px",
              backgroundColor: "#F0F0F0",
              borderRadius: "10px",
              marginTop: "30px",
            }}
          >
            <Button
              className="explorebtns shadow-none"
              onClick={() => setBtnname("All Categories")}
              style={
                Btnname === "All Categories"
                  ? { color: "#6739B7" }
                  : { color: "rgba(0, 0, 0, 0.3)" }
              }
              variant="link"
            >
              All Categories
            </Button>
            <Button
              className="explorebtns shadow-none"
              onClick={() => setBtnname("Arts")}
              style={
                Btnname === "Arts"
                  ? { color: "#6739B7" }
                  : { color: "rgba(0, 0, 0, 0.3)" }
              }
              variant="link"
            >
              Arts
            </Button>
            <Button
              className="explorebtns shadow-none"
              onClick={() => setBtnname("Sports")}
              style={
                Btnname === "Sports"
                  ? { color: "#6739B7" }
                  : { color: "rgba(0, 0, 0, 0.3)" }
              }
              variant="link"
            >
              Sports
            </Button>
            <Button
              className="explorebtns shadow-none"
              onClick={() => setBtnname("Utilities")}
              style={
                Btnname === "Utilities"
                  ? { color: "#6739B7" }
                  : { color: "rgba(0, 0, 0, 0.3)" }
              }
              variant="link"
            >
              Utilities
            </Button>

            <Button
              className="explorebtns shadow-none"
              onClick={() => setBtnname("Collectibles")}
              style={
                Btnname === "Collectibles"
                  ? { color: "#6739B7" }
                  : { color: "rgba(0, 0, 0, 0.3)" }
              }
              variant="link"
            >
              Collectibles
            </Button>

            <Button
              className="explorebtns shadow-none"
              onClick={() => setBtnname("Music")}
              style={
                Btnname === "Music"
                  ? { color: "#6739B7" }
                  : { color: "rgba(0, 0, 0, 0.3)" }
              }
              variant="link"
            >
              Music
            </Button>

            <Button
              className="explorebtns shadow-none"
              onClick={() => setBtnname("Trading Cards")}
              style={
                Btnname === "Trading Cards"
                  ? { color: "#6739B7" }
                  : { color: "rgba(0, 0, 0, 0.3)" }
              }
              variant="link"
            >
              Trading Cards
            </Button>
          </ButtonGroup>
        </div>

        <div className="explore-dropdown">
          <div
            className="d-flex justify-content-center"
            style={{ marginTop: "20px" }}
          >
            <Form.Select
              className="formSelect shadow-none"
              style={{
                height: "51px",
                width: "50%",
                border: "1px solid white",
                borderRadius: "9px",
                display: "inline-block",
                margin: "0 auto",
                color: "#6739B7",
                textAlign: "center",
              }}
              aria-label="Default select example"
            >
              <option className="option" value="1">
                All Categories
              </option>
              <option className="option" value="2">
                Arts
              </option>
              <option className="option" value="3">
                Sports
              </option>
              <option className="option" value="4">
                Utilities
              </option>
              <option className="option" value="5">
                Collectibles
              </option>
              <option className="option" value="6">
                Music
              </option>
              <option className="option" value="7">
                Trading Cards
              </option>
            </Form.Select>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabPanelCategories;
