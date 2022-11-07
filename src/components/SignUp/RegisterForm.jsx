import React from "react";
import { useState } from "react";
import "./RegisterForm.css";

export default function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submit = () => {
    if (
      (firstName === "",
      lastName === "",
      email === "",
      password === "",
      confirmPassword === "")
    ) {
      alert("Please fill in all fields");
    } else {
      let register = { firstName, lastName, email, password, confirmPassword };
      localStorage.setItem("Register", JSON.stringify(register));
    }
  };
  return (
    <>
      <form className="nuevoFormulario">
        <div className="nuevoFormulario">
          <label>
            First Name
            <input
              type="text"
              autoComplete="on"
              placeholder="First Name"
              className="form__input"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label>
            Last Name
            <input
              type="text"
              autoComplete="on"
              placeholder="Last Name"
              className="form__input"
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label>
            Email
            <input
              type="mail"
              autoComplete="current-email"
              placeholder="mail"
              className="form__input"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              autoComplete="on"
              placeholder="Password"
              className="form__input"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            Confirm Password
            <input
              type="password"
              autoComplete="on"
              placeholder="Confirm Password"
              className="form__input"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <div className="contenedorByP">
            <button className="buttonNuevoFormulario" onClick={submit}>
              Sign Up
            </button>
            <p className="text-center">Or with</p>
            <button className="buttonNuevoFormulario" onClick={submit}>
              Register with Google
            </button>
            <p className="text-center">If you already registered</p>
            <button className="buttonNuevoFormulario" onClick={submit}>
              Sign In
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
