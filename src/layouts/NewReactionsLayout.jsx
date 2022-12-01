import React from 'react'
import NewReaction from '../components/NewReaction/NewReaction'
import LogReg from '../Image/registerCiudad.png'

export default function NewShowLayout() {
  return (
    <div className='newShowLayout'>
      <div className='tittleImgLogin'>
        <img className='logoReg' src={LogReg} alt="Logo" />
        <h1 className="SignUpH1">New Reactions</h1>
      </div>
      <div className='formLogin' > 
        <NewReaction />
      </div>
    </div>
  )
}
