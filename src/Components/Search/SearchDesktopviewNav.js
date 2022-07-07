import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
// import {
//   Button,
//   Container,
//   Form,
//   FormControl,
//   Nav,
//   Navbar,
// } from 'react-bootstrap'
import {
    Button,
    Navbar,
    Container,
    Nav,
    Form,
    FormControl,
    Dropdown,
    Card,
    Modal,
    ListGroup,
    Image,
  } from "react-bootstrap";
import { Link } from "react-router-dom";

import { MdOutlineAccountBalanceWallet, MdPerson } from 'react-icons/md'
import ConnectWallet from "../PhantomWallet/ConnectWallet.tsx";
import ('../Styles/HomePageStyles/NFTNavbar.css')

let navigate;

const openWallet = ()=>{
  navigate('/wallet');
}

function DesktopviewNav() {
    const [show, setShow] = useState(false);
  navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
      <>
    <Navbar className="nft-navbar shadow-sm" expand="md" style={{backgroundColor:"white"}}>
      <Container
        fluid
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '85%',
          flexWrap: 'nowrap',
        }}
      >
        {/* <Navbar.Brand style={{ fontWeight: 500 }} href="#"> */}
        <Link to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand href="#">
              <img style={{filter: " invert(1)"}} src="https://static.wixstatic.com/media/ccc269_fef35fd3445e47099ff2ba432afd2ead~mv2.png/v1/fill/w_60,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Original_edited_edited_edited.png" alt="" />
              <span style={{fontWeight:"500", fontStyle:"Ubuntu", fontSize:"22px", margin:"5%"}}>SHORTGUN</span>
            </Navbar.Brand>
          </Link>
          {/* LOGO */}
        {/* </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'right',
          }}
        >
          <div style={{ display: 'inline-block' }}>
            <Navbar.Collapse id="navbarScroll">
              <Form className="navItems nft-nav-form">
              <Link to="/search">

                <FormControl
                  type="search"
                  placeholder="🔍 Search items, collections and people"
                  className="me-2 nft-nav-formcontrol"
                  aria-label="Search"
                  style={{
                    width: '330px',
                    border: '1px solid #3D3D3D',
                    borderRadius: '9px',
                    textDecoration:"underline white"
                  }}
                />
                </Link>
              </Form>
              <Nav
                className="me-auto my-2 my-lg-0 navItems nft-nav"
                navbarScroll
              >
              <Link style={{ textDecoration: "none" }} to="/explore">
                <Nav.Link
                  style={{
                    color: '#2B2B2B',
                    fontWeight: 500,
                    fontSize: '18px',
                  }}
                  className="navItems nft-navlink"
                  href="#action1"
                >
                  Explore
                </Nav.Link>
</Link>
                <Nav.Link
                  style={{
                    color: '#2B2B2B',
                    fontWeight: 500,
                    fontSize: '18px',
                  }}
                  className="navItems nft-navlink"
                  href="#action2"
                >
                  Create
                </Nav.Link>
              <Link style={{ textDecoration: "none" }} to="/collections">
                  
                <Nav.Link
                  style={{
                    color: '#2B2B2B',
                    fontWeight: 500,
                    fontSize: '18px',
                  }}
                  className="navItems nft-navlink"
                  href="#action3"
                >
                  Favourites
                </Nav.Link>
                </Link>
              </Nav>
            <Link to="/profile">
                
              <Button className="navItems" variant="light">
                <MdPerson style={{ fontSize: '25px' }} />
              </Button>
              </Link>
              <Button className="navItems" variant="light" onClick={handleShow}>
                <MdOutlineAccountBalanceWallet style={{ fontSize: '25px' }} />
              </Button>
            </Navbar.Collapse>
          </div>
        </div>
      </Container>
    </Navbar>

<Modal style={{ height: "715px" }} show={show} onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title className="show-grid">
    <ListGroup horizontal>
      <ListGroup.Item>
        <Image
          rounded="true"
          src="https://avatars.githubusercontent.com/u/55938092?v=4"
          height="35"
          width="35"
        ></Image>
      </ListGroup.Item>

      <ListGroup.Item>
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Favourites
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Action2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Action3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ListGroup.Item>

      <ListGroup.Item>
        <p>0x12a4v5fh</p>
      </ListGroup.Item>
    </ListGroup>
  </Modal.Title>
</Modal.Header>
<Modal.Body>
  <Card className="text-center" style={{ marginBottom: "300px" }}>
    <Card.Body>
      <Card.Title>Total Balance</Card.Title>
      <Card.Text>$0.00 USD</Card.Text>
    </Card.Body>
    <Card.Footer className="text-muted">
      <div className="d-grid gap-2">
        <Button
          style={{ backgroundColor: "#6739B7", fontWeight: "700" }}
          onClick={openWallet}
        >
          Add funds
        </Button>
      </div>
      <ConnectWallet/>
    </Card.Footer>
  </Card>
</Modal.Body>
</Modal>
</>
  )
}

export default DesktopviewNav