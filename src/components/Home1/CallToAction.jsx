import React from 'react'
import './Home1.css'

export default function CallToAction(props) {
  let {title} = props
    return (

<button className='btnCTA'>{title}</button>
  )
}
