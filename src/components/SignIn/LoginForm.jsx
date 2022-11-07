// Login Form and save information to local storage for future use in the app 
import React, { useState } from 'react';
import './LoginForm.css'


function LoginForm(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    if (email === "" | password === "") {
      alert("Please fill in all fields");
    } else {
      let login = {email, password}
      localStorage.setItem("Sign In", JSON.stringify(login));
    }
  };
  return (
    <>
    <form className="nuevoFormulario">
      <div className="nuevoFormulario">
        <label>Email
        <input
          type="email"
          autoComplete='current-email'
          placeholder="Email"
          className='form__input'
          onChange={(e) => setEmail(e.target.value)}
        />
        </label>
        <label>Password
        <input
          type="password"
          autoComplete='on'
          placeholder="Password"
          className='form__input'
          onChange={(e) => setPassword(e.target.value)}
        />
        </label>
      <div className="contenedorByP">
        <button className='buttonNuevoFormulario' onClick={submit}>Sign In</button>
        <p className="text-center">Or with</p>
        <button className='buttonNuevoFormulario' onClick={submit}>Login with Google</button>  
        <p className="text-center">If you are not registered</p>
        <button className='buttonNuevoFormulario' onClick={submit}>Sign Up</button>
      </div>
      </div>
    </form>
    </>
  );
};

export {LoginForm}
