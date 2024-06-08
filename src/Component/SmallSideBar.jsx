import React from "react";
import { Link } from "react-router-dom";
import "./SmallSideBar.css";
import NavLogo from "../Images/our rajasthan transparent logo.png";

const SmallSideBar = ({ forwardedRefB }) => {
  const handleClick = () => {
    forwardedRefB.current.style.left = "-150%";
  };

  return (
    <>
      <div className="small-sidebar" ref={forwardedRefB}>
        <div className="small-sidebar-content">
          <div
            className="close-btn bg-theme-color br-rounded full-flex"
            onClick={handleClick}
          >
            <i class="fa-solid fa-xmark"></i>
          </div>
          <div className="nav-logo-box">
            <div className="logo-img-bg full-flex">
              <div className="logo-img-box flex">
                <Link className="flex" to="./">
                  <img src={NavLogo} alt="Logo" />
                </Link>
              </div>
            </div>
          </div>
          <div className="small-sidebar-link-box">
            <ul className="list-style-none flex justify-center align-start flex-col gapy-10">
              <li className="border-bottom" onClick={handleClick}>
                <Link to="/">Home</Link>
              </li>
              <li className="border-bottom" onClick={handleClick}>
                <Link to="/about">About</Link>
              </li>
              <li className="border-bottom" onClick={handleClick}>
                <Link to="/service">Service</Link>
              </li>
              <li className="border-bottom" onClick={handleClick}>
                <Link to="/privacy">Privacy</Link>
              </li>
              <li className="" onClick={handleClick}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="nav-footer bg-theme-color full-flex">
            <p className="theme-grey fs-15 full-flex">
              © 2024 &nbsp;
              <Link to="/">
                <span className="theme-grey">Our Rajasthan</span>
              </Link>
              . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallSideBar;
