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
import { TbGridDots } from 'react-icons/tb'
import '../Styles/ProfilePageStyles/profileCollected.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
require('bootstrap/dist/css/bootstrap.min.css')
const { REACT_APP_SERVER_URL } = process.env;

const cardDetails = [
  {
    image: "https://www.journaldugeek.com/content/uploads/2022/03/nft-ape.jpg",
    name: "Rugby",
    price: 0.188,
    timeLeft: 15,
  },
  {
    image: "https://www.journaldugeek.com/content/uploads/2022/03/nft-ape.jpg",
    name: "Rugby",
    price: 0.188,
    timeLeft: 15,
  },
  {
    image: "https://www.journaldugeek.com/content/uploads/2022/03/nft-ape.jpg",
    name: "Rugby",
    price: 0.188,
    timeLeft: 15,
  },
  {
    image: "https://www.journaldugeek.com/content/uploads/2022/03/nft-ape.jpg",
    name: "Rugby",
    price: 0.188,
    timeLeft: 15,
  },
];
const RenderCards = ({ card, nftData }) => {
  return (
    <Col md={4} sm={6} xs={12} lg={3} xl={3} className="mx-md-0 my-sm-3">
      {nftData ? (
        <Card
          style={{
            boxShadow: "0px 2px 10px #F8F8F8",

            borderRadius: "8px",
          }}
        >
          <Card.Img
            style={{ borderRadius: "8px 8px 0 0" }}
            variant="top"
            src={`data:image/png;base64,${card.nftImgBase64}`}
          />
          <Card.Body>
            <Card.Title className="cardTitle">
              <h5 style={{ display: "inline" }}>
                <b style={{ fontSize: "large" }}>Rugby</b>
              </h5>
              <div
                style={{
                  float: "right",
                  textAlign: "right",
                  alignItems: "flex-end",
                }}
              >
                <p
                  style={{
                    fontSize: "17px",
                    color: "#8A8A8A",
                    marginBottom: "3px",
                  }}
                >
                  Top Bid
                </p>
                <div style={{ marginBottom: "3px" }}>
                  <Image
                    src="https://coinalpha.app/images/empty-token-solana.png"
                    height="20"
                    width="20"
                  ></Image>{" "}
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      marginLeft: "7px",
                    }}
                  >
                    0.188
                  </span>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "17px",
                      color: "#8A8A8A",
                      marginTop: "3px",
                      marginBottom: "3px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    15 hours left
                  </p>
                </div>
                <button
                  style={{
                    background: "white",
                    border: "0px solid white",
                  }}
                >
                  <MdFavorite style={{ color: "#6739B7" }} />
                </button>
              </div>
            </Card.Title>
          </Card.Body>
        </Card>
      ) : (
        <div>none</div>
      )}
    </Col>
  );
};

export default function CollectionCards({ setloadings, loadingCount }) {
  const [nftData, setNftData] = useState([]);
  const fetchNfts = async () => {
    try {
      const res = await axios
        .get(`${REACT_APP_SERVER_URL}/nft/getNFTs`)
      setNftData(res.data)
      loadingCount = loadingCount + 1
      setloadings(loadingCount)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchNfts();
  }, []);

  // console.log('data  ', nftData)

  return (
    <>
      <Container style={{ marginTop: "10px" }}>
        <Container>
          {/* <Form
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              marginTop: '20px',
            }}
          >
            <Row style={{ width: '100%' }}>
              <Col style={{ display: 'flex' }}>
                <Form.Control
                  className="searchInput"
                  style={{
                    height: '51px',
                    width: '420px',
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
          </Form> */}
        </Container>
        <Container>
          <Row>
            {nftData.map((card, index) => {
              return <RenderCards key={index} card={card} nftData={nftData} />;
            })}
          </Row>
        </Container>
      </Container>
    </>
  );
}
