import React from "react";
import logo from "../assets/res/suzuki-logo.png";
import "../styles/navlogo.css";
const Navlogo = () => {
  return (
    <div>
      <div>
        <img className="logo" src={logo} alt="suzuki-logo" />
      </div>
    </div>
  );
};

export default Navlogo;
