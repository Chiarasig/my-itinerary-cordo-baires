import React, { useEffect, useRef, useState } from "react";
import "../../index.css";
import Flechita from "./Flechita";
import './Home2.css'

export default function Carrousel(props) {


  const [carrousel, setCarrousel] = useState([]);
  const [carouselTemp, setCarouselTemp] = useState([]);
  let [numeroACambiar, setNumeroACambiar] = useState(0);
  const primerImagen = useRef(0);
  const ultimaImagen= useRef(4);

  //Fetch de varios json (arrays) de hoteles y ciudades//
  useEffect(() => {
    fetch("./data/dataCarrousel.json")
      .then((res) => res.json())
      .then((res) => {
        setCarrousel(res);
        setCarouselTemp(res.slice(primerImagen.current,ultimaImagen.current));
      });
    // eslint-disable-next-line
  }, []);

  let [id, setId] = useState(0);
  useEffect(() => {
    if(carrousel.length > 0){
    let idInterval = setInterval(() => {
      next();
    }, 5000);
    setId(idInterval);
    return clearInterval(id);}
    // eslint-disable-next-line
  }, [numeroACambiar, carrousel]);

  let next = (e) => {
    if (carrousel.length >= ultimaImagen.current +4) {
      ultimaImagen.current=(ultimaImagen.current + 4);
      primerImagen.current=(primerImagen.current + 4);
      setNumeroACambiar(++numeroACambiar);
    } else {
      ultimaImagen.current=(4);
      primerImagen.current=(0);
      setNumeroACambiar(++numeroACambiar);
    }
    setCarouselTemp(carrousel.slice(primerImagen.current,ultimaImagen.current));
    clearInterval(id);
  };

  let prev = (e) => {
    if (primerImagen.current -4 >= 0) {
      ultimaImagen.current=(ultimaImagen.current - 4);
      primerImagen.current=(primerImagen.current - 4);
      setNumeroACambiar(--numeroACambiar);
    } else {
      ultimaImagen.current=(carrousel.length);
      primerImagen.current=(carrousel.length - 4);
      setNumeroACambiar(carrousel.length - 1);
    }
    setCarouselTemp(carrousel.slice(primerImagen.current,ultimaImagen.current));
    clearInterval(id);
  };

  return (
    <div className="containerCitiesCards">
      <Flechita verbo="🢀" onClick={prev} />
      {carouselTemp.length !== 0
        ? carouselTemp.map((carrousel) => (
            <div key={carrousel.id} className="citiesCard text-center">
              <img
                className="cardImg"
                src={carrousel.photo}
                alt={carrousel.name}
              />
              <h3 className="subtittleCard">{carrousel.name}</h3>
            </div>
          ))
        : null}
      <Flechita verbo="🢂" onClick={next} />
    </div>
  );
}
  //----------------------//
  //Aca estoy haciendo el useState para poder cargar la info con el setLocalHotels dentro de "LocalHotels"
  // const [localHotels, setLocalHotels] = useState([]);
  //----------------------//
  //Aca estoy dando nombre a la key "hotels" es lo que aparece como nombre del array en el local storage y el valor que quiero que tenga es lo que 
  //esta dentro de los parentesis de "JSON.stringify(res)" porque estoy usando un fetch de un json
  // localStorage.setItem("Hotels", JSON.stringify(res));
  //----------------------//
  //Aca estoy obteniendo con el "getItem" el valor de la key "hotels" y lo estoy parseando con el "JSON.parse" para poder usarlo
  // setLocalHotels(JSON.parse(localStorage.getItem("Hotels")));
  //----------------------//
  //Aca estoy usando el valor de declarado en el local storage y estoy usandolo en el map "localHotels.map"
  //localHotels.map((hotels) => (
  //   <div key={hotels.id} className="citiesCard text-center">
  //     <img className="cardImg" src={hotels.photo} alt={hotels.name} />
  //     <h3 className="subtittleCard">{hotels.name}</h3>  
  //   </div>