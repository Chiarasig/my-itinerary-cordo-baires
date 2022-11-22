import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import myCitiesActions from "../../redux/actions/myCitiesActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MyCitiesCard() {
    
  const dispatch = useDispatch();
  const {cities} = useSelector((state) => state.myCitiesReducers);

  useEffect(() => {
    let userId = "636d5a9512a6c5227df1ef0c";
    if (cities && cities.length === 0) {
      dispatch(myCitiesActions.getMyCities(userId));
    }
  }, [cities]);

  const deleteCity = (event, idCity) => {
    event.preventDefault();
    if (window.confirm("Are you sure you want to delete this city?")) {
      dispatch(myCitiesActions.deleteMyCities(idCity));
      toast.success("City deleted successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
      toast();
    }
  };

  return (
    <>
      <div className="tittleMyHotels">
        <h2>My cities by userId</h2>
      </div>
      <div className="flex wrap w-100 justify-center align-center g-25 pb-3">
        {cities && cities.length > 0 ? (
          cities.map((cities) => (
            <div key={cities._id} className="myHotelCard">
              <img
                className="cardImgHotel"
                src={cities.photo}
                alt={cities.name}
              />
              <h3 className="subtittleCard">{cities.name}</h3>
              <Link
                to={`/cities/detail/${cities._id}`}
                className="viewMoreSubttitle"
              >
                <p className="viewMore">view more</p>
              </Link>
              <Link
                to={`/hotels/editHotel/${cities._id}`}
                className="viewMoreSubttitle"
              >
                <p className="viewMore">Editar</p>
              </Link>
              <div>
                <button onClick={(event) => deleteCity(event, `${cities._id}`)}>
                  Delete
                </button>
              </div>
              <ToastContainer/>
            </div>
          ))
        ) : (
          <h2>No results were found, please try again with another search</h2>
        )}
      </div>
    </>
  );
}
