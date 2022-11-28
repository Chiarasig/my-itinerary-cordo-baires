import React from 'react'
import NewActivity from '../components/NewActivity/NewActivity'
import LogReg from '../Image/registerCiudad.png'

export default function NewActivityLayout() {
  return (
    <div className='newCityLayout'>
      <div className='tittleImgLogin'>
        <img className='logoReg' src={LogReg} alt="" />
        <h1 className="SignUpH1">Register Itinerary</h1>
      </div>
      <div className='formLogin' > 
        <NewActivity/>
      </div>
    </div>
  )
}
