import React from "react";
import "./ContactCard.css";

const ContactCard = (props) => {
  return (
    <>
      <div className="box-content location-box text-center flex justify-center align-start">
        <div className="box-contact-inner">
          <div className="contact-icon-box full-flex">
            <i class={props.ClassName}></i>
          </div>
          <h3 className="contact-card-heading theme-grey fs-15 fw-400">
            {props.CardHeading}
          </h3>
          <p className="contact-card-para theme-black fs-20">
            {props.CardPara}
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
