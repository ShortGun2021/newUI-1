import React, { useState } from 'react'

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
} from 'react-bootstrap'
import '../Styles/SearchPageStyles/SearchPanel.css'
import { Link } from 'react-router-dom'

function SearchMobileviewnav() {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)

  return (
    <>
      <Navbar bg="light" expand="lg" className="shadow-sm">
        <Container style={{ display: 'flex', flexWrap: 'nowrap' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Navbar.Brand href="#home">
              <img
                style={{ filter: ' invert(1)' }}
                src="https://static.wixstatic.com/media/ccc269_fef35fd3445e47099ff2ba432afd2ead~mv2.png/v1/fill/w_60,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Original_edited_edited_edited.png"
                alt=""
              />
            </Navbar.Brand>
          </Link>

          <div style={{ alignItems: 'flex-end', marginRight: '2px' }}>
            {' '}
            <Form>
              <Link to="/search">
                <FormControl
                  type="search"
                  placeholder="🔍 Search items, collections and people"
                  className="me-2"
                  aria-label="Search"
                  style={{
                    border: '1px solid #3D3D3D',
                    borderRadius: '9px',
                    textDecoration: 'underline white',
                  }}
                />
              </Link>
            </Form>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link style={{ textDecoration: 'none' }} to="/explore">
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
              <Link style={{ textDecoration: 'none' }} to="/collections">
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
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal style={{ height: '715px' }} show={show} onHide={handleClose}>
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
          <Card className="text-center" style={{ marginBottom: '300px' }}>
            <Card.Body>
              <Card.Title>Total Balance</Card.Title>
              <Card.Text>$0.00 USD</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              <div className="d-grid gap-2">
                <Button
                  style={{ backgroundColor: '#6739B7', fontWeight: '700' }}
                >
                  Add funds
                </Button>
              </div>
            </Card.Footer>
          </Card>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default SearchMobileviewnav
