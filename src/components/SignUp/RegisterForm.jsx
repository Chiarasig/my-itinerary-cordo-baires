import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "../../api/url";
import axios from "axios";
import "../../index.css";

export default function RegisterForm() {
  const navigate = useNavigate();
  const notify = () => {
    toast();
  };
  const information = useRef();
  const name = useRef();
  const lastName = useRef();
  const photo = useRef();
  const age = useRef();
  const mail = useRef();
  const password = useRef();

  async function register(event) {
    event.preventDefault();
    let newUser = {
      name: name.current.value,
      lastName: lastName.current.value,
      role: "user",
      photo: photo.current.value,
      age: age.current.value,
      mail: mail.current.value,
      password: password.current.value,
    };
    try {
      let res = await axios.post(`${BASE_URL}/auth/sign-up`, newUser);
      if (res.data.success) {
        toast.success("User registered successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error(res.data.message.join(" - - - - "));
      }
    } catch (error) {
      console.log(error);

    }
      name.current.value= "";
      lastName.current.value= "";
      photo.current.value="";
      age.current.value="";
      mail.current.value="";
      password.current.value="";
  }

  return (
    <>
      <form 
        className="nuevoFormularioLogin"
        onSubmit={register}
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
            Lastname
            <input
              className="inputHotelNew"
              type="text"
              autoComplete="on"
              placeholder="Lastname"
              ref={lastName}
            />
          </label>
          <label className="labelLogin">
            Photo:
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
            Age
            <input
              className="inputHotelNew"
              type="number"
              autoComplete="on"
              placeholder="Age"
              ref={age}
            />
          </label>
          <label className="labelLogin">
            Mail
            <input
              type="mail"
              autoComplete="current-email"
              placeholder="mail"
              className="inputLogin"
              ref={mail}
            />
          </label>
          <label className="labelLogin">
            Password
            <input
              type="password"
              autoComplete="on"
              placeholder="Password"
              className="inputLogin"
              ref={password}
            />
          </label>
          <div className="contenedorByP">
            <button 
              className="buttonNuevoFormulario"
              type="submit"
              onClick={notify}
              >
              Sign Up
            </button>
            <p className="text-center">Or with</p>
            <button className="buttonNuevoFormulario">
              Register with Google
            </button>
            <p className="text-center">If you already registered</p>
            <button className="buttonNuevoFormulario">
              Sign In
            </button>
          </div>
        </div>
        <ToastContainer />
      </form>
    </>
  );
}
