import React, { useState } from 'react'
import "./Login.css"
import logo from './logo.png'
import Goggle from './icons8_google_480px_1.png'
import eye from "./icons8_eye_96px_1.png"
import invisible from './icons8_invisible_96px.png'
import {auth,goggleProvider} from "./Firebase"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup,signOut,updateProfile} from 'firebase/auth'
import { useDispatch } from 'react-redux'
import login from "../features/counter/userslice"
function Login() {
const[show,setshow]=useState(false)
const [password,setpassword]=useState('')
const [email,setemail]=useState("")
function display(){
  setshow((e)=>{
    return ! e
  })
 }  

const LoginToApp=async(e)=>{
  e.preventDefault();
  try{
    await signInWithEmailAndPassword(auth,email,password)
  }catch(err){
    alert(`couldn't login due to ${err}`)
  }
}
return (
    <div className='login'>
     <div className='first'>
      <h1>linkedin</h1>
     <img src={logo} height={40}/>
   </div>
   <div className='div_container'>
   <form>
      <div className='sign'> 
        <h1>Sign in</h1>
        <p>Stay updated on your professional word</p>
      </div>
      
       <label >
       
       <input type='email' placeholder='Email' onChange={e =>setemail(e.target.value)} value={email} />
       </label>
     
       <label className='display'>
        <input type={show ?  'text':'password' }  value={password} onChange={e=>setpassword(e.target.value)} placeholder='Password' />
        <img className='hide' src={invisible} height={20} onClick={display} style={{ display: show ? "none" : "flex",
      position:"relative"}}/>
        <img className='hide' src={eye} height={20} onClick={display} style={{display:show ? "flex" :"none",position:"relative"}}/>
       </label>
       <button type='submit' onClick={LoginToApp}>Login</button>
         </form>
  
   </div>
    </div>
  )
}

export default Login