import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import FrontHead from "../Component/FrontHead";
import Ourtaxisec from "../Component/Ourtaxisec";
import Drivetaxi from "../Images/look-outside-taxi.png";
import Lookoutside from "../Images/taxi-driver.png";
import Call from "../Svg/call.svg";
import SedanImg from "../Images/swift-dzire.png";
import InnovaImg from "../Images/Innova-crysta.jpg";
import TempoImg from "../Images/tempo-traveller.png";

const Home = () => {
  useEffect(() => {
    document.title = "Our Rajasthan Taxi Service Bikaner";
  }, []);
  return (
    <>
      <main>
        <FrontHead />
        <section className="your-journey-section flex justify-center align-center">
          <div className="your-journey-inner flex justify-center align-center">
            <div className="your-journey-images">
              <div className="your-journey-img-box-1">
                <img src={Lookoutside} alt="Looking outside" />
              </div>
              <div className="your-journey-img-box-2">
                <img src={Drivetaxi} alt="Taxi Driving" />
              </div>
            </div>
            <div className="your-journey-content flex justify-start flex-col gapy-30">
              <p>ABOUT OUR COMPANY</p>
              <h2>Book Taxi in Bikaner</h2>
              <div className="your-journey-para-box">
                <p className="theme-grey my-15">
                  Booking of Taxi service in Bikaner is easy. Simply give us a
                  call or book online, and we'll take care of the rest. We pride
                  ourselves on offering competitive rates with no hidden fees,
                  so you can enjoy affordable taxi fare without sacrificing
                  quality.
                </p>
                <p className="theme-golden">Rikita Panwar</p>
              </div>
              <div className="mobile-details flex align-center gapx-15">
                <div className="mobile-details-box flex justify-center align-center">
                  <img src={Call} alt="Call" />
                </div>
                <div className="mobile-details-content flex justify-center flex-col gapy-5">
                  <div className="theme-grey">Call Us 24/7 Anytime:</div>
                  <p>(+91)8118830211</p>
                </div>
              </div>
              <Link
                className="your-journey-btn flex justify-start align-center"
                to="/about"
              >
                <div className="get-more-btn">
                  <span>GET MORE INFO</span>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="our-taxi-service-section flex justify-center align-center">
          <Ourtaxisec Img={SedanImg} alt="Sedan car" carName="Sedan Car" />
          <Ourtaxisec Img={InnovaImg} alt="Innova car" carName="Innova Car" />
          <Ourtaxisec
            Img={TempoImg}
            alt="Tempo traveller"
            carName="Tempo Traveller"
          />
        </section>
      </main>
    </>
  );
};

export default Home;
