import React from 'react';
import banner from "../media/banner.svg";
import "../Components/Home.css";


const Home = () => {
  return (
   <>
   <div className="container-fluid nav_bg first-sec">
  <div className="row main-body"> 
    <div className="col-10 mx-auto">
<div className="row hero-section">
  <div className="col-lg-6 col-sm-12 align-item-left">
    <h4 className='fwd'>Freelance Website Designer</h4>
    <h1 className='name'>I'm Abubakar Bhatti <br/><span className='website-text'>Front-End Developer</span></h1>
<p className='hero-section-left-text b-usa'> based in <strong className='usa'>pakistan</strong></p>
  <button className='btn get-btn'>Download CV</button>
  </div>
  <div className="col-lg-6 col-sm-12 body-image">
{/* <img className='banner-img' src={banner} alt="banner" /> */}
  </div>
</div>
      </div>
      </div>
      </div>
   </>
  );
}

export default Home;