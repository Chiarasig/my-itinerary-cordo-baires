import React from 'react'
import EditShow from '../components/EditShow/EditShow';
import LogReg from "../Image/registerCiudad.png";
import "../index.css";

export default function EditShowLayout() {
  return (
    
    <div className="editShowLayout">
      <div className="tittleImgLogin">
      <img className="logoReg" src={LogReg} alt="Edit Show" />
        <h1 className="SignUpH1">Edit show</h1>
      </div>
      <div className="formLogin">
        <EditShow/>
      </div>
    </div>
  )
}