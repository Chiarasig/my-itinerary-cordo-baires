import React from 'react'
import '../../index.css'

export default function CallToAction(props) {
  let {title} = props
    return (

<button className='btnCTA'>{title}</button>
  )
}
