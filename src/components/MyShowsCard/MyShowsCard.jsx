import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import myShowsAction from "../../redux/actions/myShowsActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MyShowsCard() {
  const dispatch = useDispatch();
  const { idUser: userId} = useSelector((state) => state.usersReducers);
  const hotels = useSelector((state) => state.myShowsReducers.hotels);

  useEffect(() => {
    if (hotels && hotels.length === 0) {
      dispatch(myShowsAction.getMyShows(''));
    }
  }, []);

  const deleteFunc = (event, idHotel) => {
    event.preventDefault();
    if (window.confirm("Are you sure you want to delete this show?")) {
      if (dispatch(myShowsAction.deleteMyShows(idHotel))) {
        toast.success("the show was deleted successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        toast();
        dispatch(
          myShowsAction.cargarShows(
            hotels.filter((hotels) => hotels._id !== idHotel)
          )
        );
      }
    }
  };

  return (
    <div className="containerMyHotels">
      <div className="tittleMyHotels">
        <h2 className="tittleItinerary">My shows by userId</h2>
        <button className="buttonProfile">
          <Link to="/myshows/newShow">Add Show</Link>
        </button>
      </div>
      <div className="flex wrap w-100 justify-center align-center g-25 pb-3">
        {hotels && hotels.length > 0 ? (
          hotels.map((hotels) => (
            <div key={hotels._id} className="myHotelCard">
              <img
                className="cardImgHotel"
                src={hotels.photo}
                alt={hotels.name}
              />
              <h3 className="subtittleCard">{hotels.name}</h3>
              { userId === hotels.userId._id ? (
                <div className="buttonMyHotels">
                <Link
                  to={`/myshows/editShow/${hotels._id}`}
                  className="viewMoreSubttitle"
                >
                  <p className="viewMore">edit</p>
                </Link>
                  <div className="viewMore" onClick={(event) => deleteFunc(event, `${hotels._id}`)}>
                    delete
                  </div>
                </div>
              ) : null}
              <ToastContainer/>
            </div>
          ))
        ) : (
          <h2 className="notFound">No results were found, please try again with another search</h2>
        )}
      </div>
    </div>
  );
}

