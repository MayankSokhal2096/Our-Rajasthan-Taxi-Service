import React from "react";
import "./HowWorkCar.css";

const HowWorkCar = (props) => {
  return (
    <div className="how-work-card flex justify-center align-center flex-col text-center gapy-15">
      <div className="how-work-img-box flex justify-center align-center br-rounded">
        <img src={props.Img} alt={props.ImgAlt} />
        <div className="circle-effect-box full-flex">{props.number}</div>
      </div>
      <div className="how-work-card-heading theme-black fw-700">
        {props.heading}
      </div>
      <p className="how-work-card-para theme-grey">{props.para}</p>
    </div>
  );
};

HowWorkCar.defaultProps = {
  heading: "Car",
};

export default HowWorkCar;
