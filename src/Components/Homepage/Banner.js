import { Button } from 'react-bootstrap'
import('../Styles/HomePageStyles/Banner.css')
require('bootstrap/dist/css/bootstrap.min.css')

export default function App() {
  return (
    <>
      <div
        style={{
          backgroundColor: '#F0F0F0',
          width: '80%',
          height: '77px',
          margin: '40px auto',
          display: 'flex',
          alignItems: 'center',
          fontFamily: 'Poppins',
          borderRadius: '9px',
          boxShadow: '0px 6px 10px 4px rgba(0, 0, 0, 0.07)',
        }}
        className="row nft-banner"
      >
        <div
          style={{ color: '#1C1C1C', fontSize: '18px', fontWeight: 800 }}
          className="col-9 text-center banner-text"
        >
          Explore, collect and buy NFTs with us.
        </div>
        <div className="col-3 banner-div">
          <Button
            style={{ backgroundColor: '#6739B7', width: '105px' }}
            className="banner-button"
          >
            Explore
          </Button>
        </div>
      </div>
    </>
  )
}
