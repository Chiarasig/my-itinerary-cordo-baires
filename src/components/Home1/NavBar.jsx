import React from 'react'
import ButtonNav from './ButtonNav'
import ButtonNavSig from './ButtonNavSig'
import '../../index.css'
import ButtonNavNew from './ButtonNavNew'
import ButtonNavMyUserId from './ButtonNavMyUserId'
import { useSelector } from 'react-redux'
import { ButtonNavLogout } from './ButtonNavLogout'


export default function NavBar() {
  let user = useSelector((store) => store.usersReducers)
  const { logged, role } = user;


  return (
    <>
    <div className='NavBar'>
    <ButtonNav className="navBarH" titulo="Home 🡻" tituloflecha="tituloflecha" texto1="Cities" texto2="Hotels" />
    { logged && role === 'admin' ? (
      <ButtonNavNew className="navBarMiddle" titulo="New 🡻" texto1="New City" texto2="New Hotel" texto3="New Reactions"/>
    ) : null }
    { !logged ? (
      <ButtonNavSig className="navBarR" titulo="Register 🡻" texto1="Sign In" texto2="Sign Up" />
    ) : (
      null
    )}
    { logged ? (
      <ButtonNavMyUserId className="navBarMiddle" titulo="My 🡻" texto1="My Cities" texto2="My hotels" texto3="My Itinerary" texto4="My Shows" texto5="My Reactions"/>
    ) : null }
    { logged ? (
      < ButtonNavLogout />
    ) : null }
    </div>
    </>
  )
}
