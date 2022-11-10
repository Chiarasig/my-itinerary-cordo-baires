import React from 'react'
import '../../index.css'

export default function CallToAction(props) {
  let {title} = props
    return (
<div className='containerCTA'>
<button className='btnCTA'>{title}
  </button>
</div>
  )
}
