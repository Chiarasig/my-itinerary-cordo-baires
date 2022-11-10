import React, { useEffect, useRef, useState } from "react";
import "../../index.css";
import Flechita from "./Flechita";
import '../../index.css'

export default function Carrousel(props) {


  const [carrousel, setCarrousel] = useState([]);
  const [carouselTemp, setCarouselTemp] = useState([]);
  let [numeroACambiar, setNumeroACambiar] = useState(0);
  const primerImagen = useRef(0);
  const ultimaImagen= useRef(4);

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
    <div className="containerCaroussel">
      <Flechita verbo="🢀" onClick={prev} />
      {carouselTemp.length !== 0
        ? carouselTemp.map((carrousel) => (
            <div key={carrousel.id} className="carousselCard">
              <img
                className="carousselImg"
                src={carrousel.photo}
                alt={carrousel.name}
              />
              <h3 className="carousselSubtittle">{carrousel.name}</h3>
            </div>
          ))
        : null}
      <Flechita verbo="🢂" onClick={next} />
    </div>
  );
}
