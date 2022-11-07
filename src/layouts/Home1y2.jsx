import React from "react";
import CallToAction from "../components/Home1/CallToAction";
import Carrousel from "../components/Home2/Carrousel";
import { Link } from "react-router-dom";
import LogoImg from '../Image/LogoTimeToTravel.png'

export default function Home1y2() {
  return (
    <div className="logoCall">
      <div>
        <img className="logo" src={LogoImg} alt="Logo" />
        <div className="callToAc">
          <Link to={"/hotels"}>
            <CallToAction title="Hotels" />
          </Link>
          <Link to={"/cities"}>
            <CallToAction title="Cities" />
          </Link>
        </div>
      </div>
      <div>
        <Carrousel />
      </div>
    </div>
  );
}
