import React from "react";
import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import HotelShows from "./HotelShows";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { BASE_URL } from "../../api/url";
import "../../index.css";

export default function DetailHotel() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();

  const [hotel, setHotel] = React.useState({});

  React.useEffect(() => {
    axios.get(`${BASE_URL}/hotels/${id}`)
      .then((res) => {
        setHotel(res.data.response);
      });
  }, [id]);

  useEffect(()=>{
    if (searchParams.get("success") === "true") {
      toast.success("The hotel was successfully created");
      toast();
    }
  },[])

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
          <h3 className="subtittleCardDetail">
            {" "}
            <img
              className="stlye_img_admind"
              src={hotel?.userId?.photo}
              alt=""
            />{" "}
            Admin User: {hotel?.userId?.name}
          </h3>
        </div>
      </div>
      <div className="containerShowTittleHotel">
        <div className="containerTittleDetailHotel">
          <h1 className="tittleDetail">Shows panel</h1>
        </div>
        <div className="containerCardShowsHotel">
          <HotelShows idHotel={hotel._id} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
