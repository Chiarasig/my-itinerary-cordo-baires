import React from "react";
import Profile from "../components/Profile";
import "../index.css";
import RegisterImg from "../Image/registerimg.png"

export default function ProfileLayout() {
  return (
    <div className="myProfile">
      <div className="formLogin">
        <Profile />
      </div>
    </div>
  );
}
