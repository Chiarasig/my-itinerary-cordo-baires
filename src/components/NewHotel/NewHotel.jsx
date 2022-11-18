import React from "react";
import { useRef } from "react";
import '../../index.css';
import axios from 'axios';
import {BASE_URL} from '../../api/url'

export default function NewHotel() {
/*   const [userId, setUserId] = useState("");
  const [cityId, setCityId] = useState("");
  const [name, setName] = useState ("");
  const [photo, setPhoto] = useState ("");
  const [capacity, setCapacity] = useState (""); */
  const userId = useRef(null);
  const cityId = useRef(null);
  const name = useRef(null);
  const photo = useRef(null);
  const capacity = useRef(null);
  
/*   const submit = (e) => {
     e.preventDefault();
    if (userId === "" || name === "" || photo === "" || capacity === "" || cityId === ""){
      alert("Please fill in all fields")
    } else {
      let hotel = {userId, name, photo, capacity, cityId}
      axios.post(`${BASE_URL}/hotel`, hotel)
        .then(res => {
        })
    }
  } */
  let submit = (event) => {
    event.preventDefault();
    const hotel = {
      userId: userId.current.value,
      cityId: cityId.current.value,
      name: name.current.value,
      photo: photo.current.value,
      capacity: capacity.current.value,
    };
    axios.post(`${BASE_URL}/hotel`, hotel).then((res) => {});

    alert("Your hotel was successfully registered!");

      userId.current.value = ""
      cityId.current.value = ""
      name.current.value = ""
      photo.current.value = ""
      capacity.current.value = ""
  };
    return (
    <>
     <form className="nuevoFormularioLogin">
      <div className='formInputLabelRegister'>
        <label className='labelLogin'>User Id: 
        <input className='inputHotelNew'
          type="text" autoComplete="on" placeholder="userId mongoose"
   /*        onChange={(e) => setUserId(e.target.value)} */
          ref={userId}
        />
        </label>
        <label className='labelLogin'>City Id: 
        <input className='inputHotelNew'
          type="text" autoComplete="on" placeholder="cityId mongoose"
          /* onChange={(e) => setCityId(e.target.value)} */
          ref={cityId}
        />
        </label>
        <label className='labelLogin'>Name
        <input className='inputHotelNew'
          type="text" autoComplete="on" placeholder="Name"
          /* onChange={(e) => setName(e.target.value)} */
          ref={name}
        />
        </label>
        <label className='labelLogin'>Capacity
        <input className='inputHotelNew'
          type="text" autoComplete="on" placeholder="Capacity"
          /* onChange={(e) => setCapacity(e.target.value)} */
          ref={capacity}
        />
        </label>
        <label className='labelLogin'>Photo: URL
        <input className='inputHotelNew'
          type="text" autoComplete="on" placeholder="Photo"
          /* onChange={(e) => setPhoto(e.target.value)} */
          ref={photo}
        />
        <input className='inputHotelNew'
          type="text" autoComplete="on" placeholder="Photo"
          /* onChange={(e) => setPhoto(e.target.value)} */
          ref={photo}
        />
        <input className='inputHotelNew'
          type="text" autoComplete="on" placeholder="Photo"
          /* onChange={(e) => setPhoto(e.target.value)} */
          ref={photo}
        />
        </label>
        <div className="contenedorByP">
          <button className="buttonNuevoFormulario" onClick={submit}>Register hotel</button>
        </div>
        </div>
     </form>
    </>
  );
}
