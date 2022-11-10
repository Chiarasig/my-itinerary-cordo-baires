import React from "react";
import { useParams } from "react-router-dom";
import HotelShows from "./HotelShows";
import "../../index.css";

export default function DetailHotel() {
  const { id } = useParams();

  const [hotel, setHotel] = React.useState({});

  React.useEffect(() => {
    fetch(`/data/dataHotels.json`)
      .then((res) => res.json())
      .then((res) => {
        setHotel(res.find((hotel) => hotel.id === id));
      });
  }, [id]);
  return (
    <div className="containerDetailHotel Font_Arial">
      <div className="containerTittleDetailHotel">
        <h1 className="tittleDetail">Hotels panel</h1>
      </div>
      <div key={hotel.id} className="containerCardDetailHotel">
        <img className="cardDetailImg" src={hotel.photo} alt={hotel.name} />
        <div className="subttitleDetails">
          <h3 className="subtittleCardDetail">Name: {hotel.name}</h3>
          <h3 className="subtittleCardDetail">Capacity: {hotel.capacity}</h3>
        </div>
      </div>
      <div className="containerShowTittleHotel">
        <div className="containerTittleDetailHotel">
          <h1 className="tittleDetail">Shows panel</h1>
        </div>
        <div className="containerCardShowsHotel">
          <HotelShows idHotel={hotel.id} />
        </div>
      </div>
    </div>
  );
}
