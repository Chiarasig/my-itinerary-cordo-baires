import React from 'react'
import NewCity from '../components/NewCity/NewCity'
import LogReg from '../Image/registerCiudad.png'

export default function NewCityLayout() {
  return (
    <div className='newCityLayout'>
      <div className='tittleImgLogin'>
        <img className='logoReg' src={LogReg} alt="" />
        <h1 className="SignUpH1">Register City</h1>
      </div>
      <div className='formLogin' > 
        <NewCity/>
      </div>
    </div>
  )
}
