import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../../index.css'

export default function ButtonNavSig(props) {
  let { texto1, texto2, titulo } = props;
  let [mostrarOcultar, setMostrarOcultar] = useState(false);
  //funcion para mostrar y ocultar el menu
  let hide = () => {
    setMostrarOcultar(!mostrarOcultar)
  };
  //Funcion para ocultar el menu al hacer click en un link
  return (
    <div>
      {mostrarOcultar ? (
        <>
          <p onMouseEnter={hide}><Link to={"/register"}>{titulo}</Link></p>
          <ul>
            <li>
            <Link to={"/signIn"}>{texto1}</Link>
            </li>
            <li>
              <Link to={"/register"}>{texto2}</Link>
            </li>
          </ul>
        </>
      ) : (
        <p onClick={hide}>{titulo}</p>
      )}
    </div>
  );
}
