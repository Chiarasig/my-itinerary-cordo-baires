import React from 'react'
import { useState } from 'react'
import "../../index.css";

export default function Activiti (props) {
    const {idCity} = props;
    const [activities, setActivities] = React.useState([]);
    let [mostrarOcultar, setMostrarOcultar] = useState(false);
    let hide = () => {
    setMostrarOcultar(!mostrarOcultar);
    console.log(mostrarOcultar);
    };

    React.useEffect(() => {

        fetch(`/data/dataActiviti.json`)
        .then((res) => res.json())
        .then((res) => {        
            setActivities(res.filter((obj) => obj.citiId === idCity ));
        });
    }, [idCity]);
    console.log(activities);

     return (
        <div>
            {activities.length !== 0
        ? activities.map((activity) => (
            <div key={activity.id} className="citiesCard text-center">
              <img
                className="cardImg"
                src={activity.photo}
                alt={activity.name}
              />
              <h5 className="subtittleCard">{activity.name}</h5>
              <h5 className="subtittleCard">Price:${activity.price}</h5>
              <h5 className="subtittleCard">Duration:{activity.duration}HS</h5>
            </div>
          ))
        : null}
        <div>
          {mostrarOcultar ? 
          (<>
            
            <p onClick={hide}>COMENTARIOS</p>
            <input type="text" placeholder="Tus comentarios" />
            </>
          ) : 
          (
            <>
            <p onClick={hide}>CAJON DE COMENTARIOS</p>
            </>
          ) 

          }
        </div>
        </div>
        
     )
 }