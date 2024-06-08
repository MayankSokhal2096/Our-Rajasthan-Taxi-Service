import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import Cross from "../Svg/cross.svg";
import Youtube from "../Svg/youtube.svg";
import Linkedin from "../Svg/linkedin.svg";
import Instagram from "../Svg/instagram.svg";
import Facebook from "../Svg/facebook.svg";
import Threads from "../Svg/threads.svg";
import Twitter from "../Svg/twitter.svg";

const SideBar = ({ forwardedRefA }) => {
  const handleClick = () => {
    forwardedRefA.current.style.right = "-100%";
  };

  return (
    <>
      <div className="sidebar" ref={forwardedRefA}>
        <div className="sidebar-content flex justify-start flex-col gapy-30">
          <div
            className="cross-btn br-rounded bg-theme-color-white flex justify-center align-center"
            onClick={handleClick}
          >
            <img src={Cross} alt="Cross" />
          </div>
          <h2 className="about-heading theme-white">ABOUT COMPANY</h2>
          <p className="about-company-para theme-grey">
            We're dedicated to offering safe, efficient, and convenient
            taxi service. With experienced drivers and a focus on customer
            satisfaction, we ensure reliable taxi service
          </p>
          <div className="we-available-box my-15">
            <h3 className="we-available-heading theme-white">
              WE ARE AVAILABLE
            </h3>
            <p className="we-available-para theme-grey my-5">
              Mon-Sun: 24/7 Hours
            </p>
          </div>
          <Link className="flex justify-start align-center" to="/contact" onClick={handleClick}>
            <div className="contact-us-btn">
              <span>CONTACT US</span>
            </div>
          </Link>
          <div className="follow-us-icon-box flex justify-center align-center gapx-15">
            <p className="theme-white fw-400">Follow Us On:</p>
            <div className="social-media flex flex-row gapx-10">
              <a href="https://youtube.com/@ourrajasthantaxiservicebikaner?si=aAO7CNA0REAJiLoJ">
                <div className="social-media-icons">
                  <img src={Youtube} alt="Youtube" />
                </div>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100095391210464">
                <div className="social-media-icons">
                  <img src={Facebook} alt="Facebook" />
                </div>
              </a>
              <a href="https://www.instagram.com/ourrajasthan_tour_and_travels/">
                <div className="social-media-icons">
                  <img src={Instagram} alt="Instagram" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/our-rajasthan-0a2442287?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B34q%2FA%2FPQRKK8RdNv7vzU2Q%3D%3D">
                <div className="social-media-icons">
                  <img src={Linkedin} alt="Linkedin" />
                </div>
              </a>
              <a href="https://twitter.com/ourrajasthan1">
                <div className="social-media-icons">
                  <img src={Twitter} alt="Twitter" />
                </div>
              </a>
              <a href="https://www.threads.net/@ourrajasthan_tour_and_travels">
                <div className="social-media-icons">
                  <img src={Threads} alt="Threads" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
