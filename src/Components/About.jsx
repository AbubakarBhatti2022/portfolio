import React from 'react';
import "../Components/About.css";
import aboutPic from "../media/about1.jpg";
const About = () => {
  return (
    <div className="container-fluid about-container">
        <div className='row about-row'>
        <div className="col-10 mx-auto">
          <div className="row about-body">
            <div className="col-lg-5 col-sm-12 about-pic">
<img src={aboutPic} />
            </div>



            <div className="col-lg-7 col-sm-12 about-text-area">
              <h4>My About Details</h4>
              <h1>About Me</h1>
              <p>The Associate Engineer/Assistant Engineer adapts and uses engineering 
                techniques. He/She aids the design, creation and manufacture of machinery 
                and components, machine repair and maintenance. He/She works closely with 
                the Engineers to create system designs and models. He/She also carries out 
                tests and inspections.</p>



{/* accorrdians tab start */}
<div className="accordians-tab">


<div className="accordion d-flex" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Main Skills
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">

      <div className='tab data'>
<span>User Experience Design - UI/UX</span>
<p>Delight the user and make it work</p>
<span>Web and user interface design - Development</span>
<p>Website, Web Experience,...</p>
<span>Wordpress Development</span>
<p>I like to Develop it develop it</p>
</div>
      
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Experience
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <div className='tab data'>
<span>Associate Software Engineer - Codeninja</span>
<p>2022 - Current</p>
<span>Front-End Developer - 2B Vission Technology</span>
<p>2020 - 2021</p>
<span>Wordpress Developer</span>
<p>2019 - 2020</p>
</div>
        
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Education
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">

      <div className='tab data'>
<span>BScs in cs - Lahore Garrison University</span>
<p>2015 - 2019</p>
<span>Information Technology in cs - PGC</span>
<p>2013 - 2015</p>
<span>Matricultaion in cs - SES </span>
<p>2011 - 2013</p>
</div>

      </div>
    </div>
  </div>
</div>


</div>


{/* accorrdians tab end */}

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;