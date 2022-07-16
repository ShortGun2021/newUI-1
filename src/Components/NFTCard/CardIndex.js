import React from 'react'
import { useLocation } from 'react-router-dom'
import NFTNavbar from '../Homepage/NFTNavbar'
import Container1 from './Container1'
import Container2 from './Container2'
import Container3 from './Container3'
import { Row, Col, Container } from 'react-bootstrap'

const CardIndex = () => {
  const location = useLocation()
  // console.log(location);
  return (
    <>
      <NFTNavbar />
      <div
        className="row"
        style={{ fontFamily: 'Poppins', width: '93%', margin: '0 auto' }}
      >
        <div className="col-lg-5 col-md-5 col-12">
          <Container1 nftImage={location.state.nftData.nftImageUrl} />
        </div>
        <div className="col-lg-7 col-md-7 col-12 mt-3">
          <Container2
            nftData={location.state.nftData}
          />
        </div>
        <div className="col-lg-12 col-md-12 col-12 mt-3">
          <Container3 />
        </div>
      </div>
    </>
  )
}

export default CardIndex
