import React from "react";
import { Link } from "react-router-dom";
import "./Ourtaxisec.css";
import CarSvg from "../Svg/car-solid.svg";


const Ourtaxisec = (props) => {
  return (
    <>
      <div className="our-taxi-service-box flex justify-center align-center flex-col">
        <div className="our-taxi-service-inner flex justify-center align-center flex-col">
          <div className="car-image-box flex justify-center align-center">
            <img src={props.Img} alt={props.alt} />
          </div>
        </div>
        <div className="car-details-box flex justify-center align-center flex-col">
          <div className="car-icon-box flex justify-center align-center">
            <img src={CarSvg} alt="Car icon" />
          </div>
          <div className="car-name-box">{props.carName}</div>
          <Link className="flex justify-start align-center" to="/contact">
            <div className="read-more-btn">
              <span>Book Now</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

Ourtaxisec.defaultProps = {
  carName: "Car",
};

export default Ourtaxisec;
