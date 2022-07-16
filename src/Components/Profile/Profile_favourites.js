import axios from 'axios'
import { useEffect, useState } from 'react'
import { Card, Button, Container, Col, Row, Image } from 'react-bootstrap'
import { MdFavorite } from 'react-icons/md'
import { Spinner } from 'react-bootstrap'

require('bootstrap/dist/css/bootstrap.min.css')
const cardDetails = [
  {
    image: 'https://www.journaldugeek.com/content/uploads/2022/03/nft-ape.jpg',
    name: 'Rugby',
    price: 0.188,
    timeLeft: 15,
  },
  {
    image: 'https://www.journaldugeek.com/content/uploads/2022/03/nft-ape.jpg',
    name: 'Rugby',
    price: 0.188,
    timeLeft: 15,
  },
  {
    image: 'https://www.journaldugeek.com/content/uploads/2022/03/nft-ape.jpg',
    name: 'Rugby',
    price: 0.188,
    timeLeft: 15,
  },
  {
    image: 'https://www.journaldugeek.com/content/uploads/2022/03/nft-ape.jpg',
    name: 'Rugby',
    price: 0.188,
    timeLeft: 15,
  },
]

const RenderCards = ({ nftData, card }) => {
  return (
    <Col md={4} sm={6} xs={12} lg={3} xl={3} className=" mx-md-0 my-sm-3">
      {nftData ? (
        <Card
          style={{
            boxShadow: '0px 2px 10px #F8F8F8',

            borderRadius: '8px',
          }}
        >
          <Card.Img
            style={{ borderRadius: '8px 8px 0 0' }}
            variant="top"
            src={`data:image/png;base64,${card.nftImgBase64}`}
          />
          <Card.Body>
            <Card.Title>
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
      ) : (
        <div>none</div>
      )}
    </Col>
  )
}

function Profile_favourites() {
  const [nftData, setNftData] = useState([])
  const [isLoading, setisLoading] = useState(false)

  const fetchNtfs = async () => {
    setisLoading(true)

    try {
      const res = await axios.get(
        'https://shortgun-backend.herokuapp.com/nft/getNFTs'
      )
      setNftData(res.data)
      setisLoading(false)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchNtfs()
  }, [])

  return (
    <>
      <Container style={{ marginTop: '10px' }}>
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
                margin: '50px auto 40px auto',
              }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <Container>
            <Row>
              {nftData.map((card, index) => {
                return <RenderCards key={index} card={card} nftData={nftData} />
              })}
            </Row>
          </Container>
        )}
      </Container>
    </>
  )
}

export default Profile_favourites
