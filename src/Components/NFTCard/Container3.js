import React from 'react'
import { Dropdown } from 'react-bootstrap'
import {
  Card,
  Button,
  Container,
  Col,
  Row,
  Image,
  Form,
  ButtonGroup,
} from 'react-bootstrap'
import { MdFavorite } from 'react-icons/md'
// import {Row,Col,Container,Card,Image } from 'react-bootstrap';

require('bootstrap/dist/css/bootstrap.min.css')
const Container3 = () => {
  return (
    <div style={{ margin: '1%' }}>
      <div>
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="container3-price-history">
              <button
                class="accordion-button"
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
              class="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div class="accordion-body">
                {/* <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                <div className="mb-3" style={{ display: 'flex' }}>
                  <Form.Control
                    className="searchInput"
                    style={{
                      height: '51px',
                      // width: '1220px',
                      borderRadius: '9px',
                      border: '1px solid #3D3D3D',
                    }}
                    placeholder="Filter"
                  />
                </div>
                <div>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Event</th>
                        <th scope="col">Price</th>
                        <th scope="col">From</th>
                        <th scope="col">To</th>
                        <th scope="col">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Minted</td>
                        <td> </td>
                        <td>Null Address</td>
                        <td>Ruby</td>
                        <td>8 days ago</td>
                      </tr>
                      {/* <tr>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
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
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwoOne"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwoOne"
              >
                More From This Collection
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwoOne"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwoOne"
            >
              <div class="accordion-body">
                {/* <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}

                <Container>
                  <Row>
                    <Col
                      md={4}
                      sm={6}
                      xs={12}
                      lg={3}
                      xl={3}
                      className="mx-md-0 my-sm-3"
                    >
                      <Card
                        style={{
                          boxShadow: '0px 2px 10px #F8F8F8',

                          borderRadius: '8px',
                        }}
                      >
                        <Card.Img
                          style={{ borderRadius: '8px 8px 0 0' }}
                          variant="top"
                          src="https://www.journaldugeek.com/content/uploads/2022/03/nft-ape.jpg"
                        />
                        <Card.Body>
                          <Card.Title className="cardTitle">
                            <h5 style={{ display: 'inline' }}>
                              <b style={{ fontSize: 'large' }}>Rugby</b>
                            </h5>
                            <div
                              style={{
                                float: 'right',
                                textAlign: 'right',
                                alignItems: 'flex-end',
                              }}
                            >
                              <p
                                style={{
                                  fontSize: '17px',
                                  color: '#8A8A8A',
                                  marginBottom: '3px',
                                }}
                              >
                                Top Bid
                              </p>
                              <div style={{ marginBottom: '3px' }}>
                                <Image
                                  src="https://coinalpha.app/images/empty-token-solana.png"
                                  height="20"
                                  width="20"
                                ></Image>{' '}
                                <span
                                  style={{
                                    fontSize: '18px',
                                    fontWeight: '800',
                                    marginLeft: '7px',
                                  }}
                                >
                                  0.188
                                </span>
                              </div>
                              <div>
                                <p
                                  style={{
                                    fontSize: '17px',
                                    color: '#8A8A8A',
                                    marginTop: '3px',
                                    marginBottom: '3px',
                                    whiteSpace: 'nowrap',
                                  }}
                                >
                                  15 hours left
                                </p>
                              </div>
                              <button
                                style={{
                                  background: 'white',
                                  border: '0px solid white',
                                }}
                              >
                                <MdFavorite style={{ color: '#6739B7' }} />
                              </button>
                            </div>
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col
                      md={4}
                      sm={6}
                      xs={12}
                      lg={3}
                      xl={3}
                      className="mx-md-0 my-sm-3"
                    >
                      <Card
                        style={{
                          boxShadow: '0px 2px 10px #F8F8F8',

                          borderRadius: '8px',
                        }}
                      >
                        <Card.Img
                          style={{ borderRadius: '8px 8px 0 0' }}
                          variant="top"
                          src="https://www.journaldugeek.com/content/uploads/2022/03/nft-ape.jpg"
                        />
                        <Card.Body>
                          <Card.Title className="cardTitle">
                            <h5 style={{ display: 'inline' }}>
                              <b style={{ fontSize: 'large' }}>Rugby</b>
                            </h5>
                            <div style={{ float: 'right', textAlign: 'right' }}>
                              <p
                                style={{
                                  fontSize: '17px',
                                  color: '#8A8A8A',
                                  marginBottom: '3px',
                                }}
                              >
                                Top Bid
                              </p>
                              <div style={{ marginBottom: '3px' }}>
                                <Image
                                  src="https://coinalpha.app/images/empty-token-solana.png"
                                  height="20"
                                  width="20"
                                ></Image>{' '}
                                <span
                                  style={{
                                    fontSize: '18px',
                                    fontWeight: '800',
                                    marginLeft: '7px',
                                  }}
                                >
                                  0.188
                                </span>
                              </div>
                              <div>
                                <p
                                  style={{
                                    fontSize: '17px',
                                    color: '#8A8A8A',
                                    marginTop: '3px',
                                    marginBottom: '3px',
                                    whiteSpace: 'nowrap',
                                  }}
                                >
                                  15 hours left
                                </p>
                              </div>
                              <button
                                style={{
                                  background: 'white',
                                  border: '0px solid white',
                                }}
                              >
                                <MdFavorite style={{ color: '#6739B7' }} />
                              </button>
                            </div>
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col
                      md={4}
                      sm={6}
                      xs={12}
                      lg={3}
                      xl={3}
                      className="mx-md-0 my-sm-3"
                    >
                      <Card
                        style={{
                          boxShadow: '0px 2px 10px #F8F8F8',

                          borderRadius: '8px',
                        }}
                      >
                        <Card.Img
                          style={{ borderRadius: '8px 8px 0 0' }}
                          variant="top"
                          src="https://www.journaldugeek.com/content/uploads/2022/03/nft-ape.jpg"
                        />
                        <Card.Body>
                          <Card.Title className="cardTitle">
                            <h5 style={{ display: 'inline' }}>
                              <b style={{ fontSize: 'large' }}>Rugby</b>
                            </h5>
                            <div style={{ float: 'right', textAlign: 'right' }}>
                              <p
                                style={{
                                  fontSize: '17px',
                                  color: '#8A8A8A',
                                  marginBottom: '3px',
                                }}
                              >
                                Top Bid
                              </p>
                              <div style={{ marginBottom: '3px' }}>
                                <Image
                                  src="https://coinalpha.app/images/empty-token-solana.png"
                                  height="20"
                                  width="20"
                                ></Image>{' '}
                                <span
                                  style={{
                                    fontSize: '18px',
                                    fontWeight: '800',
                                    marginLeft: '7px',
                                  }}
                                >
                                  0.188
                                </span>
                              </div>
                              <div>
                                <p
                                  style={{
                                    fontSize: '17px',
                                    color: '#8A8A8A',
                                    marginTop: '3px',
                                    marginBottom: '3px',
                                    whiteSpace: 'nowrap',
                                  }}
                                >
                                  15 hours left
                                </p>
                              </div>
                              <button
                                style={{
                                  background: 'white',
                                  border: '0px solid white',
                                }}
                              >
                                <MdFavorite style={{ color: '#6739B7' }} />
                              </button>
                            </div>
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col
                      md={4}
                      sm={6}
                      xs={12}
                      lg={3}
                      xl={3}
                      className="mx-md-0 my-sm-3"
                    >
                      <Card
                        style={{
                          boxShadow: '0px 2px 10px #F8F8F8',
                          borderRadius: '8px',
                        }}
                      >
                        <Card.Img
                          style={{ borderRadius: '8px 8px 0 0' }}
                          variant="top"
                          src="https://www.journaldugeek.com/content/uploads/2022/03/nft-ape.jpg"
                        />
                        <Card.Body>
                          <Card.Title className="cardTitle">
                            <h5 style={{ display: 'inline' }}>
                              <b style={{ fontSize: 'large' }}>Rugby</b>
                            </h5>
                            <div style={{ float: 'right', textAlign: 'right' }}>
                              <p
                                style={{
                                  fontSize: '17px',
                                  color: '#8A8A8A',
                                  marginBottom: '3px',
                                }}
                              >
                                Top Bid
                              </p>
                              <div style={{ marginBottom: '3px' }}>
                                <Image
                                  src="https://coinalpha.app/images/empty-token-solana.png"
                                  height="20"
                                  width="20"
                                ></Image>{' '}
                                <span
                                  style={{
                                    fontSize: '18px',
                                    fontWeight: '800',
                                    marginLeft: '7px',
                                  }}
                                >
                                  0.188
                                </span>
                              </div>
                              <div>
                                <p
                                  style={{
                                    fontSize: '17px',
                                    color: '#8A8A8A',
                                    marginTop: '3px',
                                    marginBottom: '3px',
                                    whiteSpace: 'nowrap',
                                  }}
                                >
                                  15 hours left
                                </p>
                              </div>
                              <button
                                style={{
                                  background: 'white',
                                  border: '0px solid white',
                                }}
                              >
                                <MdFavorite style={{ color: '#6739B7' }} />
                              </button>
                            </div>
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
                <div
                  style={{
                    alignContent: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Button
                    style={{
                      margin: '3%',
                      padding: '0.5% 5%',
                      backgroundColor: '#fff',
                      color: '#6739B7',
                      fontSize: 'large',
                      borderColor: '#6739B7',
                    }}
                  >
                    View Collection
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Container3
