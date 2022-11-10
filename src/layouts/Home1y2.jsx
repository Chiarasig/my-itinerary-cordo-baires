import React from "react";
import CallToAction from "../components/Home1/CallToAction";
import Carrousel from "../components/Home2/Carrousel";
import { Link } from "react-router-dom";
import LogoImg from "../Image/LogoTimeToTravel.png";

export default function Home1y2() {
  return (
    <div className="mainHome">
            <div className="containerCallToAc g-2">
        {/*  <img className="logo" src="https://www.infoturchubut.ar/wp-content/uploads/2020/03/agencia-de-viajes.jpg" alt="Logo" /> */}
        <div>
          <Link to={"/hotels"}>
            <CallToAction title="Hotels" />
          </Link>
        </div>
        <div>
          <Link to={"/cities"}>
            <CallToAction title="Cities" />
          </Link>
        </div>
      </div>
        <h1 className="h1Time_Title">✈️ Time to travel ✈️</h1>
      <div className="carousselHome">
        <Carrousel />
      </div>
    </div>
  );
}
