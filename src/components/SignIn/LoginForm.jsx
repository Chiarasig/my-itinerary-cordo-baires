import React, { useRef } from "react";
import Swal from "sweetalert2";
import "../../index.css";
import { useNavigate } from "react-router-dom";
import usersActions from "../../redux/actions/usersActions";
import { useDispatch } from "react-redux";

function LoginForm() {
  const mail = useRef();
  const password = useRef();
  let dispatch = useDispatch();
  let { enter } = usersActions;
  let form = useRef();
  let navegation = useNavigate();

  async function submitLogin(event) {
    event.preventDefault();

    let datos = {
      mail: mail.current.value,
      password: password.current.value,
    };
    try {
      let res = await dispatch(enter(datos));
      console.log(res);
      if (res.payload.success) {
        Swal.fire({
          icon: "success",
          title: res.payload.res.message,
          showConfirmButton: true,
          iconColor: "#fc4c4e",
          confirmButtonColor: "#fc4c4e",
        }).then((result) => {
          if (result.isConfirmed) {
            navegation(`/`);
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          confirmButtonColor: "#fc4c4e",
          iconColor: "#fc4c4e",
          title: res.payload.res.message,
          showConfirmButton: true,
        }).then((result) => {
          if (!result.isConfirmed) {
            navegation(`/signin`);
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
    mail.current.value = "";
    password.current.value = "";
  }

  return (
    <>
      <form className="nuevoFormularioLogin" onSubmit={submitLogin} ref={form}>
        <div className="formInputLabel">
          <label className="labelLogin">
            Mail
            <input
              className="inputLogin"
              type="mail"
              autoComplete="current-mail"
              placeholder="Mail"
              ref={mail}
            />
          </label>
          <label className="labelLogin">
            Password
            <input
              className="inputLogin"
              type="password"
              autoComplete="on"
              placeholder="Password"
              ref={password}
            />
          </label>
          <div className="contenedorByP">
            <button className="buttonNuevoFormulario">Sign In</button>
            <p className="text-center">Or with</p>
            <button className="buttonNuevoFormulario">Login with Google</button>
            <p className="text-center">If you are not registered</p>
            <button className="buttonNuevoFormulario">Sign Up</button>
          </div>
        </div>
      </form>
    </>
  );
}

export { LoginForm };
