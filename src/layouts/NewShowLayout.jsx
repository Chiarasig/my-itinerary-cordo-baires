import React from 'react'
import NewActivity from '../components/NewActivity/NewActivity'
import NewShow from '../components/NewShow/NewShow'
import LogReg from '../Image/registerCiudad.png'

export default function NewShowLayout() {
  return (
    <div className='newCityLayout'>
      <div className='tittleImgLogin'>
        <img className='logoReg' src={LogReg} alt="" />
        <h1 className="SignUpH1">Register Show</h1>
      </div>
      <div className='formLogin' > 
        <NewShow />
      </div>
    </div>
  )
}
