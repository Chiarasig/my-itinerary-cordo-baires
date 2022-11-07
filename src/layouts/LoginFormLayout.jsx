import React from "react";
import { LoginForm } from "../components/SignIn/LoginForm";
import LoginImg from "../Image/signinimg.png";

export default function LoginFormLayout() {
  return (
    <div className="flex column center Form_Font_Family">
      <div className="flex">
        <img src={LoginImg} alt="RegisterImg" />
        <h1 className="SignUpH1">Sign In</h1>
      </div>
      <div className="flex column center borderForm">
        <LoginForm />
      </div>
    </div>
  );
}
