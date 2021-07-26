
import React from "react";
import ReactDOM from "react-dom";
import "../index.css";
import Twiterratisnap from "./Twiterratisnap";
import NameWithHandle from "./NameWithHandle";
import Message from "./Message";
import Time from "./Time";
import { ICON_LOGO } from '../Icons'
import LikeButton from "./Likebutton";


function Tweet(props){

    return (
        <div className='tweet'>
          <img src="https://gravatar.com/avatar/nothing" alt='avatar' className='twtusersnap'/>
     
      <div className="content">
      <span className="name-with-handle">
        <span className="name">Your Name</span>
        <span className="handle">{props.Tweethandle}</span>
      </span>
      <span className="time">3h ago</span>
      <div className="twtmsg">{props.TweetMessage}</div>
        <div class="button">
        <button className="button" />
        </div>
      </div>
    </div>

    
    )

}

export default Tweet