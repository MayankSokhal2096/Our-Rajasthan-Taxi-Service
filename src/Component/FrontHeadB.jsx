import React from "react";
import "./FrontHeadB.css";

const FrontHeadB = (props) => {
  return (
    <>
      <section className="flex">
        <div className="front-header-inner flex justify-center align-center">
          <h1 className="outline-text flex justify-center align-center">
            {props.name}
          </h1>
        </div>
        <div className="side-line"></div>
      </section>
    </>
  );
};

export default FrontHeadB;
