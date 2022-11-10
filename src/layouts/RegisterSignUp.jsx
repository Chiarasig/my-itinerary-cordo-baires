import React from 'react'
import RegisterImg from "../Image/registerimg.png"
import RegisterForm from '../components/SignUp/RegisterForm'
import "../index.css"

export default function RegisterSignUp() {
  return (
    <div className='registerLayout'>
        <div className='tittleImgLogin'>
            <img src={RegisterImg} alt="Register image" />
            <h1 className='SignUpH1'>Sign Up</h1>
        </div>
        <div className='formLogin'>
            <RegisterForm/>
        </div>
    </div>
  )
}
