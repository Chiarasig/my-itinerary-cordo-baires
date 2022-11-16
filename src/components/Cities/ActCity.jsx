import React, { useEffect } from 'react'
import { useState } from 'react'
import "../../index.css";
import axios from 'axios';
import {BASE_URL} from '../../api/url'

export default function Activiti (props) {
    const {idCity} = props;
    const [activities, setActivities] = React.useState([]);
    let [mostrarOcultar, setMostrarOcultar] = useState(false);
    let hide = () => {
    setMostrarOcultar(!mostrarOcultar);
    };

    useEffect(() => {

      axios.get(`${BASE_URL}/itineraries?cityId=${idCity}`)
        .then((res) => {     
            setActivities(res.data.response);
        });
    }, [idCity]);

     return (
        <div className="cardsShows">
            {activities.length !== 0
        ? activities.map((activity) => (
            <div key={activity.id} className="containerActivityDetails">
              <img
                className="cardImgShow"
                src={activity.photo}
                alt={activity.name}
              />
              <div className="containerShowDetailsDescription">
              <h3 className="subtittleCardDetail">{activity.name}</h3>
              <h3 className="subtittleCardDetail">Description: {activity.description}</h3>
              <h3 className="subtittleCardDetail">Price: ${activity.price}</h3>
              <h3 className="subtittleCardDetail">Duration: {activity.duration}HS</h3>
              </div>
            </div>
          ))
        : null}
        <div>
          {mostrarOcultar ? 
          (<>
            
            <p onClick={hide}>COMMENT</p>
            <input type="text" placeholder="Your comment" />
            </>
          ) : 
          (
            <>
            <p onClick={hide}>COMMENT BOX</p>
            </>
          ) 

          }
        </div>
        </div>
        
     )
 }