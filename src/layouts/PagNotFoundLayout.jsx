import React from 'react'
import PagNotFound from '../components/NotFound/PagNotFound'
import CallToAction from '../components/Home1/CallToAction'
import { Link } from 'react-router-dom'
import '../index.css'
import BackToTopButton from '../components/Home2/BackToTopButton'

export default function PagNotFoundLayout() {
  return (
    <div className='NotFoundLayout'>
        <PagNotFound></PagNotFound>
        <Link to={"/home"}><CallToAction title="HOME"/></Link>
        <BackToTopButton/>
    </div>
  )
}
