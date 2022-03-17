import React from "react";
import "./Head.css";

function Head(props) {
  return (
    <div className="head">
      <div className="background" />
      <div className="heading-head">{props.heading}</div>
      <div className="heading-para">{props.para}</div>
    </div>
  );
}

export default Head;
