import React from "react";
import "../Components/Header.css";
import logo from "../media/logo.png";
import logo1 from "../media/logo1.png";
import { Link } from "react-router-dom";


const Header = () =>{
    return(

     
        <div>
          

<div className="container-fluid nav_bg main-header">
  <div className="row">
    <div className="col-10 mx-auto nav-header">

  
       <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-logo" href="/">
      <img src={logo1} alt="img" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="toggle-iocn"><i className="fa fa-home "></i></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      
        <li className="nav-item">
          <Link className="nav-link" to="/service"role="button" aria-expanded="false">
           Service
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control " type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}

 <div className="header-left">
                    <input className="search-bar" type="text" placeholder="search here . . ." />
                    <i className="icon-n fa fa-search"></i>
                </div>


    </div>
  </div>
</nav>

</div>
  </div>
        
        </div>

        </div>
    ) 
}
export default Header;