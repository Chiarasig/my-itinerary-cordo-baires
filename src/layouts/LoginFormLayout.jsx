import React from "react";
import { LoginForm } from "../components/SignIn/LoginForm";
import LoginImg from "../Image/signinimg.png";

export default function LoginFormLayout() {
  return (
    <div className="loginLayout">
      <div className="tittleImgLogin">
        <img src={LoginImg} alt="RegisterImg" />
        <h1 className="SignUpH1">Sign In</h1>
      </div>
      <div className="formLogin">
        <LoginForm />
      </div>
    </div>
  );
}
