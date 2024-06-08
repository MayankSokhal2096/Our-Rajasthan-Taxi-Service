import React from "react";
import "./Widget.css";
import Whatsapp from "../Svg/whatsapp-icon.svg";

const Widget = () => {
  return (
    <>
      <a className="widget-box full-flex gapx-5" href="https://wa.me/+918118830211">
        <img src={Whatsapp} alt="Whatsapp icon" />
        <div className="widget-title theme-white">Whatsapp</div>
      </a>
    </>
  );
};

export default Widget;
