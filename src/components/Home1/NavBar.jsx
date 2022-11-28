import React from 'react'
import ButtonNav from './ButtonNav'
import ButtonNavSig from './ButtonNavSig'
import '../../index.css'
import ButtonNavNew from './ButtonNavNew'
import ButtonNavMyUserId from './ButtonNavMyUserId'
import { useSelector } from 'react-redux'


export default function NavBar() {
  let user = useSelector((store) => store.usersReducers)
  console.log(user)

  let logged=false;
  // const {lastName, logged, name, photo, token } = user;


  return (
    <>
    <div className='NavBar'>
    <ButtonNav className="navBarH" titulo="Home" texto1="Cities" texto2="Hotels" />
    { logged ? (
      <ButtonNavNew className="navBarMiddle" titulo="New" texto1="New City" texto2="New Hotel"/>
    ) : null }
    { !logged ? (
      <ButtonNavSig className="navBarR" titulo="Register" texto1="Sign In" texto2="Sign Up" />
    ) : (
      null
    )}
    { logged ? (
      <ButtonNavMyUserId className="navBarMiddle" titulo="My" texto1="My cities" texto2="My hotels" texto3="My itinerary"/>
    ) : null }
    </div>
    </>
  )
}
