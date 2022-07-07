import React, {useState} from "react";
import {
  Tabs,
  Tab,
  InputGroup,
  Button,
  DropdownButton,
  Dropdown,
  ButtonGroup, Form, Container, Row, Col
} from "react-bootstrap";
import { BsGrid3X3GapFill, BsGrid3X3Gap, BsGrid } from "react-icons/bs";
import { TbGridDots } from 'react-icons/tb'
import ("../Styles/SearchPageStyles/SearchPanel.css");

require("bootstrap/dist/css/bootstrap.min.css");

const SearchPanel = () => {
  const [Btnname, setBtnname] = useState("SearchPanel Categories");
  return (
    <>

<Container>
              <Form
                style={{
                  height: '120px',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Row style={{ width: '100%' }}>
                  <Col style={{ display: 'flex' }}>
                    
                  <div>
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
              Collections
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
              NFTs
            </Button>
          </ButtonGroup>
        </div>
                  </Col>
                  <Col>
                    <div
                      className="sortBtns"
                      style={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                      }}
                    >
                      <Form.Select
                        style={{
                          height: '51px',
                          width: '271px',
                          border: '1px solid #3D3D3D',
                          borderRadius: '9px',
                          display: 'inline-block',
                        }}
                        aria-label="Default select example"
                      >
                        <option>Sort by</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>

                      <ButtonGroup
                        style={{
                          display: 'inline-block',
                          marginLeft: '10px',
                          display: 'flex',
                          flexWrap: 'nowrap',
                        }}
                      >
                        <Button
                          variant="light"
                          style={{
                            border: '1px solid #3D3D3D',
                            borderRadius: '9px 0 0 9px',
                            height: '51px',
                            width: '50px',
                          }}
                        >
                          {' '}
                          <BsGrid />{' '}
                        </Button>
                        <Button
                          variant="light"
                          style={{
                            border: '1px solid #3D3D3D',
                            borderRadius: '0 9px 9px 0',
                            height: '51px',
                            width: '50px',
                          }}
                        >
                          {' '}
                          <TbGridDots />{' '}
                        </Button>
                      </ButtonGroup>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Container>


      <div style={{
          width: "75%",
          margin: "10px auto 0 auto",
          fontFamily: "Poppins, sans-serif",
        }}>
      
      </div>
    </>
  );
};

export default SearchPanel;
