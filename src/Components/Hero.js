import React from "react";
import Home from "./Home";
import Header from "./Header";
import "../Components/Hero.css";

const Hero = () => {
  return (
    <>
      <div className="container-fluid hero-part">
        <Header />
        <Home />
      </div>
    </>
  );
};

export default Hero;
