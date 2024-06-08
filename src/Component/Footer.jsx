import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import fCall from "../Svg/footer-call.svg";
import fMail from "../Svg/footer-mail.svg";
import fLocation from "../Svg/footer-location.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-details full-flex flex-col gay-20">
          <div className="footer-contact-details flex justify-center align-center">
            <div className="footer-contact-box footer-contact-box-1 flex">
              <div className="email-image-box flex justify-center align-center br-rounded bg-theme-color">
                <img src={fMail} alt="Mail icon" />
              </div>
              <div className="email-content-box content-box">
                <div className="theme-grey fw-300">
                  Reservation Email Address
                </div>
                <a href="mailto:sgursinder23@gmail.com">
                  <p className="content-box-para theme-white fs-15">
                    sgursinder23@gmail.com
                  </p>
                </a>
              </div>
            </div>
            <div className="footer-contact-box footer-contact-box-2 flex">
              <div className="phone-image-box flex justify-center align-center br-rounded bg-theme-color-black">
                <img src={fCall} alt="Call icon" />
              </div>
              <div className="phone-content-box content-box">
                <div className="theme-black fw-300">Phone Number</div>
                <a href="tel:+918118830211">
                  <p className="content-box-para theme-black fs-15">
                    (+91)8118830211
                  </p>
                </a>
              </div>
            </div>
            <div className="footer-contact-box footer-contact-box-3 flex">
              <div className="address-image-box flex justify-center align-center br-rounded bg-theme-color">
                <img src={fLocation} alt="Address icon" />
              </div>
              <div className="address-content-box content-box">
                <div className="theme-grey fw-300">Our Address</div>
                <a href="https://maps.app.goo.gl/6e2uEfUHpdZfarnD6">
                  <p className="content-box-para theme-white fs-15">
                    7/11 M.P. Colony, Bikaner, Rajasthan - 334004
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.4559033912255!2d73.29177767504999!3d28.041101110692935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393fdd8b93988987%3A0xdc41bb4f76a5ed66!2sOur%20Rajasthan!5e0!3m2!1sen!2sin!4v1707557574748!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: "2px solid rgb(162 162 162)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Embed"
            ></iframe>
          </div>
          <div className="footer-content flex justify-around align-center gap-20">
            <p className="theme-grey text-center">
              © 2024{" "}
              <Link to="/">
                <span className="theme-golden">
                  Our Rajasthan Taxi Service Bikaner
                </span>
              </Link>
              . All rights reserved.
            </p>
            <p className="theme-grey">
              Created by &nbsp;
              <span className="theme-golden">Mayank Technicals</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
