import React from 'react'
import '../../index.css'

export default function Flechita(props) {
    // a traves de las llaves: desestructuro
  let {verbo,onClick} = props //saco la propiedad verbo del objeto props
  
  return (
    <div className="" onClick={onClick}> {verbo} </div>
  )
}
