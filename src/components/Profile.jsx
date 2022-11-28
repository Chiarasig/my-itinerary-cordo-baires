import { useEffect, useRef } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import usersAction from "../redux/actions/usersActions";
import Swal from "sweetalert2";
import axios from "axios";
import { BASE_URL } from "../api/url"

import { Link as NavLink } from "react-router-dom";

export default function Profile() {
  const dispatch = useDispatch();
  const { idUser, user } = useSelector((state) => state.usersReducers);
  const { getUser, updateUser } = usersAction;

  useEffect(() => {
    dispatch(getUser(idUser));

    // eslint-disable-next-line
  }, []);
  console.log(user);

  let information = useRef();
  let name = useRef();
  let lastName = useRef();
  let photo = useRef();
  let age = useRef();
  let mail = useRef();

  async function editUser(event) {
    event.preventDefault();
    let editUser = {
      name: name.current.value,
      lastName: lastName.current.value,
      photo: photo.current.value,
      age: age.current.value,
      mail: mail.current.value,
    };

    Swal.fire({
      icon: "question",
      title: " Do you want to save the changes?",
      showConfirmButton: true,
      iconColor: "#fc4c4e",
      confirmButtonColor: "#fc4c4e",
      confirmButtonText: "Yes",
      showCancelButton: true,
    });
    try {
      let res = await axios.patch(`${BASE_URL}/auth/me/${idUser}`, editUser);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    name.current.value = "";
    lastName.current.value = "";
    photo.current.value = "";
    age.current.value = "";
    mail.current.value = "";
  }

  return (
    <div className="formHotelAdmin">
      <div className="flex justify-center column align-center w-100">
        <h3>{user.name}</h3>
        <img src={user.photo} className="photo-user-profile" />
      </div>
      <form className="nuevoFormularioLogin" onSubmit={editUser} ref={information}>
        <div className="formInputLabel">
          <label className="labelLogin">
            Name
            <input className="inputLogin"
              defaultValue={user.name}
              type="text"
              placeholder="Insert name"
              id="id"
              ref={name}
            />
          </label>
          <label className="labelLogin">
            lastName
            <input className="inputLogin"
              defaultValue={user.lastName}
              type="text"
              placeholder="Insert last name"
              id="lastName"
              ref={lastName}
            />
          </label>
          <label className="labelLogin">
            Photo
            <input className="inputLogin"
              defaultValue={user.photo}
              type="text"
              placeholder="Insert your photo"
              id="photo1"
              ref={photo}
            />
          </label>
          <label className="labelLogin">
            Age
            <input className="inputLogin"
              defaultValue={user.age}
              type="text"
              placeholder="Insert your age"
              id="photo2"
              ref={age}
            />
          </label>
          <label className="labelLogin">
            Email
            <input className="inputLogin"
              defaultValue={user.mail}
              type="text"
              placeholder="Insert your Email"
              id="photo3"
              ref={mail}
            />
          </label>
        </div>
        <div className="flex justify-around  p-1 wrap g-25">
          <input
            type="submit"
            required
            className="btn"
            value="EDIT MY PROFILE"
          />
          <NavLink className="w-100 margin-none flex justify-end" to="/">
            <button className="back">Back to home</button>
          </NavLink>
        </div>
      </form>
    </div>
  );
}
