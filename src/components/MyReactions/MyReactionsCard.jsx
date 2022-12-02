import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import reactionsActions from "../../redux/actions/reactionsActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MyReactionsCard() {
  const dispatch = useDispatch();
  const { reactionsforuser: listReaction } = useSelector(
    (state) => state.reactionReducers
  );
  const { idUser, token } = useSelector((state) => state.usersReducers);
  const { reactionsforuser, deleteReactions, cargarReaction } = reactionsActions;
  const [reload, setReload] = useState(true);

  useEffect(() => {
    if (idUser) {
      let data = {
        token,
        idUser,
      };
      dispatch(reactionsforuser(data));
    }
  }, [idUser]);

  const deleteReactionsTwo = (event, reaction) => {
    event.preventDefault();
    let data = {
      token,
      idItinerary: reaction.idItinerary,
      id: reaction._id,
    };
    if (window.confirm("Are you sure you want to delete this reaction?")) {
      dispatch(deleteReactions(data));
      toast.success("Reaction deleted successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
      toast();
      dispatch(cargarReaction(
        listReaction.filter((listReaction) => listReaction._id !== reaction._id)
      ));
    }
  };

  return (
    <div className="containerMyHotels">
      <div className="tittleMyHotels">
        <h2 className="text-center tittleItinerary">My reactions</h2>
      </div>
      <div className="flex wrap w-150 justify-center align-center g-25 pb-3">
        {listReaction && listReaction.length > 0 ? (
          listReaction.map((reactions) => (
            <div key={reactions._id} className="myHotelCard">
              <img
                className="cardImgHotel"
                src={reactions.itineraryId?.photo[0]}
                alt={reactions.itineraryId?.name}
              />
              <h3 className="subtittleCard">{reactions.itineraryId?.name}</h3>
              <div className="flex g-1 center">
              <img
                src={reactions.icon}
                name={reactions.name}
                alt={reactions.name}
                width="25px"
              />
              <div className="buttonMyHotels">
                <button
                  className="viewMoreSubttitle"
                  onClick={(event) => deleteReactionsTwo(event, reactions)}
                >
                  <p className="viewMore flex wrap center">delete</p>
                </button>
              </div></div>
            </div>
          ))
        ) : (
          <h1 className="text-center">You don't have any reactions</h1>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}
