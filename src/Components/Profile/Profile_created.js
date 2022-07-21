import { Link, useNavigate } from 'react-router-dom'
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
import { AiOutlineSearch } from 'react-icons/ai'
import { BsGrid } from 'react-icons/bs'
import { Spinner } from 'react-bootstrap'

import { TbGridDots } from 'react-icons/tb'
import '../Styles/ProfilePageStyles/profileCollected.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
require('bootstrap/dist/css/bootstrap.min.css')
const { REACT_APP_SERVER_URL } = process.env;

let navigate;

const Cards = ({ nftData }) => {
  return (
    <Col xm={4} className="py-3 py-sm-0 col-lg-4 col-md-4 col-12">
      <Card
        className="header-card"
        onClick={() => {
          navigate('/nftDetails', {
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
            <div className="row text-muted" style={{ fontSize: "12px" }

            }>
              {' '}
              <em className="">
                ~ "{nftData.nftDescription?.substring(0, 100)}"<span className="mx-2 text-dark">....read more</span>
              </em>
            </div>



          </Card.Title>
          <Button className="card-checkout-btn mt-3 btn-sm">Checkout NFT</Button>
          <button className="card-goinfo-btn mt-3 text-success font-weight-bold btn-sm">
            {/* <GoInfo /> */}<span calsssName="">+{Math.floor(Math.random() * (30000 - 1)) / 100}%</span>
          </button>
        </Card.Body>
      </Card>
    </Col >
  )
}

export default function Profile_collected() {
  navigate = useNavigate();
  const [nftData, setNftData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [publicKey, setPublicKey] = useState("");
  // const [mynftData, setMyNftData] = useState([]);
  let mynftData = [];

  const fetchNtfs = async () => {
    setisLoading(true);
    const res = await axios.get(
      `${REACT_APP_SERVER_URL}/nft/getNFTs`
    );
    // setNftData(res.data);

    //sorting by new items
    setNftData(res.data.reverse());

    setisLoading(false);
  };
  useEffect(() => {
    fetchNtfs();
    setPublicKey(localStorage.getItem('publicKey'));
  }, []);
  if (nftData) {
    for (const element of nftData) {
      if (element.walletAddress === publicKey)
        mynftData.push(element);
      // setMyNftData(mynftData => [...mynftData, nftData[index]]);
    }
  }

  // console.log('data  ', nftData)
  // console.log('publicKey', publicKey);
  // console.log(nftData[0].walletAddress);

  return (
    <>
      <Container style={{ marginTop: '10px' }}>
        {/* <Container>
          <Form
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              marginTop: '20px',
            }}
          >
            <Row style={{ width: '100%' }}>
              <Col style={{ display: 'flex', alignItems: 'center' }}>
                <Form.Control
                  className="searchInput"
                  style={{
                    height: '51px',
                    borderRadius: '9px',
                    border: '1px solid #3D3D3D',
                  }}
                  placeholder="🔍 Search items, collections and people"
                />
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
        </Container> */}

        {isLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Spinner
              animation="border"
              style={{
                fontSize: "50px",
                color: "#6739B7",
                width: "100px",
                height: "100px",
                margin: "180px auto 40px auto",
              }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          !mynftData ? (
            <div className="mt-4 py-4 text-center">
              <p className="text-muted"><h4><strong>You haven't created any NFT</strong></h4></p>
              <Link to="/admin"><Button className="card-checkout-btn  btn-sm">Create Now</Button></Link>
            </div>
          ) : (
            <Container style={{ marginTop: "20px" }}>
              <Row>
                {mynftData.map((_card, index) => {

                  return (
                    <Cards key={index} nftData={mynftData[index]} />
                  );

                })}

              </Row>
            </Container>
          )
        )}
      </Container>
    </>
  )
}
