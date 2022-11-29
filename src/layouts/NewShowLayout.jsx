import React from 'react'
import NewActivity from '../components/NewActivity/NewActivity'
import NewShow from '../components/NewShow/NewShow'
import LogReg from '../Image/registerCiudad.png'

export default function NewShowLayout() {
  return (
    <div className='newShowLayout'>
      <div className='tittleImgLogin'>
        <img className='logoReg' src={LogReg} alt="Logo" />
        <h1 className="SignUpH1">Register Show</h1>
      </div>
      <div className='formLogin' > 
        <NewShow />
      </div>
    </div>
  )
}
