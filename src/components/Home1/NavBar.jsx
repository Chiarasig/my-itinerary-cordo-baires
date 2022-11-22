import React from 'react'
import ButtonNav from './ButtonNav'
import ButtonNavSig from './ButtonNavSig'
import '../../index.css'
import ButtonNavNew from './ButtonNavNew'
import ButtonNavMyUserId from './ButtonNavMyUserId'


export default function NavBar() {
  return (
    <>
    <div className='NavBar'>
    <ButtonNav className="navBarH" titulo="Home" texto1="Cities" texto2="Hotels" />
    <ButtonNavNew className="navBarMiddle" titulo="New" texto1="New City" texto2="New Hotel"/>
    <ButtonNavSig className="navBarR" titulo="Register" texto1="Sign In" texto2="Sign Up" />
    <ButtonNavMyUserId className="navBarMiddle" titulo="My" texto1="My cities" texto2="My hotels" texto3="My itinerary"/>
    </div>
    </>
  )
}
