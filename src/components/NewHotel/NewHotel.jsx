import React from "react";
import { useState } from "react";
import '../../index.css';

export default function NewHotel() {
  const [id, setId] = useState("");
  const [name, setName] = useState ("");
  const [photo, setPhoto] = useState ("");
  const [capacity, setCapacity] = useState ("");
  
  const submit = () => {
    if (id === "" || name === "" || photo === "" || capacity === ""){
      alert("Please fill in all fields")
    } else {
      let hotel = {id, name, photo, capacity}
      localStorage.setItem("hotel", JSON.stringify(hotel))
    }
  }
    return (
    <>
     <form className="nuevoFormularioLogin">
      <div className='formInputLabelRegister'>
        <label className='labelLogin'>Id: 
        <input className='inputHotelNew'
          type="text" autoComplete="on" placeholder="Ej: Id: city13 (el numero tiene que ser mayor a 12)"
          onChange={(e) => setId(e.target.value)}
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
