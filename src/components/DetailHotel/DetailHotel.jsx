import React from "react";
import { useParams } from "react-router-dom";
import HotelShows from "./HotelShows";
import '../../index.css'

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
    <div>
      <div className="flex column">
        <h1 className="tittleDetail">Panel de Hoteles</h1>
        </div>
      <div key={hotel.id} className="citiesCard text-center">
        <img className="cardImg" src={hotel.photo} alt={hotel.name} />
        <h3 className="subtittleCard">{hotel.name}</h3>
        <h3 className="subtittleCard">{hotel.price}</h3>
      </div>
      <div>
      <h1 className="tittleDetail">Panel de shows</h1>
        <HotelShows idHotel={hotel.id} />
      </div>
    </div>
  );
}
