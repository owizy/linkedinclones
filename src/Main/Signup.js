import { useState } from "react"
import {auth,goggleProvider} from "./Firebase"
import {createUserWithEmailAndPassword, signInWithPopup,signOut} from 'firebase/auth' 
const Signup =()=>{
const[email,setemail]=useState('');
const[Password,SetPassword]=useState('')
const signin = async()=>{
try{
    await createUserWithEmailAndPassword(auth,email,Password)
}catch(err){
 console.error(err)
}
};
const signinwithgoogle = async()=>{
    try{
        await signInWithPopup(goggleProvider)
    }catch(err){
     console.error(err)
    }
    };
    const logout = async()=>{
        try{
            await signOut(auth)
        }catch(err){
         console.error(err)
        }
        };
    return(
        <div>
           <input placeholder="email" onChange={(e)=>{
            setemail(e.target.value)
           }}/>
           <input placeholder="Password..." onChange={(e)=>SetPassword(e.target.value)} type="password"/>
           <button type="submit">Sign up</button>
           <button onClick={signinwithgoogle}>Sign in with Goggle</button>
        <button onClick={logout}>Log out</button>
        </div>
    )
}
export default  Signup