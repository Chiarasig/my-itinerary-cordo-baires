import React, { useState } from "react";
import "../../index.css";


export default function HotelShows(props) {
  const { idHotel } = props;
  const [shows, setShows] = React.useState([]);
  let [mostrarOcultar, setMostrarOcultar] = useState(false);
  let hide = () => {
    setMostrarOcultar(!mostrarOcultar);
    console.log(mostrarOcultar);
  };

  React.useEffect(() => {
    fetch(`/data/dataShow.json`)
      .then((res) => res.json())
      .then((res) => {
        setShows(res.filter((obj) => obj.hotelId === idHotel));
      });
  }, [idHotel]);
  console.log(shows);

  return (
    <div className="cardsShows">
      {shows.length !== 0
        ? shows.map((show) => (
            <div key={show.id} className="citiesCard text-center">
              <img className="cardImg" src={show.photo} alt={show.name} />
              <h3 className="subtittleCard">Event: {show.name}</h3>
              <h3 className="subtittleCard">Price: {show.price}</h3>
              <h3 className="subtittleCard">Description: {show.description}</h3>
            </div>
          ))
        : null}
        <div>
          {mostrarOcultar ? 
          (<>
            
            <p onClick={hide}>COMENTARIOS</p>
            <input type="text" placeholder="Tus comentarios" />
            </>
          ) : 
          (
            <>
            <p onClick={hide}>CAJON DE COMENTARIOS</p>
            </>
          ) 

          }
        </div>
    </div>
  );
}
