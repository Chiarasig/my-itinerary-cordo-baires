import React from 'react'
import { Link } from 'react-router-dom'
import CallToAction from '../components/Home1/CallToAction'
import '../index.css'

export default function Home1Layout() {
  return (
    <div className='mainHome1'>
    <div>
      <Link to={"/cities"}><CallToAction title="Hotels"/></Link>
      <Link to={"/hotels"}><CallToAction title="Cities"/></Link>
    </div>
  </div>
  )
}

