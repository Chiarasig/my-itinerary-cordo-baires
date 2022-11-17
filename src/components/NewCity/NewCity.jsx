import React from "react";
import { useState } from "react";
import '../../index.css';
import axios from 'axios';
// import { useEffect } from "react"; //Se usa para traer info y controlar la asincronía //
import {BASE_URL} from '../../api/url'

export default function NewCity() {


//  useEffect(() => {
//   axios.post(`${BASE_URL}/`)
//   }, [])

    const [userId, setuserId] = useState("");
    const [name, setName] = useState ("");
    const [photo, setPhoto] = useState ("");
    const [continent, setContinent] = useState ("");
    const [population, setPopulation] = useState("");
    
    
    const submit = (e) => {
        e.preventDefault();
      if (userId === "" || name === "" || photo === "" || continent === "" || population === ""){
        alert("Please fill in all fields")
      } else {
        let city = {userId, name, photo, continent, population}
        axios.post(`${BASE_URL}/city`, city)
        .then(res => {
        })
      }
    }
      return (
      <>
       <form className="nuevoFormularioLogin">
        <div className='formInputLabelRegister'>
          <label className='labelLogin'>userId: 
          <input className='inputHotelNew'
            type="text" autoComplete="on" placeholder="userId mongoose"
            onChange={(e) => setuserId(e.target.value)}
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
          <label className='labelLogin'>Photo: URL
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
