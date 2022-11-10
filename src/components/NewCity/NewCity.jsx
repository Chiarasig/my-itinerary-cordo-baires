import React from "react";
import { useState } from "react";
import '../../index.css';

export default function NewCity() {
    const [id, setId] = useState("");
    const [name, setName] = useState ("");
    const [photo, setPhoto] = useState ("");
    const [continent, setContinent] = useState ("");
    const [population, setPopulation] = useState("");
    
    
    const submit = () => {
      if (id === "" || name === "" || photo === "" || continent === "" || population === ""){
        alert("Please fill in all fields")
      } else {
        let city = {id, name, photo, continent, population}
        localStorage.setItem("ciudad", JSON.stringify(city))
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
          <label className='labelLogin'>Continent
          <input className='inputHotelNew'
            type="text" autoComplete="on" placeholder="Continent"
            onChange={(e) => setContinent(e.target.value)}
          />
          </label>
          <label className='labelLogin'>Photo: son necesarias 3 URL
          <input className='inputHotelNew'
            type="text" autoComplete="on" placeholder="Photo"
            onChange={(e) => setPhoto(e.target.value)}
          />
          </label>
          <label className='labelLogin'>Population
          <input className='inputHotelNew'
            type="text" autoComplete="on" placeholder="Population"
            onChange={(e) => setPopulation(e.target.value)}
          />
          </label>
          <div className="contenedorByP">
            <button className="buttonNuevoFormulario" onClick={submit}>Register city</button>
          </div>
          </div>
       </form>
      </>
    );
}
