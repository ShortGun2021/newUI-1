import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  Image,
  Row,
  Spinner,
} from "react-bootstrap";
import NFTNavbar from "../Homepage/NFTNavbar";
import "../Styles/ExplorePageStyles/explore.css";

let navigate
const Cards = ({ nftData }) => {
  // console.log(nftData);
  return (
    <Col xm={4} className="py-3 py-sm-0 col-lg-4 col-md-4 col-12">
      <Card
        className="header-card"
        onClick={() => {
          navigate('/nftDetails', {
            state: {
              nftData: nftData
            },
          })
        }}
      >
        {/* <Card.Img variant="top" src={card.image} /> nftData && nftData[0].nftImgBase64 */}
        <Card.Img
          variant="top"
          src={nftData.nftImageUrl}
        />
        <Card.Body>
          <Card.Title>
            <h5>
              <Image
                rounded="true"
                // src={card.avatar}
                src={nftData.nftImageUrl}
                height="35"
                width="35"
              ></Image>{' '}
              <span className="card-nft-name">{nftData.nftName}</span>
            </h5>
            <div className="row text-muted" style={{ fontSize: "12px" }

            }>
              {' '}
              <em className="">
                ~ "{nftData.nftDescription?.substring(0, 100)}"<span className="mx-2 text-dark">....read more</span>
              </em>
            </div>



          </Card.Title>
          <Button className="card-checkout-btn mt-3 btn-sm">Checkout NFT</Button>
          <button className="card-goinfo-btn mt-3 text-success font-weight-bold btn-sm">
            {/* <GoInfo /> */}<span calsssName="">+{Math.floor(Math.random() * (30000 - 1)) / 100}%</span>
          </button>
        </Card.Body>
      </Card>
    </Col >
  )
}

function Explore() {
  navigate = useNavigate();
  const [Btnname, setBtnname] = useState("All Categories");
  const [nftData, setNftData] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  console.log(Btnname);
  console.log(nftData);
  const fetchNtfs = async () => {
    setisLoading(true);
    const res = await axios.get(
      "https://shortgun-backend.herokuapp.com/nft/getNFTs"
    );
    setNftData(res.data);

    setisLoading(false);
  };
  useEffect(() => {
    fetchNtfs();
  }, []);

  // console.log("data  ", nftData);
  return (
    <>
      <NFTNavbar />

      <div
        style={{
          width: "75%",
          margin: "10px auto 0 auto",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <div
          className="d-flex justify-content-center mt-5"
          style={{ textAlign: "center" }}
        >
          <h2
            style={{
              fontSize: "35px",
              fontWeight: "700",
            }}
          >
            <b>Explore our Categories</b>
          </h2>
        </div>
        <div>
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
          {isLoading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Spinner
                animation="border"
                style={{
                  fontSize: "50px",
                  color: "#6739B7",
                  width: "100px",
                  height: "100px",
                  margin: "180px auto 40px auto",
                }}
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <Container style={{ marginTop: "20px" }}>
              <Row>
                {nftData.map((card, index) => {
                  if (Btnname === "All Categories") {
                    return (
                      <Cards key={index} nftData={nftData[index]} />
                    );
                  }
                  else {
                    if (Btnname === nftData[index].nftCategory) {
                      return (
                        <Cards key={index} nftData={nftData[index]} />
                      );
                    }
                  }
                })}

              </Row>
            </Container>
          )}
        </div>
      </div>
    </>
  );
}

export default Explore;
