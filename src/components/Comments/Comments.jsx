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

  
  var dataBack = Object.assign({}, data, {userId:userId}, {showId:id},{token:token})

  const handledChange =(event)=>{

    setData({
      ...data,
      comment:event.target.value
    })
    
  }

/*   useEffect(()=>{
    dispatch(commentsAction.getComments(id))
  }, [id]) */

  const sendData = async ()=>{
    console.log(dataBack)
    await dispatch(commentsAction.createComments(dataBack))
  }

  return(
   <>
  
    <input name="comment" onChange={handledChange}/>
    <button type="submit" onClick={sendData}>Enviar Comentario</button>
   </>
    
  )
}

export default Comments