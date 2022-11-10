import React from "react";
import { useParams } from "react-router-dom";
import Activiti from "./ActCity";

export default function DetailCity() {
  const { id } = useParams();

  const [city, setCity] = React.useState({});

  React.useEffect(() => {
    fetch(`/data/dataCity.json`)
      .then((res) => res.json())
      .then((res) => {
        setCity(res.find((city) => city.id === id));
      });
  }, [id]);
  return (
    <div className="containerDetailHotel">
      <div className="containerTittleDetailHotel">
       <h1 className="tittleDetail">City panel</h1> 
       </div>
      <div key={city.id} className="containerCardDetailHotel">
        <img className="cardDetailImg" src={city.photo} alt={city.name} />
        <div className="subttitleDetails">
        <h3 className="subtittleCardDetail">{city.name}</h3>
        <h3 className="subtittleCardDetail">Continent: {city.continent}</h3>
        <h3 className="subtittleCardDetail">Population: {city.population}</h3>
        </div>
      </div>
      <div className="containerShowTittleHotel">
        <div className="containerTittleDetailHotel">
        <h1 className="tittleDetail">Activities panel</h1>
        </div>
        <div className="containerCardShowsHotel">
        <Activiti idCity={city.id} />
        </div>
      </div>
    </div>
  );
}
