import React from "react";
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

export const carlogos = [
  { image: Logoalto, name: "Alto" },
  { image: Logoapv, name: "Apv" },
  { image: Logobaleno, name: "Baleno" },
  { image: Logocarry, name: "Carry" },
  { image: Logocelerio, name: "Celerio" },
  { image: Logociaz, name: "Ciaz" },
  { image: Logodzire, name: "Dzire" },
  { image: Logoertiga, name: "Ertiga" },
  { image: Logoignis, name: "Ignis" },
  { image: Logojimny, name: "Jimny" },
  { image: Logospresso, name: "Spresso" },
  { image: Logoscross, name: "Scross" },
  { image: Logoswift, name: "Swift" },
  { image: Logoswiftsport, name: "Swiftsport" },
  { image: Logosx4scross, name: "Sx4scross" },
  { image: Logovitara, name: "Vitara" },
  { image: Logoxl7, name: "Xl7" },
];

const Carlogos = () => {
  return (
    <>
      {carlogos.map((logo) => (
        <img src={logo.image.match(lists.name)} alt={logo.name} />
      ))}
    </>
  );
};

export default Carlogos;
