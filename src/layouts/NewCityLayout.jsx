import React from 'react'
import NewCity from '../components/NewCity/NewCity'
import LogReg from '../img/registerCiudad.png'

export default function NewCityLayout() {
  return (
    <div className='flex center column'>
      <div className='flex'>
        <img className='logoReg' src={LogReg} alt="" />
        <h1 className="SignUpH1">Register City</h1>
      </div>
      <div className='borderForm' > 
        <NewCity/>
      </div>
    </div>
  )
}
