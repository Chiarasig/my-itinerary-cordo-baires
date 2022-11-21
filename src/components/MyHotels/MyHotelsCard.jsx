import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import myHotelsAction from "../../redux/actions/myHotelsActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MyHotelsCard() {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.myHotelsReducers.hotels);
  console.log(hotels);

  useEffect(() => {
    let userId = "636d5a9512a6c5227df1ef0b";
    console.log(hotels);
    if (hotels && hotels.length === 0) {
      dispatch(myHotelsAction.getMyHotels(userId));
    }
    console.log("soy el dispatch de", hotels);
  }, [hotels]);

  const deleteFunc = (event, idHotel) => {
    event.preventDefault();
    console.log({ idHotel });
    if (window.confirm("Estás seguro?")) {
      if (dispatch(myHotelsAction.deleteMyHotels(idHotel))) {
        /*        let hotels = {...hotels} */
        console.log("paso el dispatch");
        toast.success("the hotel was deleted successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        toast()
        console.log("paso el toast");
        dispatch(
          myHotelsAction.cargarHoteles(
            hotels.filter((hotels) => hotels._id !== idHotel)
          )
        );
      }
    }
  };

  /*   const HotelDetail = (hotels) =>{
    console.log(hotels);
    return (

    )
  }  */

  return (
    <>
      <div className="tittleMyHotels">
        <h2>My hotels by userId</h2>
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
              <Link
                to={`/hotels/detail/${hotels._id}`}
                className="viewMoreSubttitle"
              >
                <p className="viewMore">view more</p>
              </Link>
              <Link
                to={`/hotels/editHotel/${hotels._id}`}
                className="viewMoreSubttitle"
              >
                <p className="viewMore">Editar</p>
              </Link>
              <div>
                <button onClick={(event) => deleteFunc(event, `${hotels._id}`)}>
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
