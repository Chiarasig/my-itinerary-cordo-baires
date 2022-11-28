import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "../../api/url";
import "../../index.css";
import myHotelsAction from "../../redux/actions/myHotelsActions";

export default function NewShow() {
  const dispatch = useDispatch();
  const { idUser: userId, token} = useSelector((state) => state.usersReducers);
  const hotels = useSelector((state) => state.myHotelsReducers.hotels);
    const notify = () => {
        toast();
      };

    let information = useRef();
    let name = useRef();
    let photo = useRef();
    let description = useRef();
    let price = useRef();
    let date = useRef();
    let hotelId = useRef();

    useEffect(() => {
      dispatch(myHotelsAction.getMyHotels(userId));
    }, []);
    
    async function editShow(event) {
        event.preventDefault();
        let createShow = {
          name: name.current.value,
          photo: photo.current.value,
          description: description.current.value,
          price: price.current.value,
          date: date.current.value,
          userId,
          hotelId: hotelId.current.value,
        };

        let headers = { headers: { Authorization: `Bearer ${token}` } }
        try {
          let res = await axios.post(`${BASE_URL}/shows`, createShow, headers);
          if (res.data.success) {
            toast.success("The show was successfully created");
          } else {
            toast.error(res.data.message.join(" - - - - "));
          }
        } catch (error) {
          console.log(error);
        }
      }

  const handleSelect = (event) => {
    console.log(event.target.value);
    hotelId = event.target.value
  }

  return (<>
    <form
      className="nuevoFormularioLogin"
      onSubmit={editShow}
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
          Date
          <input
            className="inputHotelNew"
            type="date"
            autoComplete="on"
            placeholder="Date"
            ref={date}
          />
        </label>
        <label className="labelLogin">
          Hotel
          <select className="inputHotelNew" onChange={handleSelect} ref={hotelId  }>
            {hotels.map((hotel) => (
              <option value={hotel._id}>{hotel.name}</option>
            ))}
          </select>
        </label>
        <div className="contenedorByP">
          <button
            className="buttonNuevoFormulario"
            type="submit"
            onClick={notify}
          >
            Create a show
          </button>
        </div>
      </div>
      <ToastContainer />
    </form>
  </>
);
}
