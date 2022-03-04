import React from 'react';
// import style from '../assets/css/animate.css';
import style1 from '../assets/css/bootstrap.min.css';
import style2 from '../assets/css/magnific-popup.css';
import style3 from '../assets/css/main.css';
import style4 from '../assets/css/nivo-lightbox.css';
// import style5 from '../assets/css/owl.carousel.min.css';
import style6 from '../assets/css/owl.theme.css';
import style7 from '../assets/css/responsive.css';


const landing = () => {
    return (
        <div>
    <header id="header-wrap">
      <nav className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
        <div className="container">
          <a href="#" className="navbar-brand"><p style={{fontSize:'25px', color:'red', fontFamily:'font-sans md:font-serif'}}>Ubuzima Blood Transfer System</p></a>       
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <i className="lni-menu"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Hospitals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Health Centers
                </a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
      <div id="hero-area" className="hero-area-bg">
        <div className="container">      
          <div className="row">
            <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
              <div className="contents">
                <h2 className="head-title" style={{fontFamily:'font-sans md:font-serif'}}>Ubuzima Blood Transfer System</h2>
                <p style={{color:'black'}}>This is a System that will work in charge of Zipline company where a Customer, Patient needs an item and places an order through a simple call or text to the main Hospitals to the other Health centers via zipline</p>
                <div className="header-button">
                  <a rel="nofollow" href="/login" className="btn btn-common">Click To Continue</a>
                  {/* <a href="#" className="btn btn-border video-popup">Intro Video</a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
              <div className="intro-img">
                <img className="img-fluid" style={{marginBottom:'0'}} src="https://www.pfizer.com/sites/default/files/investors/financial_reports/annual_reports/2019/assets/PfizerAR19-1500px-055.jpg" alt="" />
              </div>            
            </div>
          </div> 
        </div> 
      </div>
  </header> 
        </div>
    )
}

export default landing;
