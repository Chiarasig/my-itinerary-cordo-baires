import React from "react";
import { useNavigate, useParams } from "react-router-dom";
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
    <div className="flex wrap">
       <h1 className="tittleDetail text-center">City panel</h1> 
      <div key={city.id} className="citiesCard text-center">
        <img className="cardImg" src={city.photo} alt={city.name} />
        <h3 className="subtittleCard">{city.name}</h3>
        <h3 className="subtittleCard">{city.price}</h3>
      </div>
      <div className="flex wrap">
        <h1 className="tittleDetail">Activities panel</h1>
        <Activiti idCity={city.id} />
      </div>
    </div>
  );
}
