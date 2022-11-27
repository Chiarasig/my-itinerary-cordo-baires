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
  let photo1 = useRef();
  let photo2 = useRef();
  let photo3 = useRef();
  let description = useRef();
  let price = useRef();
  let duration = useRef();
  let userId = useRef();

  async function editActivity(event) {
    event.preventDefault();
    let editActivity = {
      name: name.current.value,
      photo: [photo1.current.value, photo2.current.value, photo3.current.value],
      description: description.current.value,
      price: price.current.value,
      duration: duration.current.value,
      userId: userId.current.value,
    };
    try {
      let res = await axios.put(`${BASE_URL}/itineraries/${id}`, editActivity);
      if (res.data.success) {
        toast.success("The activity was successfully modified");
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
        onSubmit={editActivity}
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
          Description
            <input
              className="inputHotelNew"
              type="text"
              autoComplete="on"
              placeholder="Description"
              ref={description}
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
          Price
            <input
              className="inputHotelNew"
              type="text"
              autoComplete="on"
              placeholder="Price"
              ref={price}
            />
          </label>
          <label className="labelLogin">
          Duration
            <input
              className="inputHotelNew"
              type="text"
              autoComplete="on"
              placeholder="Duration"
              ref={duration}
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
              Modified a Activity
            </button>
          </div>
        </div>
        <ToastContainer />
      </form>
    </>
  );
}
