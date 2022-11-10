import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../index.css";

export default function ButtonNavNew(props) {
    let { texto1, texto2, titulo } = props;
    let [mostrarOcultar, setMostrarOcultar] = useState(false);
    let hide = () => {
        setMostrarOcultar(!mostrarOcultar);
        console.log(mostrarOcultar);
      };
  return (
    <div>
      {mostrarOcultar ? (
        <>
          <p className="tittleNavbar" onMouseEnter={hide}>{titulo}</p>
          <ul>
            <li>
            <Link to={"/newcity"}>{texto1}</Link>
            </li>
            <li>
              <Link to={"/newhotel"}>{texto2}</Link>
            </li>
          </ul>
        </>
      ) : (
        <p onClick={hide}>{titulo}</p>
      )}
    </div>
  );
}
