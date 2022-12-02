import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../api/url";
import reactionsActions from "../../redux/actions/reactionsActions";

export default function Reactions(props) {
  let { iditinerary } = props;
  const dispatch = useDispatch();
  const { getReactions, updateReactions } = reactionsActions;
  const { idUser, token } = useSelector((state) => state.usersReducers);
  const { reactions } = useSelector(
    (state) => state.reactionReducers
  );
  const [listreactionsuser, setListreactionsuser] = useState([])
  const [reload, setReload] = useState(true);
  const [reactionIcons, setReactionIcons] = useState([]);

  useEffect(() => {
    let data = {
      idItinerary: iditinerary,
      token,
    };
    dispatch(getReactions(data));
    getListReactionUsers();
  }, [idUser, reload]);

  useEffect(() => {
    if (listreactionsuser) {
        setReactionIcons(
            listreactionsuser.map((reaction) => (
                {
                    name: reaction.name,
                    idItinerary: reaction.idItinerary,
                    active: reaction.userId.filter((user) => user._id === idUser).length > 0
                }
            ))
        )
    }
  }, [listreactionsuser]);

  function modifyReaction(reaccion) {
    if (reaccion.name) {
      let data = {
        token,
        idItinerary: iditinerary,
        name: reaccion.name,
      };
      dispatch(updateReactions(data));
      setReload(!reload);
    }
  }

  const getListReactionUsers = async () => {
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    axios.get(`${BASE_URL}/reactions/reactionsforuser/?itineraryId=${iditinerary}`, headers)
      .then((res) => {
        setListreactionsuser(res.data.data)
      })
      .catch((err) => console.log(err));
  }

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      {reactions && reactions.length > 0 ? (
        reactions.map((reaction, key) => (
          <div key={reaction._id} style={{float: "left", padding: "10px"}}>
            <button
              name={reaction.name}
              onClick={() => modifyReaction(reaction)}
            >
              <img
                src={
                    reactionIcons.filter((icon) => 
                    icon.name === reaction.name && icon.active === true).length > 0
                    ? reaction.icon
                    : reaction.iconBack
                }
                name={reaction.name}
                alt={reaction.name}
                width="15px"
              />
            </button>
          </div>
        ))
      ) : (
        <h1>no hay reacciones</h1>
      )}
      {/* {reaction.success &&
        reaction.data.map((react)=>{
            console.log(react)
            let res = reaction.userId.find(user => user._id === id)
            return(
                res ? (
                    <>
                    <img src={react.icon} name={react.name} alt={react.name} key={react._id} width='25px' onClick={modifyReaction}/>
                    <p>{reaction.lenghtOfReactions[react.name]}</p>
                    </>
                ):(
                    <>
                    <img src={react.iconBack} name={react.name} key={react._id} width='25px' onClick={modifyReaction}
                    />
                    <p>{reaction.lenghtOfReactions}</p>
                    </>
                ))
                
                })
        } */}
    </div>
  );
}
