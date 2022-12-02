import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import myHotelsAction from "../../redux/actions/myHotelsActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MyHotelsCard() {
  const dispatch = useDispatch();
  const {idUser, token} = useSelector((state) => state.usersReducers);
  const hotels = useSelector((state) => state.myHotelsReducers.hotels);
  const {getMyHotels} = myHotelsAction;

/*   useEffect(() => {
    if (hotels && hotels.length === 0) {
      dispatch(getMyHotels(idUser));
    }
  }, [hotels]); */
  useEffect(() => {

    dispatch(getMyHotels(idUser));
}, []);

  const deleteFunc = (event, idHotel) => {
    event.preventDefault();
    let data= {
      token,
      idHotel
    }
    if (window.confirm("Are you sure you want to delete this hotel?")) {
      if (dispatch(myHotelsAction.deleteMyHotels(data))) {
        toast.success("the hotel was deleted successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        toast()
        dispatch(
          myHotelsAction.cargarHoteles(
            hotels.filter((hotels) => hotels._id !== idHotel)
          )
        );
      }
    }
  };

  return (
    <div className="containerMyHotels">
      <div className="tittleMyHotels">
        <h2>My hotels by userId</h2>
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
                to={`/hotels/detail/${hotel._id}`}
                className="viewMoreSubttitle"
              >
                <p className="viewMore">view more</p>
              </Link>
              <Link
                to={`/hotels/editHotel/${hotel._id}`}
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
