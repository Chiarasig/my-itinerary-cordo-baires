import React from "react";
import Profile from "../components/Profile";
import "../index.css";
import RegisterImg from "../Image/registerimg.png"

export default function ProfileLayout() {
  return (
    <div className="myProfile">
      <div className="tittleImgLogin">
        <img src={RegisterImg} alt="Register image" />
        <h1 className="SignUpH1">My profile</h1>
      </div>
      <div className="formLogin">
        <Profile />
      </div>
    </div>
  );
}
