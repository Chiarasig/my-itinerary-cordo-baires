import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import commentsAction from "../../redux/actions/commentsAction";



const  Comments =({id}) => {
  const { idUser: userId, token} = useSelector((state) => state.usersReducers);
  const dispatch = useDispatch()
 
  
  const [data, setData]=useState({
    comment:'',
    date: new Date(),
  })
//código a actualizar, comparar con el del Deconfort
//ver librerias
  
  let dataBack = Object.assign({}, data, {userId:userId}, {showId:id},{token:token})

  const handledChange =(event)=>{

    setData({
      ...data,
      comment:event.target.value
    })
    
  }

  const sendData = async ()=>{
    console.log(dataBack)
    await dispatch(commentsAction.createComments(dataBack))
  }

  return(
   <div className="sendComments">
    <input className="boxComment" onChange={handledChange}/>
    <button className="buttonComment" type="submit" onClick={sendData}>Send comments</button>
   </div>
    
  )
}

export default Comments