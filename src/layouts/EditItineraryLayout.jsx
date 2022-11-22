import React from 'react'
import EditItinerary from '../components/EditItinerary/EditItinerary';
import LogReg from "../Image/registerCiudad.png";
import "../index.css";

export default function EditItineraryLayout() {
    return (
      
      <div className="editItineraryLayout">
        <div className="tittleImgLogin">
        <img className="logoReg" src={LogReg} alt="Logo register" />
          <h1 className="SignUpH1">Edit itinerary</h1>
        </div>
        <div className="formLogin">
          <EditItinerary/>
        </div>
      </div>
    )
  }
