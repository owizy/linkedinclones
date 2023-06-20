import React from 'react'
import { useState } from 'react'
import Login from './Login'
import Sign from './sign'
import Goggle from './icons8_google_480px_1.png'
import eye from "./icons8_eye_96px_1.png"
import invisible from './icons8_invisible_96px.png'
import {auth,goggleProvider} from "./Firebase"
import {createWithEmailAndPassword, signInWithPopup,signOut,updateProfile} from 'firebase/auth'
import { useDispatch } from 'react-redux'
import login from "../features/counter/userslice"
import "./auth.css"
function Authenticate() {
    const [active,setActive]=useState('signup')
    const handlechange=()=>{
        setActive(active  === "login" ? "signup" :"login")
    }
  return (
    <div className='body'>
     {active === "login" ? <Login/> : <Sign/>}
     <div className='cent'>
    
      <span>
        {
          active === "login" ?(
            <>
            <p>Not a member? <small onClick={handlechange}>Register now</small></p>  
              </>
          ):(<>
            <p>member? <small onClick={handlechange}>Login</small></p>
          </>)
        }
        </span>
       
     </div>
       
    </div>
  )
}

export default Authenticate