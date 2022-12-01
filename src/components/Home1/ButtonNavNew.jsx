import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../index.css";

export default function ButtonNavNew(props) {
    let { texto1, texto2, titulo, texto3 } = props;
    let [mostrarOcultar, setMostrarOcultar] = useState(false);
    let hide = () => {
        setMostrarOcultar(!mostrarOcultar)
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
            <li>
              <Link to={"/newreactions"}>{texto3}</Link>
            </li>
          </ul>
        </>
      ) : (
        <p onClick={hide}>{titulo}</p>
      )}
    </div>
  );
}
