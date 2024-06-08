import React from "react";
import { Link } from "react-router-dom";
import "./FrontHead.css";

const FrontHead = () => {
  return (
    <>
      <section className="main-header flex">
        <div className="main-header-inner flex justify-start align-center">
          <div className="main-header-content flex justify-start flex-col">
            <h1 className="my-5 theme">Our Rajasthan Taxi Service Bikaner</h1>
            <p className="theme-golden">Have a ride with us</p>
            <h2>
              Fasted & &nbsp;
              <div className="Cheapest-taxi-box">
                <span>Cheapest</span>
              </div>
            </h2>
            <h2>
              Taxi in Bikaner <br />
              For You
            </h2>
            <div className="main-header-btns-link flex justify-start alig-center gapx-20">
              <Link to="/about">
                <div className="main-header-btn btn-1 flex align-center justify-center">
                  <span>LEARN MORE</span>
                </div>
              </Link>
              <Link to="/contact">
                <div className="main-header-btn btn-2 flex align-center justify-center">
                  <span>FIND TAXI</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="side-line"></div>
      </section>
    </>
  );
};

export default FrontHead;
