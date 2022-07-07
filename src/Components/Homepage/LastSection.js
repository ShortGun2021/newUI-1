import {useNavigate} from "react-router-dom"
import {Button, Image, Container} from 'react-bootstrap'
import ('../Styles/HomePageStyles/LastSection.css')
require('bootstrap/dist/css/bootstrap.min.css');

let navigate;
const handleClick=()=>{
  navigate('./explore');
}

export default function App() {
  navigate = useNavigate();
  return (
   <>
   <div className="text-center">
     <h1>What is Shortgun?</h1>
     <Container>
     <Image src="https://boostcafe.org/wp-content/uploads/2014/03/freedom-307791_1280-1000x550.png" height="100%" width="60%"></Image>
    </Container>
    <Button className='lastSection-button' onClick={handleClick}>Explore</Button>
   </div>
   </>
  );
}