import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import reactionsActions from "../../redux/actions/reactionsActions";

export default function Reactions(props) {
  let  {iditinerary} = props;
  const dispatch = useDispatch();
  const { getReactions, updateReactions } = reactionsActions;
  const { idUser, token } = useSelector((state) => state.usersReducers);
  const [reload, setReload] = useState(true);
  const [reaction, setReaction] = useState({});


    useEffect(() => {
        getReaction()
    }, [reload])

    async function getReaction(){
        let res = await dispatch(getReactions(idUser));
        setReaction(res.payload)
    }
    async function modifyReaction(e){
        let name
        let icon
        let iconBack 
        reaction.data.forEach(react=>{
            if(react.name === e.target.name){
                name = react.name
                icon = react.icon
                iconBack = react.iconBackname = react.name
            }
        })
        let data = {
            token,
            id: iditinerary,
            name}
        try{
            let res = await dispatch(updateReactions(data))
            if(res.success){
                setReload(!reload)
            }
        }catch(error){
            console.log(error)
        }

    }

  return (
    <div>
        {reaction.success &&
        reaction.data.map((react)=>{
            console.log(react)
            let res = reaction.userId.find(user => user._id === idUser)
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
        }
    </div>
  )
}
