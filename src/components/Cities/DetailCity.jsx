import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Activiti from "./ActCity";
import axios from 'axios';
import {BASE_URL} from '../../api/url'
import '../../index.css';

export default function DetailCity() {
  const { id } = useParams();

  const [city, setCity] = React.useState({});

  useEffect(() => {
    axios.get(`${BASE_URL}/cities/${id}`)
    .then((res) => {
      console.log(res.data.response);
        setCity(res.data.response);
      });
  }, [id]);
  return (
    <div className="containerDetailHotel">
      <div className="containerTittleDetailHotel">
       <h1 className="tittleDetail">City panel</h1> 
       </div>
      <div key={city._id} className="containerCardDetailHotel">
        <img className="cardDetailImg" src={city.photo} alt={city.name} />
        <div className="subttitleDetails">
        <h3 className="subtittleCardDetail">{city.name}</h3>
        <h3 className="subtittleCardDetail">Continent: {city.continent}</h3>
        <h3 className="subtittleCardDetail">Population: {city.population}</h3>
        <h3 className="subtittleCardDetail"> <img className="stlye_img_admind" src={city?.userId?.photo} alt="" /> Admin User: {city?.userId?.name}</h3>
        </div>
      </div>
      <div className="containerShowTittleHotel">
        <div className="containerTittleDetailHotel">
        <h1 className="tittleDetail">Activities panel</h1>
        </div>
        <div className="containerCardShowsHotel">
        <Activiti idCity={city._id} />
        </div>
      </div>
    </div>
  );
}
