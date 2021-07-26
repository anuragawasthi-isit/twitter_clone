import React from "react";
import ReactDOM from "react-dom";
import "../index.css";

function NameWithHandle(props) {
    return (
      <span className="name-with-handle">
        <span className="name">Your Name</span>
        <span className="handle">"demotweet"</span>
      </span>
    );
  }

export default NameWithHandle