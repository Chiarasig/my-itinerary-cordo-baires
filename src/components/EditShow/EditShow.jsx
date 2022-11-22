import React from "react";
import { useRef } from "react";
import "../../index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { BASE_URL } from "../../api/url";
import { useParams } from "react-router-dom";

export default function EditShow() {
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

    async function editShow(event) {
        event.preventDefault();
        let editShow = {
          name: name.current.value,
          photo: photo.current.value,
          description: description.current.value,
          price: price.current.value,
          date: date.current.value,
        };
        try {
          let res = await axios.patch(`${BASE_URL}/shows/${id}`, editShow);
          if (res.data.success) {
            toast.success("The show was successfully modified");
          } else {
            toast.error(res.data.message.join(" - - - - "));
          }
        } catch (error) {
          console.log(error);
        }
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
