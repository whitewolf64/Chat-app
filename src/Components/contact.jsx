import React from "react";
import "./contact.css"

function Contact(){
  return(
    <div className = "Contact">
       <img className = "avatar" src= "https://randomuser.me/api/portraits/men/9.jpg" alt="facepic"/> 
       <div>
         <p className = "name">Jean claude</p>
          <div className = "status" >
            <p className = "status-online"></p>
            <p className = "status-text">online</p>
          </div> 
       </div>
    </div>
  )
  }
export default Contact; 