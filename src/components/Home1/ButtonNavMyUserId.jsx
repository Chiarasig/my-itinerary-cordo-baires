import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../../index.css'

export default function ButtonNavSig(props) {
  let user = useSelector((store) => store.usersReducers)
  const { role } = user;
  let { texto1, texto2, titulo, tituloflecha, texto3, texto4 } = props;
  let [mostrarOcultar, setMostrarOcultar] = useState(false);
  let hide = () => {
    setMostrarOcultar(!mostrarOcultar)
  };
  return (
    <div>
      {mostrarOcultar ? (
        <>
          <p onMouseEnter={hide} className="tittleNavbar">{titulo}</p>
          <ul>
            {role && role === 'admin' ? (
              <>
                <li>
                <Link to={"/mycities"}>{texto1}</Link>
                </li>
                <li>
                  <Link to={"/myhotels"}>{texto2}</Link>
                </li>
              </>
            ) : null}
            {role && (role === 'user' || role === 'admin') ? (
              <>
                <li>
                  <Link to={"/myitinerary"}>{texto3}</Link>
                </li>
                <li>
                  <Link to={"/myshows"}>{texto4}</Link>
                </li>
              </>
              ) : null }
          </ul>
        </>
      ) : (
        <p onClick={hide}>{titulo}</p>
      )}
    </div>
  );
}
