import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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

let navigate;
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

        <Card
          className="header-card"
          onClick={() => {
            navigate('/nft-card', {
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
              <div className="row text-muted" style={{ fontSize: "14px" }

              }>
                {' '}
                <em className="">
                  ~ "{nftData.nftDescription?.substring(0, 100)}"<span className="mx-2 text-dark">....read more</span>
                </em>
              </div>



            </Card.Title>
            <Button className="card-checkout-btn mt-3">Checkout NFT</Button>
            <button className="card-goinfo-btn mt-3 text-success font-weight-bold">
              {/* <GoInfo /> */}<span calsssName="">+{Math.floor(Math.random() * (30000 - 1)) / 100}%</span>
            </button>
          </Card.Body>
        </Card>
      </Col>
    )
  }

  const MobileCarousel = ({ nftData }) => {
    return (
      //old code

      // <Carousel.Item>
      //   <Container>
      //     <Container>
      //       <Card className="header-card" style={{ margin: '12%' }}>
      //         <Card.Img variant="top" src={nftData.nftImageUrl} />
      //         <Card.Body>
      //           <Card.Title>
      //             <h5>
      //               <Image
      //                 rounded="true"
      //                 src={nftData.nftImageUrl}
      //                 height="35"
      //                 width="35"
      //               ></Image>{' '}
      //               <span className="card-nft-name">{nftData.nftName}</span>
      //               <div className="row">
      //                 {' '}
      //                 <span className="card-owner-name">Owner Name</span>
      //               </div>
      //             </h5>
      //             <button className="card-goinfo-btn">
      //               <GoInfo />
      //             </button>
      //           </Card.Title>
      //           <Button className="card-checkout-btn">Checkout NFT</Button>
      //         </Card.Body>
      //       </Card>

      //     </Container>
      //   </Container>
      // </Carousel.Item>

      //new codes
      <Col xm={4} className="py-3 py-sm-0">

        <Card
          className="header-card"
          onClick={() => {
            navigate('/nft-card', {
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
              <div className="row text-muted" style={{ fontSize: "14px" }

              }>
                {' '}
                <em className="">
                  ~ "{nftData.nftDescription?.substring(0, 100)}"<span className="mx-2 text-dark">....read more</span>
                </em>
              </div>



            </Card.Title>
            <Button className="card-checkout-btn mt-3">Checkout NFT</Button>
            <button className="card-goinfo-btn mt-3 text-success font-weight-bold">
              {/* <GoInfo /> */}<span calsssName="">+{Math.floor(Math.random() * (30000 - 1)) / 100}%</span>
            </button>
          </Card.Body>
        </Card>
      </Col>
    )
  }
  navigate = useNavigate();
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
          <Carousel.Item>
            <Container>
              <Container>
                <Row className="carousel-row-cards">
                  {RecommendCard.map((element, idx) => {
                    return <MobileCarousel key={idx} nftData={element} />
                  })}
                </Row>
              </Container>
            </Container>
          </Carousel.Item>
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
