import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import usersActions from "../../redux/actions/usersActions";


export const ButtonNavLogout = () => {
  const { signOff } = usersActions;
  let user = useSelector((store) => store.usersReducers);
  const { name, lastName, photo } = user;
  const dispatch = useDispatch();

  const handleLogOut = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to log out?")) {
    let token = JSON.parse(localStorage.getItem("token"));
    dispatch(signOff(token.token.user));
    localStorage.clear()
  }};

  return (
    <div>
      <ul className="listLogout">
        <li>
          <img src={photo} alt={name} width={"50px"} height={"50px"} />
        </li>
        <li>
          <p>{`${name} ${lastName}`}</p>
        </li>
        <li>
          <Link to={"/profile"}>My Profile</Link> 
        </li>
        <li>
          <button type="button" onClick={handleLogOut} className="buttonLogout">
            Log Out
          </button>
        </li>
      </ul>
    </div>
  );
};
