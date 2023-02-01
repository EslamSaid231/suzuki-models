import React from "react";
import "../styles/header.css";
const Header = ({ title }) => {
  return (
    <div className="Header">
      <h1>{title}</h1>
      <p>|</p>
    </div>
  );
};
export default Header;
