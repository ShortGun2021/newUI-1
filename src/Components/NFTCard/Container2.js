import axios from "axios";
import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import {
  Card,
  Button,
  Container,
  Col,
  Row,
  Image,
  Form,
  ButtonGroup,
} from "react-bootstrap";
import { MdOutlineFlag } from "react-icons/md";
import { FiLink2 } from "react-icons/fi";
import { BsShareFill } from "react-icons/bs";
import { IoReload } from "react-icons/io5";

import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

require("bootstrap/dist/css/bootstrap.min.css");

const Container2 = ({ nftData }) => {
  const navigate = useNavigate();
  // console.log(nftData)

  //bid placing
  const submitHandler = async (id) => {
    // console.log(id)

    await axios
      .post("https://shortgun-backend.herokuapp.com/nft/buyNFTs", {
        // nftID: "62a42ed7cc03d00c218c8dca",
        // nftID: nftData[0]._id,
        nftID: id,
        buyerEmail: "srijan@gmail.com",
        // buyerEmail: localStorage.getItem("buyerEmail"),
      })
      .then((response) => {
        alert("NFT Buying Success. Creator Updated");
        console.log(response);
        console.log(id);
        navigate("/profile", {
          state: {
            nftID: id,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div
        classNameName="d-flex justify-content-center"
        style={{ float: "right" }}
      >
        <ButtonGroup
          style={{
            display: "inline-block",
            marginLeft: "10px",
            display: "flex",
            flexWrap: "nowrap",
          }}
        >
          <Button
            variant="light"
            style={{
              color: "#737373",
              border: "1px solid #CFCFCF",
              borderRadius: "6px 0 0 6px",
              height: "51px",
              width: "50px",
            }}
          >
            {" "}
            <IoReload style={{ fontSize: "22px" }} />{" "}
          </Button>
          <Button
            variant="light"
            style={{
              color: "#737373",
              border: "1px solid #CFCFCF",
              borderRadius: "0 0 0 0",
              height: "51px",
              width: "50px",
            }}
          >
            {" "}
            <FiLink2 style={{ fontSize: "22px" }} />{" "}
          </Button>

          <Button
            variant="light"
            style={{
              color: "#737373",
              border: "1px solid #CFCFCF",
              borderRadius: "0 0 0 0",
              height: "51px",
              width: "50px",
            }}
          >
            {" "}
            <BsShareFill style={{ fontSize: "18px" }} />{" "}
          </Button>

          <Button
            variant="light"
            style={{
              color: "#737373",
              border: "1px solid #CFCFCF",
              borderRadius: "0 6px 6px 0",
              height: "51px",
              width: "50px",
            }}
          >
            {" "}
            <MdOutlineFlag style={{ fontSize: "25px" }} />{" "}
          </Button>
        </ButtonGroup>
      </div>
      <div style={{ margin: "4%" }}>
        <div>
          <h3 style={{ color: "#6739B7" }}>
            <strong>{nftData.nftName}</strong>
          </h3>
        </div>
        <div class="text-left my-4">
          <strong>~&nbsp; "</strong>
          <span style={{ color: "#6739B7" }}>
            <i>{nftData.nftDescription}</i>
          </span>{" "}
          <strong> "</strong>
        </div>
        <div>
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  Sale ends May 30, 2022 at 8:27am IST
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div className="accordion-body">
                  <strong>Top Bid</strong>
                  <br />
                  <div
                    style={{
                      fontSize: "32px",
                    }}
                  >
                    <Image
                      src="https://coinalpha.app/images/empty-token-solana.png"
                      height="20"
                      width="20"
                    ></Image>
                    <span
                      className="ml-2"
                      style={{ fontSize: "23px", fontWeight: 500 }}
                    >
                      39.99
                    </span>
                    <span
                      className="ml-1"
                      style={{
                        fontSize: "15px",
                        fontWeight: 400,
                        color: "#707A83",
                      }}
                    >
                      ($39.95)
                    </span>
                  </div>

                  <br />
                  <Button
                    style={{
                      width: "50%",
                      height: "42px",
                      backgroundColor: "#6739B7",
                      fontSize: "16px",
                      fontWeight: 500,
                    }}
                    onClick={() => {
                      // console.log(nftData._id)
                      // console.log(props)
                      submitHandler(nftData._id);
                    }}
                  >
                    Place Bid
                  </Button>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Listings
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Price</th>
                        <th scope="col">USD Price</th>
                        <th scope="col">Expiration</th>
                        <th scope="col">From</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>29.8 SOL</td>
                        <td>$58,276.89</td>
                        <td>8 days</td>
                        <td>Ruby.sol</td>
                      </tr>
                      <tr>
                        <td>50 SOL</td>
                        <td>$58,276.89</td>
                        <td>8 days</td>
                        <td>Ruby.sol</td>
                      </tr>
                      {/* <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2
                className="accordion-header"
                id="panelsStayOpen-headingThreeThree"
              >
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThreeThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThreeThree"
                >
                  Offers
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThreeThree"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThreeThree"
              >
                <div className="accordion-body">
                  <table className="table" style={{ overflowX: "auto" }}>
                    <thead>
                      <tr>
                        <th scope="col">Price</th>
                        <th scope="col">USD Price</th>
                        <th scope="col">Floor Difference</th>
                        <th scope="col">Expiration</th>
                        <th scope="col">From</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>29.8 SOL</td>
                        <td>$58,276.89</td>
                        <td>100% below</td>
                        <td>8 days</td>
                        <td>3D19F2</td>
                      </tr>
                      <tr>
                        <td>50 SOL</td>
                        <td>$58,276.89</td>
                        <td>100% below</td>
                        <td>8 days</td>
                        <td>3D19F2</td>
                      </tr>
                      {/* <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  Price History
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div className="accordion-body">
                  {/* <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container2;
