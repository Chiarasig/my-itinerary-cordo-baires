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
  const notify = () => {
    toast();
  };

  useEffect(() => {
    let userId = "636d5a9512a6c5227df1ef0b";
    dispatch(myHotelsAction.getMyHotels(userId));
    console.log("soy el dispatch de", hotels);
  }, []);

/*   function deleteFunc() {
    if (dispatch(myHotelsAction.deleteMyHotels(idHotel))) {
      toast.success("the hotel was deleted successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(function () {
        window.location.replace("");
      }, 1500);
    }
  } */
console.log(hotels)
  return (
    <div className="flex justify-center column main-full">
      <div>
        <h1>My hotels </h1>
      </div>
        {hotels?.map((e) => {
          <div key={e._id} className="hotelCard">
            <img className="cardImgHotel" src={e.photo} alt={e.name} />
            <h3 className="subtittleCard">{e.name}</h3>
      {/*       <ToastContainer autoClose={8000} /> */}
          </div>;
        })}
    </div>
  );
}
