import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/our rajasthan transparent logo.png";
import Call from "../Svg/call.svg";
import Mail from "../Svg/mail.svg";
import Location from "../Svg/location.svg";
import Youtube from "../Svg/youtube.svg";
import Linkedin from "../Svg/linkedin.svg";
import Instagram from "../Svg/instagram.svg";
import Facebook from "../Svg/facebook.svg";
import Threads from "../Svg/threads.svg";
import Twitter from "../Svg/twitter.svg";
import Menu from "../Svg/menu-btn.svg";
import "./NavBar.css";

const NavBar = ({ refToComponentA, refToComponentB }) => {
  const handleClick = () => {
    if (refToComponentA.current) {
      refToComponentA.current.style.right = "0%";
    }

    if (refToComponentB.current) {
      refToComponentB.current.style.left = "0%";
    }
  };

  return (
    <>
      <nav className="main-navbar">
        <div className="nav-inner-box-1 flex justify-around align-center">
          <div className="contact flex justify-center align-center">
            <div className="contact-details call-details">
              <a
                className="flex justify-center align-center"
                href="tel:+918118830211"
              >
                <div className="contact-image-box">
                  <img src={Call} alt="Call" />
                </div>
                <p>(+91) 8118830211</p>
              </a>
            </div>
            <div className="contact-details email-details">
              <a
                className="flex justify-center align-center"
                href="mailto:sgursinder23@gmail.com"
              >
                <div className="contact-image-box">
                  <img src={Mail} alt="Mail" />
                </div>
                <p>sgursinder23@gmail.com</p>
              </a>
            </div>
            <div className="contact-details location-details">
              <a
                className="flex justify-center align-center"
                href="https://maps.app.goo.gl/6m9tsXzC4sNGaGM57"
              >
                <div className="contact-image-box">
                  <img src={Location} alt="Address" />
                </div>
                <p>7/11 M.P. Colony, Bikaner, Rajasthan - 334004</p>
              </a>
            </div>
          </div>
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
            <a href="https://www.instagram.com/ourrajasthan_taxiservice/">
              <div className="social-media-icons">
                <img src={Instagram} alt="Instagram" />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/our-rajasthan-0a2442287?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B34q%2FA%2FPQRKK8RdNv7vzU2Q%3D%3D">
              <div className="social-media-icons">
                <img src={Linkedin} alt="Linkedin" />
              </div>
            </a>
            <a href="https://twitter.com/ORCabService">
              <div className="social-media-icons">
                <img src={Twitter} alt="Twitter" />
              </div>
            </a>
            <a href="https://www.threads.net/@ourrajasthan_taxiservice">
              <div className="social-media-icons">
                <img src={Threads} alt="Threads" />
              </div>
            </a>
          </div>
        </div>
        <div className="nav-inner-box-2">
          <div className="nav-inner-box-2-inner flex justify-between align-center">
            <Link to="/">
              <div className="logo-box flex justify-start align-center">
                <img src={Logo} alt="Logo" />
              </div>
            </Link>
            <div className="logo-bg-box"></div>
            <div className="flex align-center justify-around gapx-30">
              {/* <div className="flex align-center justify"> */}
                <menu className="list-style-none flex justify-center align-center gapx-30">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/service">Service</Link>
                  </li>
                  <li>
                    <Link to="/privacy">Privacy</Link>
                  </li>
                  <li>
                    <Link className="contact-btn" to="/contact">
                      <span className="btn-text">Contact</span>
                    </Link>
                  </li>
                </menu>
              {/* </div> */}
              <div
                className="humberger-btn flex justify-center align-center"
                onClick={handleClick}
              >
                <img src={Menu} alt="Menu" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
