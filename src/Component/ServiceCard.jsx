import React from "react";
import "./ServiceCard.css";

const ServiceCard = (props) => {
  return (
    <>
      <div className="service-card-box full-flex flex-col text-center">
        <div className="service-card-box-inner text-center">
          <div className="service-card-img-box full-flex">
            <img src={props.CardImg} alt={props.Imgalt} />
          </div>
          <h4 className="card-heading theme-black fs-25 my-15">
            {props.Cardheading}
          </h4>
          <p className="theme-grey px-5 my-15">{props.Cardpara}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
