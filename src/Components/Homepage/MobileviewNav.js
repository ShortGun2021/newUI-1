import React from "react";

import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { MdPerson } from "react-icons/md";

import WalletDetails from "../PhantomWallet/WalletDetails.js";
import { useNavigate } from "react-router-dom";

import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
require("@solana/wallet-adapter-react-ui/styles.css");

function Mobileviewnav() {
  let navigate = useNavigate();

  return (
    <>
      <Navbar bg="light" expand="lg" className="shadow-sm">
        <Container>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand href="#home">
              <img
                style={{ filter: " invert(1)" }}
                src="https://static.wixstatic.com/media/ccc269_fef35fd3445e47099ff2ba432afd2ead~mv2.png/v1/fill/w_60,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Original_edited_edited_edited.png"
                alt=""
              />
              <span
                style={{
                  fontWeight: "500",
                  fontStyle: "Ubuntu",
                  fontSize: "22px",
                  margin: "5%",
                }}
                className="Brandname"
              >
                SHORTGUN
              </span>
            </Navbar.Brand>
          </Link>

          <Button
            variant="light"
            style={{ position: "absolute", right: "22%", top: "18px" }}
            onClick={() => {
              navigate("/search");
            }}
          >
            {" "}
            <AiOutlineSearch style={{ fontSize: "25px" }} />{" "}
          </Button>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link style={{ textDecoration: "none" }} to="/explore">
                <Nav.Link
                  style={{
                    color: "#2B2B2B",
                    fontWeight: 500,
                    fontSize: "18px",
                  }}
                  className="navItems nft-navlink"
                  href="#action1"
                >
                  Explore
                </Nav.Link>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/admin">
                <Nav.Link
                  style={{
                    color: "#2B2B2B",
                    fontWeight: 500,
                    fontSize: "18px",
                  }}
                  className="navItems nft-navlink"
                  href="#action2"
                >
                  Create
                </Nav.Link>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/collections">
                <Nav.Link
                  style={{
                    color: "#2B2B2B",
                    fontWeight: 500,
                    fontSize: "18px",
                  }}
                  className="navItems nft-navlink"
                  href="#action3"
                >
                  Favourites
                </Nav.Link>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/collections">
                <Link to="/profile">
                  <Button className="navItems" variant="light">
                    <MdPerson style={{ fontSize: "25px" }} />
                  </Button>
                </Link>
                <WalletDetails />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Mobileviewnav;
