import React from 'react'
import { Link } from 'react-router-dom'
import './Home2.css'

export default function FooterPages() {
  return (
    <div>
        <h2 className="footerTittle">Pages</h2>
        <Link to={"/cities"}><p className='footerSubtittle'>Cities</p></Link>
        <Link to={"/hotels"}><p className='footerSubtittle'>Hotels</p></Link>
    </div>
  )
}
