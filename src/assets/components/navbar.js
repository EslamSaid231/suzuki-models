import React from "react";
import logo from "../assets/res/suzuki-logo.png";
import Button from "react-bootstrap/Button";
import "../styles/navbar.css";
import global from "../assets/automobile/home/img/icon_global_pc.png";
import Modelsdropdown from "./models dropdown";
import react, { useState } from "react";
import Models from "./models";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="navbar">
        <div>
          <img className="logo" src={logo} alt="suzuki-logo" />
        </div>
        <div className="links">
          <div className="links1">
            <Button variant="link" className="link-1">
              MOTORCYCLE/ATV
            </Button>
            <Button variant="link" className="link-1">
              MARINE
            </Button>
            <Button variant="link" className="link-1">
              HOME
            </Button>
            <Button variant="link" className="link-1">
              CORPORATE
            </Button>
            <Button variant="link" className="link-1">
              INVESTOR RELATIONS
            </Button>
            <Button variant="link" className="link-1">
              SITEMAP
            </Button>
            <Button variant="link" className="link-1-1">
              <img src={global} className="global-icon" />
              GLOBAL LINKS
            </Button>
          </div>
          <hr className="hrlinks" />
          <div className="links2">
            <Button
              variant="link"
              className="link-2-models"
              onClick={() => {
                setOpen(!open);
              }}
              style={{ color: "grey" }}
            >
              MODELS
              <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
                <Modelsdropdown />
              </div>
            </Button>
            <Button variant="link" className="link-2">
              TECHNOLOGY
            </Button>
            <Button variant="link" className="link-2">
              4x4 HISTORY
            </Button>
            <Button variant="link" className="link-2">
              MOTOR SHOW
            </Button>
            <Button variant="link" className="link-2">
              AFTERSALES
            </Button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default Navbar;
