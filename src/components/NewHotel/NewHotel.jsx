import React, { useState } from "react";
import { useRef, useEffect } from "react";
import "../../index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { BASE_URL } from "../../api/url";
import { useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import citiesActions from "../../redux/actions/citiesActions";

export default function NewHotel() {
  let dispatch = useDispatch();
  const {idUser, token} = useSelector((state) => state.usersReducers);
  const {cities} = useSelector((state) => state.cityReducer);
  const {getCities} = citiesActions;
  const navigate = useNavigate();
  const notify = () => {
    toast();
  };
  let information = useRef();
  let name = useRef();
  let photo1 = useRef();
  let photo2 = useRef();
  let photo3 = useRef();
  let capacity = useRef();
  let cityId = useRef();

  useEffect(() => {
    dispatch(getCities());
  }, []);

  async function newHotel(event) {
    event.preventDefault();
    let newHotel = {
      name: name.current.value,
      photo: [photo1.current.value, photo2.current.value, photo3.current.value],
      capacity: capacity.current.value,
      cityId: cityId.current.value,
      userId: idUser,
    };

    let headers = { headers: { Authorization: `Bearer ${token}` } }

    try {
      let res = await axios.post(`${BASE_URL}/hotel`, newHotel, headers);
      if (res.data.success) {
        navigate(`/hotels/detail/${res.data.id}?success=true`);
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
        onSubmit={newHotel}
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
          <label className="labelLogin">
            City:
            <select className="inputHotelNew" ref={cityId}>
              {cities.map((city) => (
                <option value={city._id}>{city.name}</option>
              ))}
            </select>
          </label>
          <div className="contenedorByP">
            <button
              className="buttonNuevoFormulario"
              type="submit"
              onClick={notify}
            >
              Create a new hotel
            </button>
          </div>
        </div>
        <ToastContainer />
      </form>
    </>
  );
}
