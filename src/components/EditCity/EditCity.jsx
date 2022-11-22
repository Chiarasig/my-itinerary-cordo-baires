import React from "react";
import { useRef } from "react";
import "../../index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { BASE_URL } from "../../api/url";
import { useParams } from "react-router-dom";

export default function EditCity() {
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

  async function EditCity(event) {
    event.preventDefault();
    let editCity = {
      name: name.current.value,
      continent: continent.current.value,
      photo: photo.current.value,
      population: population.current.value,
      userId: userId.current.value,
    };
    try {
      let res = await axios.patch(`${BASE_URL}/city/${id}`, editCity);
      if (res.data.success) {
        toast.success("The city was successfully modified");
      } else {
        toast.error(res.data.message.join(" - - - - "));
        console.log(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form
        className="nuevoFormularioLogin"
        onSubmit={editHotel}
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
            Photo: URL
            <input
              className="inputHotelNew"
              name="photo1"
              accept="image/png, image/jpeg"
              type="text"
              autoComplete="on"
              placeholder="Photo"
              ref={photo1}
            />
            <input
              className="inputHotelNew"
              name="photo2"
              accept="image/png, image/jpeg"
              type="text"
              autoComplete="on"
              placeholder="Photo"
              ref={photo2}
            />
            <input
              className="inputHotelNew"
              name="photo3"
              accept="image/png, image/jpeg"
              type="text"
              autoComplete="on"
              placeholder="Photo"
              ref={photo3}
            />
          </label>
          <label className="labelLogin">
            Capacity
            <input
              className="inputHotelNew"
              type="text"
              autoComplete="on"
              placeholder="Capacity"
              ref={capacity}
            />
          </label>
          <div className="contenedorByP">
            <button
              className="buttonNuevoFormulario"
              type="submit"
              onClick={notify}
            >
              Modified a hotel
            </button>
          </div>
        </div>
        <ToastContainer />
      </form>
    </>
  );
}
