import React from 'react'
import LogReg from "../Image/registerCiudad.png";
import "../index.css";

export default function EditHotelLayout() {
    return (
      
      <div className="loginLayout">
        <div className="tittleImgLogin">
        <img className="logoReg" src={LogReg} alt="Logo register" />
          <h1 className="SignUpH1">Edit City</h1>
        </div>
        <div className="formLogin">
          <EditCity/>
        </div>
      </div>
    )
  }
