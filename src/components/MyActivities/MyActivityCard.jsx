import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import myActivityActions from "../../redux/actions/myActivityActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MyActivitiessCard() {
  const dispatch = useDispatch();
  const { cities } = useSelector((state) => state.myActivityReducers);
  const {idUser, token} = useSelector((state) => state.usersReducers);
  const {getMyActivity, deleteMyActivity} = myActivityActions;

  useEffect(() => {
    if (cities && cities.length === 0) {
      dispatch(getMyActivity(idUser));
    }
  }, [idUser]);

  const deleteMyActivityTwo = (event, idActivity) => {
    event.preventDefault();
    let data= {
      token,
      idActivity
    }
    if (window.confirm("Are you sure you want to delete this activity?")) {
      dispatch(deleteMyActivity(data));
      toast.success("Activity deleted successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
      toast();
    }
  };

  return (
    <div className="containerMyHotels">
      <div className="tittleMyHotels">
        <h2 className="text-center tittleItinerary">My activities whit userId</h2>
        <button className="buttonProfile">
          <Link to="/myitinerary/newItinerary">Add itinerary</Link>
        </button>
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
                {cities.userId._id === idUser ? (
                  <>
                    <Link
                      to={`/myitinerary/editItinerary/${cities._id}`}
                      className="viewMoreSubttitle"
                    >
                      <p className="viewMore">edit</p>
                    </Link>
                    <div
                      className="viewMore" 
                      onClick={(event) => deleteMyActivityTwo(event,cities._id)}
                    >
                      delete
                    </div>
                  </>
                ) : null }
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
