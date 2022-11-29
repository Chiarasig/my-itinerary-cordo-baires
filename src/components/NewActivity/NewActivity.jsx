import React, { useEffect } from "react";
import { useRef } from "react";
import "../../index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { BASE_URL } from "../../api/url";
import { useDispatch, useSelector } from "react-redux";
import citiesActions from "../../redux/actions/citiesActions";

export default function NewActivity() {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cityReducer.cities);
  const { idUser: userId, token } = useSelector((state) => state.usersReducers);

  const notify = () => {
    toast();
  };
  let information = useRef();
  let name = useRef();
  let photo1 = useRef();
  let photo2 = useRef();
  let photo3 = useRef();
  let description = useRef();
  let price = useRef();
  let duration = useRef();
  let cityId = useRef();

  useEffect(() => {
    dispatch(citiesActions.getCities());
  }, []);

  async function createActivity(event) {
    event.preventDefault();
    let createActivity = {
      name: name.current.value,
      photo: [photo1.current.value, photo2.current.value, photo3.current.value],
      description: description.current.value,
      price: price.current.value,
      duration: duration.current.value,
      userId: userId,
      cityId: cityId,
    };

    let headers = { headers: { Authorization: `Bearer ${token}` } };

    try {
      console.log(createActivity);
      let res = await axios.post(
        `${BASE_URL}/itineraries`,
        createActivity,
        headers
      );
      if (res.data.success) {
        toast.success("The activity was successfully created");
      } else {
        toast.error(res.data.message.join(" - - - - "));
      }
    } catch (error) {
      console.log(error);
    }
    name.current.value='';
    photo1.current.value = "";
    photo2.current.value = "";
    photo3.current.value = "";
    description.current.value = "";
    price.current.value = "";
    duration.current.value = "";
    cityId = "";
  }

  const handleSelect = (event) => {
    cityId = event.target.value;
  };

  return (
    <>
      <form
        className="nuevoFormularioLogin"
        onSubmit={createActivity}
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
            CityId
            <select className="inputHotelNew" onChange={handleSelect}>
              <option value="">Select city</option>
              {cities
                ? cities.map((city) => (
                    <option key={city._id} value={city._id}>
                      {city.name}
                    </option>
                  ))
                : null}
            </select>
          </label>
          <div className="contenedorByP">
            <button
              className="buttonNuevoFormulario"
              type="submit"
              onClick={notify}
            >
              Create Activity
            </button>
          </div>
        </div>
        <ToastContainer />
      </form>
    </>
  );
}
