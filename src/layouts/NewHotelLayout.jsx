import React from 'react'
import NewHotel from '../components/NewHotel/NewHotel'
import LogReg from '../Image/registerCiudad.png'

export default function NewHotelLayout() {
  return (
    <div className='flex center column'>
      <div className='flex'>
        <img className='logoReg' src={LogReg} alt="" />
        <h1 className="SignUpH1">Register hotel</h1>
      </div>
      <div className='borderForm' > 
        <NewHotel/>
      </div>
    </div>
  )
}
