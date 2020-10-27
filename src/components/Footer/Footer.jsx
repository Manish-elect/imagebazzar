import React from "react";
import "./Footer.css";
import Data from "./Data";

function Footer(){
    return <div className="body">
        <h1 className="heading" >World's largest collection of Creative Indian images & videos</h1>
       <div className="margin-from-heading">
        <div className="floatleft">
        <h3>All India Toll Free: 1800-11-6869</h3>
      <h4>© ImagesBazaar.com. A division of Mash Audio Visuals Pvt. Ltd. All rights reserved.</h4>
        </div>

        {Data.map(props=>(
         <ul className="info">
            <h3>{props.title}</h3>
        <li><a href="#">{props.item1}</a></li>
        <li><a href="#">{props.item2}</a></li>
        <li><a href="#">{props.item3}</a></li>
        <li><a href="#">{props.item4}</a></li>
         </ul>

        ))}
         </div>
         </div>
}
export default Footer;