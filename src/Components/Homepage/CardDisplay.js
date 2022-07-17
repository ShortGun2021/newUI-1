import { useNavigate } from 'react-router-dom'
import { Card, Button, Container, Col, Row, Image } from 'react-bootstrap'
import '../Styles/HomePageStyles/CardDisplay.css'
import { GoInfo } from 'react-icons/go'
import { Recommend } from '@mui/icons-material'

require('bootstrap/dist/css/bootstrap.min.css')

let navigate

const Cards = ({ nftData }) => {
  // console.log(nftData);
  return (
    <Col xm={4} className="py-3 py-sm-0 col-lg-4 col-md-4 col-12">
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
    </Col >
  )
}

export default function HeaderCard({ setloadings, loadingCount, nftData }) {
  const RecommendCard = nftData.slice(nftData.length - 6).reverse()
  console.log(RecommendCard)
  navigate = useNavigate()
  return (
    <>
      <Container>
        <Container>
          <Row>
            {
              // const RecommendCard = nftData.slice(nftData.length - 6).reverse()
              RecommendCard && RecommendCard.map((element, index) => {
                return (<Cards key={index} nftData={element} />)
              })

            }
            {/* {nftData && (() => {
              let dataLength = nftData.length
              dataLength > 6 ? dataLength = 6 : dataLength = dataLength;
              console.log(dataLength)

              let arr = [];
              let checkCard = [];
              for (let i = 0; checkCard.length < dataLength; i++) {
                let randomIdx = Math.floor(Math.random() * (nftData.length - 1));
                if (!checkCard.includes(randomIdx)) {
                  checkCard.push(randomIdx)
                  arr.push(<Cards key={i} nftData={nftData[randomIdx]} />);
                }
              }
              return arr;
            })()} */}
          </Row>
        </Container>
      </Container>
    </>
  )
}
