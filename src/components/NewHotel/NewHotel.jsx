import React from "react";
import { useState } from "react";
import '../../index.css';
import axios from 'axios';
import {BASE_URL} from '../../api/url'

export default function NewHotel() {
  const [userId, setUserId] = useState("");
  const [name, setName] = useState ("");
  const [photo, setPhoto] = useState ("");
  const [capacity, setCapacity] = useState ("");
  
  const submit = (e) => {
     e.preventDefault();
    if (userId === "" || name === "" || photo === "" || capacity === ""){
      alert("Please fill in all fields")
    } else {
      let hotel = {userId, name, photo, capacity}
      axios.post(`${BASE_URL}/hotel`, hotel)
        .then(res => {
          console.log(res)
        })
    }
  }
    return (
    <>
     <form className="nuevoFormularioLogin">
      <div className='formInputLabelRegister'>
        <label className='labelLogin'>User Id: 
        <input className='inputHotelNew'
          type="text" autoComplete="on" placeholder="userId mongoose"
          onChange={(e) => setUserId(e.target.value)}
        />
        </label>
        <label className='labelLogin'>Name
        <input className='inputHotelNew'
          type="text" autoComplete="on" placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        </label>
        <label className='labelLogin'>Capacity
        <input className='inputHotelNew'
          type="text" autoComplete="on" placeholder="Capacity"
          onChange={(e) => setCapacity(e.target.value)}
        />
        </label>
        <label className='labelLogin'>Photo: URL
        <input className='inputHotelNew'
          type="text" autoComplete="on" placeholder="Photo"
          onChange={(e) => setPhoto(e.target.value)}
        />
        <input className='inputHotelNew'
          type="text" autoComplete="on" placeholder="Photo"
          onChange={(e) => setPhoto(e.target.value)}
        />
        <input className='inputHotelNew'
          type="text" autoComplete="on" placeholder="Photo"
          onChange={(e) => setPhoto(e.target.value)}
        />
        </label>
        <div className="contenedorByP">
          <button className="buttonNuevoFormulario" onClick={submit}>Register hotel</button>
        </div>
        </div>
     </form>
    </>
  );
}
