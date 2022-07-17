import { useState } from 'react'
import {
  Carousel,
  Card,
  Container,
  Image,
  Button,
  Col,
  Row,
} from 'react-bootstrap'
import { GoInfo } from 'react-icons/go'
import('../Styles/HomePageStyles/NFTCarousel.css')
require('bootstrap/dist/css/bootstrap.min.css')

function ControlledCarousel({ nftData }) {
  const [index, setIndex] = useState(0)
  const [index2, setIndex2] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  const handleSelect2 = (selectedIndex2, e) => {
    setIndex2(selectedIndex2)
  }

  const DesktopCarousel = ({ nftData }) => {
    return (
      <Col xm={4} className="py-3 py-sm-0">
        <Card className="header-card">
          <Card.Img variant="top" src={nftData.nftImageUrl} />
          <Card.Body>
            <Card.Title>
              <h5>
                <Image
                  rounded="true"
                  src={nftData.nftImageUrl}
                  height="35"
                  width="35"
                ></Image>{' '}
                <span className="card-nft-name">{nftData.nftName}</span>
                <div className="row">
                  {' '}
                  <span className="card-owner-name">Owner Name</span>
                </div>
              </h5>
              <button className="card-goinfo-btn">
                <GoInfo />
              </button>
            </Card.Title>
            <Button className="card-checkout-btn">Checkout NFT</Button>
          </Card.Body>
        </Card>
      </Col>
    )
  }

  const MobileCarousel = ({ nftData }) => {
    return (
      <Carousel.Item>
        <Container>
          <Container>
            <Card className="header-card" style={{ margin: '12%' }}>
              <Card.Img variant="top" src={nftData.nftImageUrl} />
              <Card.Body>
                <Card.Title>
                  <h5>
                    <Image
                      rounded="true"
                      src={nftData.nftImageUrl}
                      height="35"
                      width="35"
                    ></Image>{' '}
                    <span className="card-nft-name">{nftData.nftName}</span>
                    <div className="row">
                      {' '}
                      <span className="card-owner-name">Owner Name</span>
                    </div>
                  </h5>
                  <button className="card-goinfo-btn">
                    <GoInfo />
                  </button>
                </Card.Title>
                <Button className="card-checkout-btn">Checkout NFT</Button>
              </Card.Body>
            </Card>
          </Container>
        </Container>
      </Carousel.Item>
    )
  }

  const RecommendCard = nftData.slice(nftData.length - 9).reverse()
  const DesktopItems = []
  for (let i = 0; i < RecommendCard.length; i += 3) {
    DesktopItems.push(RecommendCard.slice(i, i + 3))
  }

  return (
    <>
      <h1 className="text-center carousel-header">Trending NFTs</h1>
      <div className="mobile-carousel">
        <Carousel variant="dark" activeIndex={index2} onSelect={handleSelect2}>
          {RecommendCard.map((element, idx) => {
            return <MobileCarousel key={idx} nftData={element} />
          })}
        </Carousel>
      </div>
      <div className="desktop-carousel">
        <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
          {RecommendCard &&
            DesktopItems.map((row, idx) => {
              return (
                <Carousel.Item>
                  <Container>
                    <Container>
                      <Row className="carousel-row-cards">
                        {RecommendCard &&
                          DesktopItems[idx].map((element, index) => {
                            return (
                              <DesktopCarousel key={index} nftData={element} />
                            )
                          })}
                      </Row>
                    </Container>
                  </Container>
                </Carousel.Item>
              )
            })}
        </Carousel>
      </div>
    </>
  )
}

export default ControlledCarousel
