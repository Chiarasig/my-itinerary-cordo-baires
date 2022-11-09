import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../../index.css'

export default function ButtonNav(props) {
  let { texto1, texto2, titulo } = props;
  let [mostrarOcultar, setMostrarOcultar] = useState(false);
  //funcion para mostrar y ocultar el menu
  let hide = () => {
    setMostrarOcultar(!mostrarOcultar);
    console.log(mostrarOcultar);
  };
  //Funcion para ocultar el menu al hacer click en un link
  return (
    <div>
      {mostrarOcultar ? (
        <>
        {/* Ejemplo para linkear los componentes de la NavBar */}
        {/* Usar "onMouseEnter" para que se muestre el menu al pasar el mouse por encima del boton */}
          <p  className="tittleNavbar" onMouseEnter={hide}><Link to={"/"}>{titulo}</Link></p>
          <ul>
            <li className="dropdawn">
              <Link to={"/cities"}>{texto1}</Link>
            </li>
            <li className="dropdawn">
              <Link to={"/hotels"}>{texto2}</Link>
            </li>
          </ul>
        </>
      ) : (
        <p onClick={hide}>{titulo}</p>
      )}
    </div>
  );
}
