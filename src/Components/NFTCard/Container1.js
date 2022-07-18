import React from "react";
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
import { BsGlobe, BsTwitter } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";
import { FiLink2 } from "react-icons/fi";
// require('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css')
require("bootstrap/dist/css/bootstrap.min.css");
const Container1 = ({ nftData }) => {
  // console.log(nftData);
  return (
    <>
      <div>
        <div
          style={{
            alignContent: "center",
            // display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "2%",
          }}
        >
          <div style={{ margin: "10%" }}>
            <img
              style={{ borderRadius: "10px" }}
              // src="https://images.pexels.com/photos/12334012/pexels-photo-12334012.jpeg?cs=srgb&dl=pexels-luis-angel-ferrer-l%C3%B3pez-12334012.jpg&fm=jpg"
              src={nftData.nftImageUrl}
              width="100%"
              height="100%"
              alt=""
            />
            <div style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",

            }}>
              <a href={nftData.nftImageUrl} target="_blank" ><Button className="card-checkout-btn mt-2">View Image</Button></a>
            </div>
          </div>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Description
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body text-left">
                  <strong>" </strong>
                  <span style={{ color: "#6739B7" }}><i>{nftData.nftDescription}</i></span>{" "}
                  <strong> "</strong>

                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Properties
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div
                  class="accordion-body"
                  style={{ margin: 0, width: "100%", padding: 0 }}
                >
                  {/* <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow. */}
                  <div
                    className="container "
                    style={{ marginBottom: "10px", width: "100%", padding: 0 }}
                  >
                    <div
                      className="row text-center"
                      style={{ margin: 0, width: "100%" }}
                    >
                      <div
                        className="col-xl-3 col-sm-3 col-lg-4 col-md-4  col-xl-4"
                        style={{ width: "175px" }}
                      >
                        <div
                          class="card"
                          style={{
                            backgroundColor: "#EAE0FF",
                            border: "1px solid #6739B7",
                            borderRadius: "9px",
                          }}
                        >
                          <div class="card-body">
                            <h5
                              style={{
                                whiteSpace: "nowrap",
                                color: "#6739B7",
                                fontSize: "14px",
                                fontWeight: "600",
                              }}
                            >
                              Trait Type
                            </h5>
                            <p
                              style={{
                                color: "#353840",
                                fontWeight: "500",
                                fontSize: "16px",
                                margin: "0 0 5px 0",
                              }}
                            >
                              {nftData.nftTraitType}
                            </p>
                            <p
                              style={{
                                color: "#707A83",
                                fontWeight: "400",
                                fontSize: "12px",
                                margin: 0,
                              }}
                            >
                              {nftData.nftValue} % have this trait
                            </p>
                          </div>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  About &nbsp;<strong> {nftData.nftName}</strong>
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div className="row">
                    {/* <div style={{ display: "flex", flexDirection: "row" }}>
                      <div>
                        <a href={nftData.nftImageUrl} >

                          <img
                            style={{ borderRadius: "10px" }}
                            src={nftData.nftImageUrl}
                            width="104px"
                            height="104px"
                            alt={nftData.nftImageUrl}
                          />
                        </a>
                      </div>
                      <div
                        className="ml-2"
                        style={{
                          fontSize: "14px",
                          fontWeight: 400,
                          color: "#636363",
                        }}
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </div>
                    </div> */}
                    {/* <div className="mt-3">
                      <ButtonGroup
                        style={{
                          width: "200px",

                          marginLeft: "10px",
                          display: "flex",
                          flexWrap: "nowrap",
                        }}
                      >
                        <Button
                          variant="light"
                          style={{
                            color: "#8A8A8A",
                            border: "1px solid #CFCFCF",
                            borderRadius: "9px 0 0 9px",
                            height: "51px",
                            width: "50px",
                          }}
                        >
                          {" "}
                          <BsGlobe style={{ fontSize: "22px" }} />{" "}
                        </Button>
                        <Button
                          variant="light"
                          style={{
                            color: "#8A8A8A",
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
                            color: "#8A8A8A",
                            border: "1px solid #CFCFCF",
                            borderRadius: "0 0 0 0",
                            height: "51px",
                            width: "50px",
                          }}
                        >
                          {" "}
                          <SiDiscord style={{ fontSize: "22px" }} />{" "}
                        </Button>

                        <Button
                          variant="light"
                          style={{
                            color: "#8A8A8A",
                            border: "1px solid #CFCFCF",
                            borderRadius: "0 9px 9px 0",
                            height: "51px",
                            width: "50px",
                          }}
                        >
                          {" "}
                          <BsTwitter style={{ fontSize: "22px" }} />{" "}
                        </Button>
                      </ButtonGroup>
                    */}
                    <div className='px-1'>
                      <ul >
                        <li><b>NFT ID: </b>{nftData._id}</li>
                        <li><b>NFT Name: </b>{nftData.nftName}</li>
                        <li><b>NFT Category: </b>{nftData.nftCategory}</li>
                        <li><b>NFT Symbol: </b>{nftData.nftSymbol}</li>
                        <li><b>NFT Seller Fee Point: </b>{nftData.seller_fee_basis_points}</li>
                        <li><b>Owner Address: </b>{nftData.walletAddress}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default Container1;
