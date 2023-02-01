import React from "react";
import facelogo from "../assets/automobile/home/img/icon_facebook.png";
import youtubelogo from "../assets/automobile/home/img/icon_youtube.png";
import arrow from "../assets/res/arrow.png";
import "../styles/footerlinks.css";
const Footerlinks = () => {
  return (
    <div className="footerlinks-cont">
      <div className="footerlinks">
        <p>FOLLOW US ON</p>
        <a>
          <img className="face" src={facelogo} alt="facebook-link" />
        </a>
        <a>
          <img className="youtube" src={youtubelogo} alt="facebook-link" />
        </a>
      </div>
      <div className="about">
        <div className="rights">
          <p>© Suzuki Motor Corporation, 2021. All rights reserved.</p>
        </div>
        <div className="foruse">
          <a>
            <img src={arrow}></img>
          </a>
          <p>For use of this website</p>
        </div>
      </div>
    </div>
  );
};
export default Footerlinks;
