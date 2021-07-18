
import React from "react";
import ReactDOM from "react-dom";
import "../index.css";
import Twiterratisnap from "./Twiterratisnap";
import NameWithHandle from "./NameWithHandle";
import Message from "./Message";
import Time from "./Time";
import { ICON_LOGO } from '../Icons'
import LikeButton from "./Likebutton";

function Tweet(){

    return (
        <div className='tweet'>
      <Twiterratisnap/>
      <div className="content">
        <NameWithHandle /> 
        <Time />
        <Message />
        <div class="button">
            <LikeButton />
        </div>
      </div>
    </div>

    
    )

}

export default Tweet