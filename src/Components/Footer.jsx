import React from "react";
import logo from "../media/footer-logo.png";
import "../Components/Footer.css";

const Footer = () => {
  return (
    <div className="container-fluid footer-container">
      <div className="row footer-row">
        <div className="col-10 mx-auto">
          <div className="row footer-body">
            <div className="col-lg-4 col-md-6 col-sm-12 footer-logo">
              <img src={logo} />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 social-icons">
              <h4><i class="fa fa-facebook"></i>
</h4>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 footer-text">
              <p>
                A front-end developer creates websites and applications using
                web languages such as HTML, CSS, and JavaScript allow users to
                access and interact with the site or app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
