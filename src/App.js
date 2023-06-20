import React, { useEffect,useState } from 'react';
import Header from './Header/Header.js';
// import { Counter } from './features/counter/Counter';
import './App.css';
import  Feed  from './Main/Feed';
import Sidebar from './Main/Sidebar.js'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectuser, setLoading } from './features/counter/userslice.js';
import Login from './Main/Login.js';
import Authenticate from './Main/Authenticate.js';
import { auth } from './Main/Firebase.js';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Widgets from './Main/Widgets.js';
import Homepage from './Homepage.js';
import MyAccount from './Main/MyAccount.js';
import Messages from './Main/messages.js';
function App() {
   const user = useSelector(state =>state.user.user.user)
    // const isloading =useSelector(state => state.user.user.isloading)     
    const[loading,Setloading]=useState(false)
    const dispatch = useDispatch() 
 useEffect(()=>{
   auth.onAuthStateChanged(authUser=>{
    if(authUser){
       dispatch(login({
        uid:authUser.uid,
        names:authUser.displayName,
        email:authUser.email
       }))
       dispatch(setLoading(false))
    }else{
      console.log('user is not logged in')
    }
   })
  },[])
  useEffect(()=>{
    Setloading(true)
      setTimeout(()=>{
        Setloading(false)
      },4000)
    
   },[])
  return (
<body >
        {loading ? (<div className='body'>
<div className='cont'>
     <div className='linked'>linked</div>
     <div className='in'>in</div>
     <div className='loader'>
       <div className='loading'></div>
     </div>
     </div>
     </div>): (<>{
         !user ? (
              
        <Authenticate/>
       ):(
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/myaccount' element={<MyAccount/>}/>
          <Route path='/message' element={<Messages/>}/>
        </Routes>
        </BrowserRouter>
        
     )
     }

</>)}
         </body> 
  );
}

export default App;
