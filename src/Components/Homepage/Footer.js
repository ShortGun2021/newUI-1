import React from 'react'
import ('../Styles/HomePageStyles/footer.css')

const Footer = () => {
  return (
<>
   <div>
  <footer className="footer-section">
    <div className="container">
      <div className="footer-cta pt-5 pb-5">
        <div className="row">
          <div className="col-xl-4 col-md-4 mb-30">
            <div className="single-cta">
              <i className="fas fa-map-marker-alt" />
              <div className="cta-text">
                <h4>Find us</h4>
                <span>Mumbai,Maharashtra</span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-4 mb-30">
            <div className="single-cta">
              <i className="fas fa-phone" />
              <div className="cta-text">
                <h4>Call us</h4>
                <span>9999999999</span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-4 mb-30">
            <div className="single-cta">
              <i className="far fa-envelope-open" />
              <div className="cta-text">
                <h4>Mail us</h4>
                <span>service@shortgun.in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-content pt-5 pb-5">
        <div className="row">
          <div className="col-xl-4 col-lg-4 mb-50">
            <div className="footer-widget">
              <div className="footer-logo">
                <a href="index.html"><img src="https://static.wixstatic.com/media/ccc269_fef35fd3445e47099ff2ba432afd2ead~mv2.png/v1/fill/w_48,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Original_edited_edited_edited.png" className="img-fluid" alt="logo" /></a>
              </div>
              <div className="footer-text">
                <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                  elit,Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="footer-social-icon">
                <span>Follow us</span>
                <a href="#"><i className="fab fa-facebook-f facebook-bg" /></a>
                <a href="#"><i className="fab fa-twitter twitter-bg" /></a>
                <a href="#"><i className="fab fa-google-plus-g google-bg" /></a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className="footer-widget">
              <div className="footer-widget-heading">
                <h3>Useful Links</h3>
              </div>
              <ul className="footer-ul">
                <li><a href="#">All NFTs</a></li>
                <li><a href="#">Arts</a></li>
                <li><a href="#">Collectibles</a></li>
                <li><a href="#">Sports</a></li>
                <li><a href="#">utilities</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">Trading Cards</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">My collections</a></li>
                <li><a href="#">Settings</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
            <div className="footer-widget">
              <div className="footer-widget-heading">
                <h3>Subscribe</h3>
              </div>
              <div className="footer-text mb-25">
                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
              </div>
              <div className="subscribe-form">
                <form action="#">
                  <input type="text" placeholder="Email Address" />
                  <button style={{backgroundColor:"black", color:"white"}}>Sign up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 text-center text-lg-left">
            <div className="copyright-text">
              <p>Copyright © 2018, All Right Reserved <a href="https://www.shortgun.in/shortcoin">Shortgun.in</a></p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
            <div className="footer-menu">
              <ul className='footer-ul'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Policy</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

    </>
  )
}

export default Footer