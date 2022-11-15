import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../api/url";
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
    axios.get(`${BASE_URL}/shows?hotelId=${idHotel}`)
      .then((res) => {
        setShows(res.data.response);
      });
  }, [idHotel]);
  console.log(shows);

  return (
    <div className="cardsShows">
      {shows.length !== 0
        ? shows.map((show) => (
            <div className="containerShowDetails">
                <img className="cardImgShow" src={show.photo} alt={show.name} />
              <div className="containerShowDetailsDescription"> 
                <h3 className="subtittleCardDetail">Event: {show.name}</h3>
                <h3 className="subtittleCardDetail">Price: {show.price}</h3>
                <h3 className="subtittleCardDetail">
                  Description: {show.description}
                </h3>
                <h3 className="subtittleCardDetail">Date: {show.date}</h3>
              </div>
            </div>
          ))
        : null}
      <div className="containerComent">
        {mostrarOcultar ? (
          <>
            <p onClick={hide}>COMMENT</p>
            <input type="text" placeholder="Your comment" />
          </>
        ) : (
          <>
            <p onClick={hide}>COMMENT BOX</p>
          </>
        )}
      </div>
    </div>
  );
}
