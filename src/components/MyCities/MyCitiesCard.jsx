import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import myCitiesActions from "../../redux/actions/myCitiesActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MyCitiesCard() {
  const dispatch = useDispatch();
  const { cities } = useSelector((state) => state.myCitiesReducers);
  const {idUser, token} = useSelector((state) => state.usersReducers);
  const {getMyCities} = myCitiesActions;

  // useEffect(() => {
  //   if (cities && cities.length === 0) {
  //     dispatch(getMyCities(idUser));
  //   }
  // }, [cities]);

  useEffect(() => {
    dispatch(getMyCities(idUser));
  }, [idUser]); 

  console.log(token);
  const deleteCity = (event, idCity) => {
    event.preventDefault();
    let data= {
      token,
      idCity
    }
    if (window.confirm("Are you sure you want to delete this city?")) 
    {
      if (dispatch(myCitiesActions.deleteMyCities(data)));
      toast.success("City deleted successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
      toast();
      dispatch(
        myCitiesActions.cargarMyCities(
          cities.filter((cities) => cities._id !== idCity)
        )
      );
    }
  };

  return (
    <div className="containerMyHotels">
      <div className="tittleMyHotels">
        <h2 className="text-center">My cities whit userId</h2>
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
              <div className="buttonMyHotels">
                <Link
                  to={`/cities/detail/${cities._id}`}
                  className="viewMoreSubttitle"
                >
                  <p className="viewMore">view more</p>
                </Link>
                <Link
                  to={`/cities/editCities/${cities._id}`}
                  className="viewMoreSubttitle"
                >
                  <p className="viewMore">edit</p>
                </Link>
                <div
                  className="viewMore" 
                  onClick={(event) => deleteCity(event, `${cities._id}`)}
                >
                  delete
                </div>
              </div>
              <ToastContainer />
            </div>
          ))
        ) : (
          <h2 className="notFound">No results were found, please try again with another search</h2>
        )}
      </div>
    </div>
  );
}
