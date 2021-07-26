import React from "react";
import ReactDOM from "react-dom";
import "../index.css";

function Message(props) {
  console.log(props)
    return (
     
      <div className="twtmsg">{props.message}</div>
    );
  }

export default Message