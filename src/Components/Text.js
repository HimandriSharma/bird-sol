import React from "react";
import "./Text.css";

function Text(props) {
  return (
    <div className="text">
        <div className="subheading" style={{color:`${props.color}`}}>
            {props.subheading}
        </div>
        <div className="heading">{props.heading}</div>
        <div className="para-text">{props.para}</div>
    </div>
  );
}

export default Text;
