import React from "react";
import "../styles/models.css";
import alto from "../assets/automobile/home/img/car_alto.jpg";
import apv from "../assets/automobile/home/img/car_apv.jpg";
import baleno from "../assets/automobile/home/img/car_baleno.jpg";
import carry from "../assets/automobile/home/img/car_carry.jpg";
import celerio from "../assets/automobile/home/img/car_celerio.jpg";
import ciaz from "../assets/automobile/home/img/car_ciaz.jpg";
import dzire from "../assets/automobile/home/img/car_dzire.jpg";
import ertiga from "../assets/automobile/home/img/car_ertiga.jpg";
import ignis from "../assets/automobile/home/img/car_ignis.jpg";
import jimny from "../assets/automobile/home/img/car_jimny.jpg";
import spresso from "../assets/automobile/home/img/car_s-presso.jpg";
import scross from "../assets/automobile/home/img/car_scross.jpg";
import swift from "../assets/automobile/home/img/car_swift.jpg";
import swiftsport from "../assets/automobile/home/img/car_swiftsport.jpg";
import sx4scross from "../assets/automobile/home/img/car_sx4scross.jpg";
import vitara from "../assets/automobile/home/img/car_vitara.jpg";
import xl7 from "../assets/automobile/home/img/car_xl7.jpg";

import Logoalto from "../assets/automobile/home/img/logo_alto.png";
import Logoapv from "../assets/automobile/home/img/logo_apv.png";
import Logobaleno from "../assets/automobile/home/img/logo_baleno.png";
import Logocarry from "../assets/automobile/home/img/logo_carry.png";
import Logocelerio from "../assets/automobile/home/img/logo_celerio.png";
import Logociaz from "../assets/automobile/home/img/logo_ciaz.png";
import Logodzire from "../assets/automobile/home/img/logo_dzire.png";
import Logoertiga from "../assets/automobile/home/img/logo_ertiga.png";
import Logoignis from "../assets/automobile/home/img/logo_ignis.png";
import Logojimny from "../assets/automobile/home/img/logo_jimny.png";
import Logospresso from "../assets/automobile/home/img/logo_s-presso.png";
import Logoscross from "../assets/automobile/home/img/logo_scross.png";
import Logoswift from "../assets/automobile/home/img/logo_swift.png";
import Logoswiftsport from "../assets/automobile/home/img/logo_swiftsport.png";
import Logosx4scross from "../assets/automobile/home/img/logo_sx4scross.png";
import Logovitara from "../assets/automobile/home/img/logo_vitara.png";
import Logoxl7 from "../assets/automobile/home/img/logo_xl7.png";

export const lists = [
  { logo: Logoalto, image: alto, name: "Alto" },
  { logo: Logoapv, image: apv, name: "Apv" },
  { logo: Logobaleno, image: baleno, name: "Baleno" },
  { logo: Logocarry, image: carry, name: "Carry" },
  { logo: Logocelerio, image: celerio, name: "Celerio" },
  { logo: Logociaz, image: ciaz, name: "Ciaz" },
  { logo: Logodzire, image: dzire, name: "Dzire" },
  { logo: Logoertiga, image: ertiga, name: "Ertiga" },
  { logo: Logoignis, image: ignis, name: "Ignis" },
  { logo: Logojimny, image: jimny, name: "Jimny" },
  { logo: Logospresso, image: spresso, name: "Spresso" },
  { logo: Logoscross, image: scross, name: "Scross" },
  { logo: Logoswift, image: swift, name: "Swift" },
  { logo: Logoswiftsport, image: swiftsport, name: "Swiftsport" },
  { logo: Logosx4scross, image: sx4scross, name: "Sx4scross" },
  { logo: Logovitara, image: vitara, name: "Vitara" },
  { logo: Logoxl7, image: xl7, name: "Xl7" },
];

const Modelsdropdown = () => {
  return (
    <div className="models-clip">
      <div className="models">
        {lists.map((list) => (
          <div className="clip">
            <li>
              <a className="car-list">
                <img className="car-img" src={list.image} alt={list.name} />

                <p>{list.name}</p>
              </a>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Modelsdropdown;
