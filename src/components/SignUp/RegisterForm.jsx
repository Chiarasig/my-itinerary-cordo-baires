import React from "react";
import { useState, useRef } from "react";
import '../../index.css'

export default function RegisterForm() {
/*   const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); */
  const firstName = useRef(null)
  const lastName = useRef(null)
  const email = useRef(null)
  const password = useRef(null)
  const confirmPassword = useRef(null)
  /* const submit = () => {
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
  }; */

  let submit = (event) => {
    event.preventDefault();
        const data = {
          firstName: firstName.current.value,
          lastName: lastName.current.value,
          email: email.current.value,
          password: password.current.value,
          confirmPassword: confirmPassword.current.value
        };
        
    localStorage.setItem('user-registered', JSON.stringify(data))

    alert("You are signed up!")

    firstName.current.value=''
    lastName.current.value=''
    email.current.value=''
    password.current.value=''
    confirmPassword.current.value=''    
    }

  return (
    <>
      <form className="nuevoFormularioLogin">
        <div className="formInputLabelRegister">
          <label className='labelLogin'>
            First Name
            <input
              type="text"
              autoComplete="on"
              placeholder="First Name"
              className='inputLogin'
              ref={firstName}
              /* onChange={(e) => setFirstName(e.target.value)} */
            />
          </label>
          <label className='labelLogin'>
            Last Name
            <input
              type="text"
              autoComplete="on"
              placeholder="Last Name"
              className='inputLogin'
              ref={lastName}
              /* onChange={(e) => setLastName(e.target.value)} */
            />
          </label>
          <label className='labelLogin'>
            Email
            <input
              type="mail"
              autoComplete="current-email"
              placeholder="mail"
              className='inputLogin'
              ref={email}
            /*   onChange={(e) => setEmail(e.target.value)} */
            />
          </label>
          <label className='labelLogin'>
            Password
            <input
              type="password"
              autoComplete="on"
              placeholder="Password"
              className='inputLogin'
              ref={password}
             /*  onChange={(e) => setPassword(e.target.value)} */
            />
          </label>
          <label className='labelLogin'>
            Confirm Password
            <input
              type="password"
              autoComplete="on"
              placeholder="Confirm Password"
              className='inputLogin'
              ref={confirmPassword}
              /* onChange={(e) => setConfirmPassword(e.target.value)} */
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
