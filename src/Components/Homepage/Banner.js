import {Button} from 'react-bootstrap'
import ('../Styles/HomePageStyles/Banner.css');
require('bootstrap/dist/css/bootstrap.min.css');

export default function App() {
  return (
   <>
   <div className="row nft-banner">
   <div className="col-8 text-center banner-text">
   Lorem Ipsum is simply dummy text
   </div>
   <div className="col-4 banner-div">
   <Button className="banner-button">Explore</Button>
   </div>
   </div>
   </>
  );
}