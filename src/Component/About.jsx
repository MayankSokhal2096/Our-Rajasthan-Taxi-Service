import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import FrontHeadB from "../Component/FrontHeadB";
import AboutComImg from "../Images/about-sec-img.jpg";
import MobileImg from "../Images/mobile-booking-image.jpg";
import Correct from "../Svg/correct.svg";
import HowWorkCard from "../Component/HowWorkCar";
import FastestPickup from "../Svg/fastest-pickup.svg";
import SafeGuarantee from "../Svg/safe-guarantee.svg";
import QuickRides from "../Svg/quick-rides.svg";
import ClearedDrivers from "../Svg/cleared-drivers.svg";

const About = () => {
  useEffect(() => {
    document.title = "About - Our Rajasthan Taxi Service Bikaner";
  }, []);
  return (
    <>
      <main>
        <FrontHeadB name="About" />
        <section className="about-our-company flex justify-center align-center">
          <div className="our-company-img-box flex justify-center align-center">
            <img src={AboutComImg} alt="About Section Image" />
          </div>
          <div className="our-company-content-box flex justify-center align-start flex-col">
            <p className="theme-golden">ABOUT OUR COMPANY</p>
            <h2 className="theme-black fs-2-5">
              Wherever You Need Taxi in Bikaner To Go
            </h2>
            <div className="flex justify-center align-center">
              <p className="theme-grey">
                Experience Convenience and Comfort with Our Rajasthan Taxi
                Service. We're dedicated to providing you with convenient,
                reliable, and comfortable taxi service solutions. With our 24/7
                availability, you can count on us to be there whenever you need
                a ride.
              </p>
            </div>
            <div className="our-company-content-inner-box p-20 bg-theme-color-grey flex justify-center align-center gapx-20">
              <div className="flex justify-center align-center">
                <img src={MobileImg} alt="Mobile image" />
              </div>
              <ul className="theme-grey fw-400 flex justify-center align-start flex-col gapy-5">
                <li className="flex gapx-10">
                  <img src={Correct} alt="Correct" />
                  Easy & Emergency Solutions Anytime
                </li>
                <li className="flex gapx-10">
                  <img src={Correct} alt="Correct" />
                  Getting Affordable price for Taxi
                </li>
                <li className="flex gapx-10">
                  <img src={Correct} alt="Correct" />
                  More Reliable & Experienced Driver
                </li>
              </ul>
            </div>
            <Link
              className="discover-more-link flex justify-start align-center"
              to="/service"
            >
              <div className="discover-more-btn">
                <span>MORE SERVICES</span>
              </div>
            </Link>
          </div>
        </section>
        <section className="call-us-section">
          <div className="call-us-box flex justify-center align-start flex-col gapy-20">
            <h3 className="theme-white fs-25">CALL US TO BOOK A TAXI</h3>
            <a className="phn-num-heading" href="tel:+918118830211">
              <span className="theme-golden fs-4 fw-700">(+91) 8118830211</span>
            </a>
            <p className="theme-white">
              Experience the difference with Our Rajasthan Taxi Service .
              Wherever you need to Taxi in Bikaner, trust us to get you there
              safely, comfortably, and on time. Your journey starts with us!
            </p>
            <a
              className="discover-more-link flex justify-start align-center"
              href="/contact"
            >
              <div className="discover-more-btn my-5">
                <span>DISCOVER MORE</span>
              </div>
            </a>
          </div>
        </section>
        <section className="our-work-section">
          <h3 className="theme-black text-center fs-3 p-20">How We Works</h3>
          <div className="flex justify-center align-center gapx-15">
            <div className="card-box card-box-1 full-flex">
              <HowWorkCard
                Img={SafeGuarantee}
                heading="SAFE GUARANTEE"
                para="Safe rides guaranteed! Trust our taxi service for secure journeys every time."
                number="01"
                ImgAlt="SafeGuarantee"
              />
              <div className="line"></div>
            </div>
            <div className="card-box card-box-2">
              <HowWorkCard
                Img={FastestPickup}
                heading="FASTEST PICKUPS"
                para="Fastest pickup in town! Get to your destination quickly with us."
                number="02"
                ImgAlt="FastestPickup"
              />
              <div className="line line-2"></div>
            </div>
            <div className="card-box card-box-3">
              <HowWorkCard
                Img={QuickRides}
                heading="QUICK RIDES"
                para="Quick rides assured! Reach your destination promptly with our reliable taxi service."
                number="03"
                ImgAlt="QuickRides"
              />
              <div className="line"></div>
            </div>
            <div className="card-box card-box-4">
              <HowWorkCard
                Img={ClearedDrivers}
                heading="CLEARED DRIVERS"
                para="Clear drivers, clear journey! Trust our transparent taxi service for your ride."
                number="04"
                ImgAlt="ClearedDrivers"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
