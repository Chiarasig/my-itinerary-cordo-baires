import React, { useEffect } from "react";
import { useRef } from "react";
import "../../index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { BASE_URL } from "../../api/url";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import citiesActions from "../../redux/actions/citiesActions";

export default function EditCity() {
  const dispatch = useDispatch();
  const { idUser: userId, token } = useSelector( (state) => state.usersReducers);
  const cities = useSelector((state) => state.cityReducer.cities);
  const notify = () => {
    toast();
  };
  let { id } = useParams();
  let information = useRef();
  let name = useRef();
  let continent = useRef();
  let photo = useRef();
  let population = useRef();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/cities/${id}`)
      .then((res) => {
        let city = res.data.response;
        information.current.value = city.information;
        name.current.value = city.name;
        photo.current.value = city.photo;
        continent.current.value = city.continent;
        population.current.value = city.population;
      })
      .catch((err) => console.log(err));
  }, []);

  async function editCity(event) {
    event.preventDefault();
    let editCity = {
      name: name.current.value,
      continent: continent.current.value,
      photo: photo.current.value,
      population: population.current.value,
      userId,
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
    name: name.current.value= "";
    continent: continent.current.value= "";
    photo: photo.current.value= "";
    population: population.current.value = "";
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
