import React from "react";
import NewHotel from "../components/NewHotel/NewHotel";
import LogReg from "../Image/registerCiudad.png";
import "../index.css";
import { Link } from "react-router-dom";

export default function NewHotelLayout() {
  return (
    <div className="newHotelLayout">
      <div className="tittleImgLogin">
        <img className="logoReg" src={LogReg} alt="Logo register" />
        <h1 className="SignUpH1">Register hotel</h1>
        <div className="linkHotels">
              <Link to="/hotels">
                <p  className="linkHotelSubtittle">Go hotels page</p>
              </Link>
            </div>
      </div>
      <div className="formLogin">
        <NewHotel />
      </div>
    </div>
  );
}
