import React from "react";
import { useRef } from "react";
import "../../index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { BASE_URL } from "../../api/url";
import { useNavigate} from "react-router-dom";

export default function NewCity() {
  const navigate = useNavigate();

  const notify = () => {
    toast();
  };
  let information = useRef();
  let name = useRef();
  let continent = useRef();
  let photo = useRef();
  let population = useRef();
  let userId = useRef();

  async function newCity() {
    let newCity = {
      name: name.current.value,
      continent: continent.current.value,
      photo: photo.current.value,
      population: population.current.value,
      userId: userId.current.value,
    };
    try {
      let res = await axios.post(`${BASE_URL}/city`, newCity);
      if (res.data.success) {
        navigate(`/cities/detail/${res.data.id}?success=true`);
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
        onSubmit={newCity}
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
              name="photo"
              accept="image/png, image/jpeg"
              type="text"
              autoComplete="on"
              placeholder="Photo"
              ref={photo}
            />
          </label>
          <label className="labelLogin">
            Continent
            <input
              className="inputHotelNew"
              type="text"
              autoComplete="on"
              placeholder="Continent"
              ref={continent}
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
            User Id:
            <input
              className="inputHotelNew"
              type="text"
              autoComplete="on"
              placeholder="UserId mongoose"
              ref={userId}
            />
          </label>
          <div className="contenedorByP">
            <button
              className="buttonNuevoFormulario"
              type="submit"
              onClick={notify}
            >
              Create a new city
            </button>
          </div>
        </div>
        <ToastContainer />
      </form>
    </>
  );
}

