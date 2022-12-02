import React, { useEffect } from "react";
import { useRef } from "react";
import "../../index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { BASE_URL } from "../../api/url";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import myActivityActions from "../../redux/actions/myActivityActions";

export default function NewReaction() {
  let dispatch = useDispatch();
  const { idUser, token } = useSelector((state) => state.usersReducers);
  const { cities } = useSelector((state) => state.myActivityReducers);
  const { getActivity } = myActivityActions;
  const navigate = useNavigate();

  const notify = () => {
    toast();
  };

  let information = useRef();
  let itineraryId = useRef();
  let name = useRef();
  let icon = useRef();
  let iconBack = useRef();

  useEffect(() => {
    dispatch(getActivity());
  }, []);

  async function newReaction(e) {
    e.preventDefault();
    let newReaction = {
      itineraryId: itineraryId.current.value,
      name: name.current.value,
      icon: icon.current.value,
      iconBack: iconBack.current.value,
      userId: [idUser],
    };
    console.log(newReaction);

    let headers = { headers: { Authorization: `Bearer ${token}` } };

    try {
      let res = await axios.post(
        `${BASE_URL}/reactions/`,
        newReaction,
        headers
      );
      if (res.data.success) {
        navigate(`/newreactions`);
      } else {
        toast.error(res.data.message.join(" - - - - "));
        console.log(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form
        className="nuevoFormularioLogin"
        onSubmit={newReaction}
        ref={information}
      >
        <div className="formInputLabelRegister">
          <label className="labelLogin">
            Itinerary:
            <select className="inputHotelNew" name="" id="" ref={itineraryId}>
                {cities.map((city) => {
                    return (
                        <option key={city._id} value={city._id}>{city.name}</option>
                    )
                })}
            </select>
          </label>
          <label className="labelLogin">
            Name
            <input
              className="inputHotelNew"
              type="text"
              ref={name}
              placeholder="Name"
              required
            />
          </label>
          <label className="labelLogin">
            Icon
            <input
              className="inputHotelNew"
              type="text"
              ref={icon}
              placeholder="Icon"
              required
            />
          </label>
          <label className="labelLogin">
            Icon Back
            <input
              className="inputHotelNew"
              type="text"
              ref={iconBack}
              placeholder="Icon Back"
              required
            />
          </label>
        </div>
        <div className="contenedorByP">
          <button
            className="buttonNuevoFormulario"
            type="submit"
            onClick={notify}
          >
            Create a new reaction
          </button>
        </div>
        <ToastContainer />
      </form>
    </>
  );
}
