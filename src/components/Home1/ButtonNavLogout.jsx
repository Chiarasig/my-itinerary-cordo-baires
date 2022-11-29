import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import usersActions from "../../redux/actions/usersActions";


export const ButtonNavLogout = () => {
  const { signOff } = usersActions;
  let {user, userUpdate} = useSelector((store) => store.usersReducers);
  const { name, lastName, photo } = userUpdate;
  const dispatch = useDispatch();  
  let [mostrarOcultar, setMostrarOcultar] = useState(false);
  let hide = () => {
    setMostrarOcultar(!mostrarOcultar)
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to log out?")) {
    let token = JSON.parse(localStorage.getItem("token"));
    dispatch(signOff(token.token.user));
    localStorage.clear()
  }};

  return (
    <div>
      {mostrarOcultar ? 
      (<>
        <p onMouseEnter={hide} className="tittleNavbar"><Link to={"/profile"}>My profile 🡻</Link></p>
      <ul className="listLogout">
        <li className="flex">
          <img src={photo} alt={name} width={"50px"} height={"50px"} />
          <p className="tittleNavProfile">{`${name} ${lastName}`}</p>
        </li>
        <li>
          <button type="button" onClick={handleLogOut} className="buttonLogout">
            Log Out
          </button>
        </li>
      </ul>
      </>) : 
      (<>
      <p onClick={hide} className="tittleNavbar">My profile 🡻</p>
      </>)}

    </div>
  );
};
