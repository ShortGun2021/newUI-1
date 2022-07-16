import axios from 'axios'
import React, { useEffect, useState } from 'react'
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
} from 'react-bootstrap'
import NFTNavbar from '../Homepage/NFTNavbar'
import '../Styles/ExplorePageStyles/explore.css'

const cardData = [
  {
    coverimg:
      'https://i1.wp.com/cdn.techgyd.com/35-Most-Amazing-Facebook-Cover-Photos-HD-16.jpg?resize=722%2C266',
    profileimg:
      'https://www.pngitem.com/pimgs/m/333-3338140_boy-winking-boy-profile-picture-of-cartoon-hd.png',
    collectionName: 'collection name',
    collecterName: 'Collecter name',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
  },
  {
    coverimg:
      'https://i1.wp.com/cdn.techgyd.com/35-Most-Amazing-Facebook-Cover-Photos-HD-16.jpg?resize=722%2C266',
    profileimg:
      'https://www.pngitem.com/pimgs/m/333-3338140_boy-winking-boy-profile-picture-of-cartoon-hd.png',
    collectionName: 'collection name',
    collecterName: 'Collecter name',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
  },
  {
    coverimg:
      'https://i1.wp.com/cdn.techgyd.com/35-Most-Amazing-Facebook-Cover-Photos-HD-16.jpg?resize=722%2C266',
    profileimg:
      'https://www.pngitem.com/pimgs/m/333-3338140_boy-winking-boy-profile-picture-of-cartoon-hd.png',
    collectionName: 'collection name',
    collecterName: 'Collecter name',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
  },
  {
    coverimg:
      'https://i1.wp.com/cdn.techgyd.com/35-Most-Amazing-Facebook-Cover-Photos-HD-16.jpg?resize=722%2C266',
    profileimg:
      'https://www.pngitem.com/pimgs/m/333-3338140_boy-winking-boy-profile-picture-of-cartoon-hd.png',
    collectionName: 'collection name',
    collecterName: 'Collecter name',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been',
  },
]

const RenderCards = ({ nftData, card }) => {
  return (
    <Col
      md={6}
      sm={12}
      xs={12}
      lg={4}
      xl={4}
      className="mx-md-0 my-sm-3 my-xs-5"
    >
      {nftData ? (
        <Card
          style={{
            boxShadow: '0px 2px 10px #F8F8F8',
            borderRadius: '8px',
          }}
          className="card"
        >
          <Card.Img
            style={{
              borderRadius: '8px 8px 0 0',
              // width: '440px',
              height: '150px',
            }}
            variant="top"
            src={`data:image/png;base64,${card.nftImgBase64}`}
          />
          <Image
            className="profilepic"
            src="https://www.pngitem.com/pimgs/m/333-3338140_boy-winking-boy-profile-picture-of-cartoon-hd.png"
          />
          <Card.Body style={{ marginTop: '50px', textAlign: 'center' }}>
            <Card.Title>
              <h5
                style={{
                  fontSize: '17px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                }}
              >
                {card.nftCollectionName}
              </h5>
              <p style={{ fontSize: '15px' }}>
                by <span style={{ color: '#6739B7' }}>Collecter name</span>
              </p>
              <p
                style={{
                  width: '85%',
                  fontSize: '16px',
                  fontWeight: '600',
                  lineHeight: '22.4px',
                  justifyContent: 'center',
                  margin: '0 auto',
                }}
              >
                {card.nftDescription}
              </p>
            </Card.Title>
          </Card.Body>
        </Card>
      ) : (
        <div>none</div>
      )}
    </Col>
  )
}

function Explore() {
  const [Btnname, setBtnname] = useState('All Categories')
  const [nftData, setNftData] = useState([])
  const [isLoading, setisLoading] = useState(false)

  const fetchNtfs = async () => {
    setisLoading(true)
    const res = await axios.get(
      'https://shortgun-backend.herokuapp.com/nft/getNFTs'
    )
    setNftData(res.data)

    setisLoading(false)
  }
  useEffect(() => {
    fetchNtfs()
  }, [])

  console.log('data  ', nftData)
  return (
    <>
      <NFTNavbar />

      <div
        style={{
          width: '75%',
          margin: '10px auto 0 auto',
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        <div
          className="d-flex justify-content-center mt-5"
          style={{ textAlign: 'center' }}
        >
          <h2
            style={{
              fontSize: '35px',
              fontWeight: '700',
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
                width: '100%',
                height: '50px',
                backgroundColor: '#F0F0F0',
                borderRadius: '10px',
                marginTop: '30px',
              }}
            >
              <Button
                className="explorebtns shadow-none"
                onClick={() => setBtnname('All Categories')}
                style={
                  Btnname === 'All Categories'
                    ? { color: '#6739B7' }
                    : { color: 'rgba(0, 0, 0, 0.3)' }
                }
                variant="link"
              >
                All Categories
              </Button>
              <Button
                className="explorebtns shadow-none"
                onClick={() => setBtnname('Arts')}
                style={
                  Btnname === 'Arts'
                    ? { color: '#6739B7' }
                    : { color: 'rgba(0, 0, 0, 0.3)' }
                }
                variant="link"
              >
                Arts
              </Button>
              <Button
                className="explorebtns shadow-none"
                onClick={() => setBtnname('Sports')}
                style={
                  Btnname === 'Sports'
                    ? { color: '#6739B7' }
                    : { color: 'rgba(0, 0, 0, 0.3)' }
                }
                variant="link"
              >
                Sports
              </Button>
              <Button
                className="explorebtns shadow-none"
                onClick={() => setBtnname('Utilities')}
                style={
                  Btnname === 'Utilities'
                    ? { color: '#6739B7' }
                    : { color: 'rgba(0, 0, 0, 0.3)' }
                }
                variant="link"
              >
                Utilities
              </Button>

              <Button
                className="explorebtns shadow-none"
                onClick={() => setBtnname('Collectibles')}
                style={
                  Btnname === 'Collectibles'
                    ? { color: '#6739B7' }
                    : { color: 'rgba(0, 0, 0, 0.3)' }
                }
                variant="link"
              >
                Collectibles
              </Button>

              <Button
                className="explorebtns shadow-none"
                onClick={() => setBtnname('Music')}
                style={
                  Btnname === 'Music'
                    ? { color: '#6739B7' }
                    : { color: 'rgba(0, 0, 0, 0.3)' }
                }
                variant="link"
              >
                Music
              </Button>

              <Button
                className="explorebtns shadow-none"
                onClick={() => setBtnname('Trading Cards')}
                style={
                  Btnname === 'Trading Cards'
                    ? { color: '#6739B7' }
                    : { color: 'rgba(0, 0, 0, 0.3)' }
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
              style={{ marginTop: '20px' }}
            >
              <Form.Select
                className="formSelect shadow-none"
                style={{
                  height: '51px',
                  width: '50%',
                  border: '1px solid white',
                  borderRadius: '9px',
                  display: 'inline-block',
                  margin: '0 auto',
                  color: '#6739B7',
                  textAlign: 'center',
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
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Spinner
                animation="border"
                style={{
                  fontSize: '50px',
                  color: '#6739B7',
                  width: '100px',
                  height: '100px',
                  margin: '180px auto 40px auto',
                }}
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <Container style={{ marginTop: '20px' }}>
              <Row>
                {nftData.map((card, index) => {
                  return (
                    <RenderCards key={index} card={card} nftData={nftData} />
                  )
                })}
              </Row>
            </Container>
          )}
        </div>
      </div>
    </>
  )
}

export default Explore
