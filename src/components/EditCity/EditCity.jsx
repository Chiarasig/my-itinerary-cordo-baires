import React from "react";
import { useRef } from "react";
import "../../index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { BASE_URL } from "../../api/url";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function EditCity() {
  const { token } = useSelector((state) => state.usersReducers);
  const notify = () => {
    toast();
  };
  let { id } = useParams();
  let information = useRef();
  let name = useRef();
  let continent = useRef();
  let photo = useRef();
  let population = useRef();
  let userId = useRef();

  async function editCity(event) {
    event.preventDefault();
    let editCity = {
      name: name.current.value,
      continent: continent.current.value,
      photo: photo.current.value,
      population: population.current.value,
      userId: userId.current.value,
    };

    let headers = { headers: { Authorization: `Bearer ${token}` } }
    
    try {
      let res = await axios.put(`${BASE_URL}/city/${id}`, editCity, headers);
      if (res.data.success) {
        toast.success("The city was successfully modified");
      } else {
        toast.error(res.data.message.join(" - - - - "));
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form
        className="nuevoFormularioLogin"
        onSubmit={editCity}
        ref={information}
      >
        <div className="formInputLabelRegister">
          <label className="labelLogin">
            Name
            <input
              className="inputHotelNew"
              type="text"
              autoComplete="on"
              placeholder="Name"
              ref={name}
            />
          </label>
          <label className="labelLogin">
            Continent
            <input
              className="inputHotelNew"
              type="text"
              autoComplete="on"
              placeholder="continent"
              ref={continent}
            />
          </label>
          <label className="labelLogin">
            Photo: URL
            <input
              className="inputHotelNew"
              name="photo"
              accept="image/png, image/jpeg"
              type="text"
              autoComplete="on"
              placeholder="Photo"
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
              ref={population}
            />
          </label>
          <label className="labelLogin">
          UserId
            <input
              className="inputHotelNew"
              type="text"
              autoComplete="on"
              placeholder="UserId"
              ref={userId}
            />
          </label>
          <div className="contenedorByP">
            <button
              className="buttonNuevoFormulario"
              type="submit"
              onClick={notify}
            >
              Modified a city
            </button>
          </div>
        </div>
        <ToastContainer />
      </form>
    </>
  );
}
