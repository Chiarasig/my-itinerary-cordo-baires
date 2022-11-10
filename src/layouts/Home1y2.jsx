import React from "react";
import CallToAction from "../components/Home1/CallToAction";
import Carrousel from "../components/Home2/Carrousel";
import { Link } from "react-router-dom";
import LogoImg from '../Image/LogoTimeToTravel.png'

export default function Home1y2() {
  return (
    <div className="mainHome">
      <div>
        <div className="containerCallToAc">
       {/*  <img className="logo" src="https://www.infoturchubut.ar/wp-content/uploads/2020/03/agencia-de-viajes.jpg" alt="Logo" /> */}
          <Link to={"/hotels"}>
            <CallToAction title="Hotels" />
          </Link>
          <Link to={"/cities"}>
            <CallToAction title="Cities" />
          </Link>
        </div>
      </div>
      <div className="carousselHome">
        <Carrousel />
      </div>
    </div>
  );
}
