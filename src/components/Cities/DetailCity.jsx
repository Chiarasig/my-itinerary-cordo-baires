import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Activiti from "./ActCity";
import axios from "axios";
import { BASE_URL } from "../../api/url";
import "../../index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DetailCity() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();

  const [city, setCity] = React.useState({});

  useEffect(() => {
    axios.get(`${BASE_URL}/cities/${id}`).then((res) => {
      setCity(res.data.response);
    });
  }, [id]);
  useEffect(()=>{
    if (searchParams.get("success") === "true") {
      console.log('entre al if toast');
      toast.success("The city was successfully created");
      toast();
    }
  },[])


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
          <h3 className="subtittleCardDetail">
            {" "}
            <img
              className="stlye_img_admind"
              src={city?.userId?.photo}
              alt=""
            />{" "}
            Admin User: {city?.userId?.name}
          </h3>
        </div>
      </div>
      <div className="containerShowTittleHotel">
        <div className="containerTittleDetailHotel">
          <h1 className="tittleDetail">Activities panel</h1>
        </div>
        <div className="containerCardShowsHotel">
          {city._id ? <Activiti idCity={city._id} /> : null}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
