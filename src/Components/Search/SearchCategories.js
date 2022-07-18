import { useNavigate } from "react-router-dom"
import { Card, Button, Container, Col, Row, Image } from 'react-bootstrap'
import { MdFavorite } from 'react-icons/md'
import SearchPanel from './SearchPanel'
import('../Styles/HomePageStyles/Categories.css')
require('bootstrap/dist/css/bootstrap.min.css')

const categoryDetails = [
  {
    image: "https://www.journaldugeek.com/content/uploads/2022/03/nft-ape.jpg",
    token_image: "https://coinalpha.app/images/empty-token-solana.png",
    token_amount: "0.188",
    ending_in: "2D 10h 4m",
    nft_name: "Rugby",
  },
  {
    image: "https://www.journaldugeek.com/content/uploads/2022/03/nft-ape.jpg",
    token_image: "https://coinalpha.app/images/empty-token-solana.png",
    token_amount: "0.188",
    ending_in: "2D 10h 4m",
    nft_name: "Rugby",
  },
  {
    image: "https://www.journaldugeek.com/content/uploads/2022/03/nft-ape.jpg",
    token_image: "https://coinalpha.app/images/empty-token-solana.png",
    token_amount: "0.188",
    ending_in: "2D 10h 4m",
    nft_name: "Rugby",
  },
];

let navigate;

const handleClick = () => {
  navigate('/nftDetails')
}

const renderCategories = (card, index) => {

  return (
    <Col xm={4} className="py-3 py-sm-0 col-lg-4 col-md-4 col-12" key={index}>
      <Card className="category-card" onClick={handleClick}>
        <Card.Img className="category-img" variant="top" src={card.image} />
        <Card.Body>
          <Card.Title className="category-card-title">
            <h5>
              <b>{card.nft_name}</b>
            </h5>
            <div className="top-bid">
              <p>Top Bid</p>
              <div className="solana-ammount">
                <Image src={card.token_image} height="20" width="20"></Image>{" "}
                <span>{card.token_amount}</span>
              </div>
            </div>
            <div className="sale-end">
              <p id="ends">Sale Ends in</p>
              <p id="time-left">{card.ending_in}</p>
            </div>
          </Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};


export default function SearchCategories() {
  navigate = useNavigate();
  return (
    <>
      <SearchPanel />
      <Container>
        <Container>
          <Row className="categories-row">
            {categoryDetails.map(renderCategories)}
          </Row>

          <Row className="categories-row">
            {categoryDetails.map(renderCategories)}
          </Row>
        </Container>
      </Container>

    </>
  )
}
