import React, { useRef } from "react";
/* import { useState } from "react"; */
import "../../index.css";
import axios from "axios";
// import { useEffect } from "react"; //Se usa para traer info y controlar la asincronía //
import { BASE_URL } from "../../api/url";

export default function NewCity() {
  //  useEffect(() => {
  //   axios.post(`${BASE_URL}/`)
  //   }, [])

  /*     const [userId, setuserId] = useState("");
    const [name, setName] = useState ("");
    const [photo, setPhoto] = useState ("");
    const [continent, setContinent] = useState ("");
    const [population, setPopulation] = useState(""); */
  const userId = useRef(null);
  const name = useRef(null);
  const photo = useRef(null);
  const continent = useRef(null);
  const population = useRef(null);

  /*    const submit = (e) => {
        e.preventDefault();
      if (userId === "" || name === "" || photo === "" || continent === "" || population === ""){
        alert("Please fill in all fields")
      } else {
        let city = {userId, name, photo, continent, population}
        axios.post(`${BASE_URL}/city`, city)
        .then(res => {
        })
      }
    } */
  let submit = (event) => {
    event.preventDefault();
    const city = {
      userId: userId.current.value,
      name: name.current.value,
      photo: photo.current.value,
      continent: continent.current.value,
      population: population.current.value,
    };
    axios.post(`${BASE_URL}/city`, city).then((res) => {});

    alert("Your city was successfully registered!");

      userId.current.value = ""
      name.current.value = ""
      photo.current.value = ""
      continent.current.value = ""
      population.current.value = ""
  };

  return (
    <>
      <form className="nuevoFormularioLogin">
        <div className="formInputLabelRegister">
          <label className="labelLogin">
            userId:
            <input
              className="inputHotelNew"
              type="text"
              autoComplete="on"
              placeholder="userId mongoose"
              ref={userId}
              /*          onChange={(e) => setuserId(e.target.value)} */
            />
          </label>
          <label className="labelLogin">
            Name
            <input
              className="inputHotelNew"
              type="text"
              autoComplete="on"
              placeholder="Name"
              ref={name}
              /*        onChange={(e) => setName(e.target.value)} */
            />
          </label>
          <label className="labelLogin">
            Continent
            <input
              className="inputHotelNew"
              type="text"
              autoComplete="on"
              placeholder="Continent"
              /* onChange={(e) => setContinent(e.target.value)} */
              ref={continent}
            />
          </label>
          <label className="labelLogin">
            Photo: URL
            <input
              className="inputHotelNew"
              type="text"
              autoComplete="on"
              placeholder="Photo"
              /* onChange={(e) => setPhoto(e.target.value)} */
              ref={photo}
            />
          </label>
          <label className="labelLogin">
            Population
            <input
              className="inputHotelNew"
              type="text"
              autoComplete="on"
              placeholder="Population"
              /*  onChange={(e) => setPopulation(e.target.value)} */
              ref={population}
            />
          </label>
          <div className="contenedorByP">
            <button className="buttonNuevoFormulario" onClick={submit}>
              Register city
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
