import { useState } from "react";
import {
  Carousel,
  Card,
  Container,
  Image,
  Button,
  Col,
  Row,
} from "react-bootstrap";
import { GoInfo } from "react-icons/go";
import ("../Styles/HomePageStyles/NFTCarousel.css");
require("bootstrap/dist/css/bootstrap.min.css");
function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);
  
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const handleSelect2 = (selectedIndex2, e) => {
    setIndex2(selectedIndex2);
  };

  return (
    <>
      <h1 className="text-center carousel-header">Trending NFTs</h1>
      <div className="mobile-carousel">
      <Carousel variant="dark" activeIndex={index2} onSelect={handleSelect2}>
        <Carousel.Item>
          <Container>
            <Container>
            <Card className="header-card" style={{margin:"12%"}}>
                    <Card.Img
                      variant="top"
                      src="https://www.journaldugeek.com/content/uploads/2022/03/nft-ape.jpg"
                    />
                    <Card.Body>
                      <Card.Title>
                        <h5>
                          <Image
                            rounded="true"
                            src="https://avatars.githubusercontent.com/u/55938092?v=4"
                            height="35"
                            width="35"
                          ></Image>{" "}
                          <span className="card-nft-name">Nft Name</span>
                          <div className="row">
                            {" "}
                            <span className="card-owner-name">Owner Name</span>
                          </div>
                        </h5>
                        <button className="card-goinfo-btn">
                          <GoInfo />
                        </button>
                      </Card.Title>
                      <Button className="card-checkout-btn">
                        Checkout NFT
                      </Button>
                    </Card.Body>
                  </Card>
            
          </Container>
            </Container>
            </Carousel.Item>

            <Carousel.Item>
          <Container>
            <Container>
            <Card className="header-card" style={{margin:"12%"}}>
                    <Card.Img
                      variant="top"
                      src="https://cdn.pixabay.com/photo/2021/09/07/18/10/cat-6604565_960_720.jpg"
                    />
                    <Card.Body>
                      <Card.Title>
                        <h5>
                          <Image
                            rounded="true"
                            src="https://avatars.githubusercontent.com/u/55938092?v=4"
                            height="35"
                            width="35"
                          ></Image>{" "}
                          <span className="card-nft-name">Nft Name</span>
                          <div className="row">
                            {" "}
                            <span className="card-owner-name">Owner Name</span>
                          </div>
                        </h5>
                        <button className="card-goinfo-btn">
                          <GoInfo />
                        </button>
                      </Card.Title>
                      <Button className="card-checkout-btn">
                        Checkout NFT
                      </Button>
                    </Card.Body>
                  </Card>
            
          </Container>
            </Container>
            </Carousel.Item>


            <Carousel.Item>
          <Container>
            <Container>
            <Card className="header-card" style={{margin:"12%"}}>
                    <Card.Img
                      variant="top"
                      src="https://cdn.pixabay.com/photo/2020/03/21/19/27/sea-4955005_960_720.jpg"
                    />
                    <Card.Body>
                      <Card.Title>
                        <h5>
                          <Image
                            rounded="true"
                            src="https://avatars.githubusercontent.com/u/55938092?v=4"
                            height="35"
                            width="35"
                          ></Image>{" "}
                          <span className="card-nft-name">Nft Name</span>
                          <div className="row">
                            {" "}
                            <span className="card-owner-name">Owner Name</span>
                          </div>
                        </h5>
                        <button className="card-goinfo-btn">
                          <GoInfo />
                        </button>
                      </Card.Title>
                      <Button className="card-checkout-btn">
                        Checkout NFT
                      </Button>
                    </Card.Body>
                  </Card>
            
          </Container>
            </Container>
            </Carousel.Item>
            </Carousel>
      </div>
      <div className="desktop-carousel">
      <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Container>
            <Container>
              <Row className="carousel-row-cards">
                <Col xm={4} className="py-3 py-sm-0">
                  <Card className="header-card">
                    <Card.Img
                      variant="top"
                      src="https://www.journaldugeek.com/content/uploads/2022/03/nft-ape.jpg"
                    />
                    <Card.Body>
                      <Card.Title>
                        <h5>
                          <Image
                            rounded="true"
                            src="https://avatars.githubusercontent.com/u/55938092?v=4"
                            height="35"
                            width="35"
                          ></Image>{" "}
                          <span className="card-nft-name">Nft Name</span>
                          <div className="row">
                            {" "}
                            <span className="card-owner-name">Owner Name</span>
                          </div>
                        </h5>
                        <button className="card-goinfo-btn">
                          <GoInfo />
                        </button>
                      </Card.Title>
                      <Button className="card-checkout-btn">
                        Checkout NFT
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xm={4} className="py-3 py-sm-0">
                  <Card className="header-card">
                    <Card.Img
                      variant="top"
                      src="https://www.journaldugeek.com/content/uploads/2022/03/nft-ape.jpg"
                    />
                    <Card.Body>
                      <Card.Title>
                        <h5>
                          <Image
                            rounded="true"
                            src="https://avatars.githubusercontent.com/u/55938092?v=4"
                            height="35"
                            width="35"
                          ></Image>{" "}
                          <span className="card-nft-name">Nft Name</span>
                          <div className="row">
                            {" "}
                            <span className="card-owner-name">Owner Name</span>
                          </div>
                        </h5>
                        <button className="card-goinfo-btn">
                          <GoInfo />
                        </button>
                      </Card.Title>
                      <Button className="card-checkout-btn">
                        Checkout NFT
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xm={4} className="py-3 py-sm-0">
                  <Card className="header-card">
                    <Card.Img
                      variant="top"
                      src="https://www.journaldugeek.com/content/uploads/2022/03/nft-ape.jpg"
                    />
                    <Card.Body>
                      <Card.Title>
                        <h5>
                          <Image
                            rounded="true"
                            src="https://avatars.githubusercontent.com/u/55938092?v=4"
                            height="35"
                            width="35"
                          ></Image>{" "}
                          <span className="card-nft-name">Nft Name</span>
                          <div className="row">
                            {" "}
                            <span className="card-owner-name">Owner Name</span>
                          </div>
                        </h5>
                        <button className="card-goinfo-btn">
                          <GoInfo />
                        </button>
                      </Card.Title>
                      <Button className="card-checkout-btn">
                        Checkout NFT
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Container>
              <Row className="carousel-row-cards">
                <Col xm={4} className="py-3 py-sm-0">
                  <Card className="header-card">
                    <Card.Img
                      variant="top"
                      src="https://cdn.pixabay.com/photo/2021/09/07/18/10/cat-6604565_960_720.jpg"
                    />
                    <Card.Body>
                      <Card.Title>
                        <h5>
                          <Image
                            rounded="true"
                            src="https://avatars.githubusercontent.com/u/55938092?v=4"
                            height="35"
                            width="35"
                          ></Image>{" "}
                          <span className="card-nft-name">Nft Name</span>
                          <div className="row">
                            {" "}
                            <span className="card-owner-name">Owner Name</span>
                          </div>
                        </h5>
                        <button className="card-goinfo-btn">
                          <GoInfo />
                        </button>
                      </Card.Title>
                      <Button className="card-checkout-btn">
                        Checkout NFT
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xm={4} className="py-3 py-sm-0">
                  <Card className="header-card">
                    <Card.Img
                      variant="top"
                      src="https://cdn.pixabay.com/photo/2021/09/07/18/10/cat-6604565_960_720.jpg"
                    />
                    <Card.Body>
                      <Card.Title>
                        <h5>
                          <Image
                            rounded="true"
                            src="https://avatars.githubusercontent.com/u/55938092?v=4"
                            height="35"
                            width="35"
                          ></Image>{" "}
                          <span className="card-nft-name">Nft Name</span>
                          <div className="row">
                            {" "}
                            <span className="card-owner-name">Owner Name</span>
                          </div>
                        </h5>
                        <button className="card-goinfo-btn">
                          <GoInfo />
                        </button>
                      </Card.Title>
                      <Button className="card-checkout-btn">
                        Checkout NFT
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xm={4} className="py-3 py-sm-0">
                  <Card className="header-card">
                    <Card.Img
                      variant="top"
                      src="https://cdn.pixabay.com/photo/2021/09/07/18/10/cat-6604565_960_720.jpg"
                    />
                    <Card.Body>
                      <Card.Title>
                        <h5>
                          <Image
                            rounded="true"
                            src="https://avatars.githubusercontent.com/u/55938092?v=4"
                            height="35"
                            width="35"
                          ></Image>{" "}
                          <span className="card-nft-name">Nft Name</span>
                          <div className="row">
                            {" "}
                            <span className="card-owner-name">Owner Name</span>
                          </div>
                        </h5>
                        <button className="card-goinfo-btn">
                          <GoInfo />
                        </button>
                      </Card.Title>
                      <Button className="card-checkout-btn">
                        Checkout NFT
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container>
            <Container>
              <Row className="carousel-row-cards">
                <Col xm={4} className="py-3 py-sm-0">
                  <Card className="header-card">
                    <Card.Img
                      variant="top"
                      src="https://cdn.pixabay.com/photo/2020/03/21/19/27/sea-4955005_960_720.jpg"
                    />
                    <Card.Body>
                      <Card.Title>
                        <h5>
                          <Image
                            rounded="true"
                            src="https://avatars.githubusercontent.com/u/55938092?v=4"
                            height="35"
                            width="35"
                          ></Image>{" "}
                          <span className="card-nft-name">Nft Name</span>
                          <div className="row">
                            {" "}
                            <span className="card-owner-name">Owner Name</span>
                          </div>
                        </h5>
                        <button className="card-goinfo-btn">
                          <GoInfo />
                        </button>
                      </Card.Title>
                      <Button className="card-checkout-btn">
                        Checkout NFT
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xm={4} className="py-3 py-sm-0">
                  <Card className="header-card">
                    <Card.Img
                      variant="top"
                      src="https://cdn.pixabay.com/photo/2020/03/21/19/27/sea-4955005_960_720.jpg"
                    />
                    <Card.Body>
                      <Card.Title>
                        <h5>
                          <Image
                            rounded="true"
                            src="https://avatars.githubusercontent.com/u/55938092?v=4"
                            height="35"
                            width="35"
                          ></Image>{" "}
                          <span className="card-nft-name">Nft Name</span>
                          <div className="row">
                            {" "}
                            <span className="card-owner-name">Owner Name</span>
                          </div>
                        </h5>
                        <button className="card-goinfo-btn">
                          <GoInfo />
                        </button>
                      </Card.Title>
                      <Button className="card-checkout-btn">
                        Checkout NFT
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xm={4} className="py-3 py-sm-0">
                  <Card className="header-card">
                    <Card.Img
                      variant="top"
                      src="https://cdn.pixabay.com/photo/2020/03/21/19/27/sea-4955005_960_720.jpg"
                    />
                    <Card.Body>
                      <Card.Title>
                        <h5>
                          <Image
                            rounded="true"
                            src="https://avatars.githubusercontent.com/u/55938092?v=4"
                            height="35"
                            width="35"
                          ></Image>{" "}
                          <span className="card-nft-name">Nft Name</span>
                          <div className="row">
                            {" "}
                            <span className="card-owner-name">Owner Name</span>
                          </div>
                        </h5>
                        <button className="card-goinfo-btn">
                          <GoInfo />
                        </button>
                      </Card.Title>
                      <Button className="card-checkout-btn">
                        Checkout NFT
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Container>
        </Carousel.Item>
      </Carousel>
      </div>
    </>
  );
}

export default ControlledCarousel;
