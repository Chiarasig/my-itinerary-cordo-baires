import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import myShowsAction from "../../redux/actions/myShowsActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MyShowsCard() {
  const dispatch = useDispatch();
  const {idUser, token} = useSelector((state) => state.usersReducers);
  const hotels = useSelector((state) => state.myShowsReducers.hotels);
  const {getMyShows} = myShowsAction;

  useEffect(() => {

      dispatch(getMyShows(idUser));
  }, []);

  console.log(hotels);

  const deleteFunc = (event, idHotel) => {
    event.preventDefault();
    let data= {
      token,
      idHotel
    }
    if (window.confirm("Are you sure you want to delete this show?")) {
      if (dispatch(myShowsAction.deleteMyShows(data))) {
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
  console.log(hotels);
  return (
    <div className="containerMyHotels">
      <div className="tittleMyHotels">
        <h2 className="tittleItinerary">My shows by userId</h2>
        <button className="buttonProfile">
          <Link to="/myshows/newShow">Add Show</Link>
        </button>
      </div>
      <div className="flex wrap w-100 justify-center align-center g-25 pb-3">
        {hotels.length > 0 && (
          hotels.map((hotel) => (
            <div key={hotel._id} className="myHotelCard">
              <img
                className="cardImgHotel"
                src={hotel.photo}
                alt={hotel.name}
              />
              <h3 className="subtittleCard">{hotel.name}</h3>

                <div className="buttonMyHotels">
                <Link
                  to={`/myshows/editShow/${hotel._id}`}
                  className="viewMoreSubttitle"
                >
                  <p className="viewMore">edit</p>
                </Link>
                  <div className="viewMore" onClick={(event) => deleteFunc(event, `${hotel._id}`)}>
                    delete
                  </div>
                </div>
              <ToastContainer/>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

