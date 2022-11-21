import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import myHotelsAction from "../../redux/actions/myHotelsActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MyHotelsCard() {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.myHotelsReducers);
  console.log(hotels);
  const notify = () => {
    toast();
  };

  useEffect(() => {
    let userId = "636d5a9512a6c5227df1ef0d";
    dispatch(myHotelsAction.getMyHotels(userId));
    console.log("soy el dispatch de", hotels.hotels);
  }, []);

/*   function deleteFunc() {
    if (dispatch(myHotelsAction.deleteMyHotels(idHotel))) {
      toast.success("the hotel was deleted successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  } */

  return (
    <>
    <div className="tittleMyHotels">
      <h2>My hotels by userId</h2>
    </div>
      <div className="flex wrap w-100 justify-center align-center g-25 pb-3">
        {hotels.hotels?.map((e) => {
          <div key={e._id} className="hotelCard">
            <img className="cardImgHotel" src={e.photo} alt={e.name} />
            <h3 className="subtittleCard">{e.name}</h3>
        {/*     <ToastContainer autoClose={8000} /> */}
          </div>;
        })}
      </div>
    </>
  );
}
