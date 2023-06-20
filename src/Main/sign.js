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
function Sign() {
 const[show,setshow]=useState(false)
//  const [names,setname]=useState('')
 const [password,setpassword]=useState(false)
 const [very,setvery]=useState(false)
 const [very2,setvery2]=useState(false)
 
 const [email,setemail]=useState("")
function display(){
  setshow((e)=>{
    return ! e
  })

 }  

const LoginToApp=async (e)=>{
  e.preventDefault(); 
   try{
    await createUserWithEmailAndPassword(auth,email,password)
   }catch(err){
    alert("couldn't signup due to "+err)
   }
 }
     
//  const googlesign = async()=>{
//     try{
//         await signInWithPopup(goggleProvider)
//     }catch(err){
//      console.error(err)
//     }
//     };
    //createUserWithEmailAndPassword(auth,email,password).then(signInWithEmailAndPassword(auth,email,password )).then(updateProfile(auth.currentUser,{displayName:names })).catch(err=>{
//     alert(err)
//   })
function aurth(){
  setvery((e)=>{
    return ! e
  })
}
function aurth2(){
  setvery2((e)=>{
    return ! e
  })
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
        <h1>Register </h1>
        <p>Stay updated on your professional word</p>
      </div>
      {/* <label>
      <input type='text' placeholder='Fullname' value={names} onChange={e=>setname(e.target.value)}/>
      </label>*/}
       <label className='labs'>
       <p className='enter'>{very2 ? "Pls enter a valid email":""}</p> 
       <input type='email' placeholder='Email' onChange={e =>setemail(e.target.value)} value={email}  onMouseDownCapture={aurth2}/>
       </label>
       <p className='enter'>{very ? "Pls enter password a Strong password":""}</p>
       <label className='display' >
        <input type={show ?  'text':'password' }  value={password} onChange={e=>setpassword(e.target.value)} placeholder='Password' onMouseDownCapture={aurth}/>
        <img className='hide' src={invisible} height={20} onClick={display} style={{ display: show ? "none" : "flex"}}/>
        <img className='show' src={eye} height={20} onClick={display} style={{display:show ? "flex" :"none"}}/>
       </label>
       <button type='submit' onClick={LoginToApp}>Register</button>
     </form>
  
   </div>
    </div>
  )
}

export default Sign