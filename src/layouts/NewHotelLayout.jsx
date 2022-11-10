import React from 'react'
import NewHotel from '../components/NewHotel/NewHotel'
import LogReg from '../Image/registerCiudad.png'
import '../index.css'

export default function NewHotelLayout() {
  return (
    <div className='newCityLayout'>
      <div className='tittleImgLogin'>
        <img className='logoReg' src={LogReg} alt="Logo register" />
        <h1 className="SignUpH1">Register hotel</h1>
      </div>
      <div className='formLogin' > 
        <NewHotel/>
      </div>
    </div>
  )
}
