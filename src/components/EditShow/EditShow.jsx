import React, { useEffect } from "react";
import { useRef } from "react";
import "../../index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { BASE_URL } from "../../api/url";
import { useParams } from "react-router-dom";
import myHotelsAction from "../../redux/actions/myHotelsActions";
import { useDispatch, useSelector } from "react-redux";

export default function EditShow() {
  const dispatch = useDispatch();
  const { idUser: userId, token} = useSelector((state) => state.usersReducers);
  const hotels = useSelector((state) => state.myHotelsReducers.hotels);

    const notify = () => {
        toast();
      };

    let { id } = useParams();
    let information = useRef();
    let name = useRef();
    let photo = useRef();
    let description = useRef();
    let price = useRef();
    let date = useRef();
    let hotelId = useRef();
    let ownerUser = '';

    useEffect(() => {
      dispatch(myHotelsAction.getMyHotels(userId));
    }, []);

    useEffect(() => {
      axios
        .get(`${BASE_URL}/shows/${id}`)
        .then((res) => {
          let show = res.data.response[0];
          information.current.value = show.information;
          name.current.value = show.name;
          photo.current.value = show.photo;
          description.current.value = show.description;
          price.current.value = show.price;
          date.current.value = show.date;
          hotelId.current = show.hotelId._id;
          ownerUser = show.userId._id;
        })
        .catch((err) => console.log(err));
    }, []);

    async function editShow(event) {
        event.preventDefault();
        let editShow = {
          name: name.current.value,
          photo: photo.current.value,
          description: description.current.value,
          price: price.current.value,
          date: date.current.value,
        };

        let headers = { headers: { Authorization: `Bearer ${token}` } }
        try {
          let res = await axios.patch(`${BASE_URL}/shows/${id}`, editShow, headers);
          if (res.data.success) {
            toast.success("The show was successfully modified");
          } else {
            toast.error(res.data.message.join(" - - - - "));
          }
        } catch (error) {
          console.log(error);
        }
        name.current.value = "";
        photo.current.value = "";
        description.current.value = "";
        price.current.value = "";
        date.current.value = "";
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
          <select className="inputHotelNew" onChange={handleSelect}>
            {hotels.map((hotel, key) => (
              <option value={hotel._id} key={key}>{hotel.name}</option>
            ))}
          </select>
        </label>
        <div className="contenedorByP">
          <button
            className="buttonNuevoFormulario"
            type="submit"
            onClick={notify}
          >
            Modified a show
          </button>
        </div>
      </div>
      <ToastContainer />
    </form>
  </>
);
}
