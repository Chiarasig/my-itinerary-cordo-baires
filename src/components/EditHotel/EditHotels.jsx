import React from "react";
import { useRef } from "react";
import "../../index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { BASE_URL } from "../../api/url";
import { useParams } from "react-router-dom";

export default function EditHotels() {
  const notify = () => {
    toast();
  };
  let { id } = useParams();
  let information = useRef();
  let name = useRef();
  let photo1 = useRef();
  let photo2 = useRef();
  let photo3 = useRef();
  let capacity = useRef();

  async function editHotel(event) {
    event.preventDefault();
    let editHotel = {
      name: name.current.value,
      photo: [photo1.current.value, photo2.current.value, photo3.current.value],
      capacity: capacity.current.value,
    };
    try {
      let res = await axios.patch(`${BASE_URL}/hotel/${id}`, editHotel);
      if (res.data.success) {
        toast.success("The hotel was successfully modified");
      } else {
        toast.error(res.data.message.join(" - - - - "));
      }
    } catch (error) {
      console.log(error);
    }
  }

  return ( <>
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
