import React, { useState } from 'react'
import "./Header.css"
import logo from './logo.png'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ChatIcon from '@mui/icons-material/Chat';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from '@mui/material';
import { auth } from '../Main/Firebase';
import { logout } from '../features/counter/userslice';
import { signOut } from 'firebase/auth';
import { NavLink } from 'react-router-dom';
function Header() {
   const[navbar,setnavbar]=useState(false)
   const user = useSelector(state => state.user.user.user)
const prof=(topic)=>{
   return(
      <div className='tops'>
         <p>{topic}</p>
      </div>
   )
}
const dispatch =useDispatch();
const handlesignout =()=>{
   dispatch(logout());
   signOut(auth);
} 
const bar=()=>{
   setnavbar((e)=>{
      return ! e
   })
}
const activeLink=({isActive})=>{
   return{
       color: isActive ? "black"  :"gray" ,
   }
}
  return (
    <div className='header'>
       <div className='header_left'> 
       <img src={logo}/>
          <div className='header_search'>
             <SearchIcon/>
             <input type='text'/>
          </div>
       </div>
       <div className='header_right' >
             <NavLink  to='/' style={activeLink}>         <HeaderOption Icon={HomeIcon} title='Home'/>
             </NavLink>
          <NavLink to='/myaccount'><HeaderOption Icon={SupervisorAccountIcon} title='My Network'/></NavLink>
         <NavLink style={activeLink} to='/'>
         <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
         </NavLink>
          <NavLink style={activeLink} to='/message'>
          <HeaderOption Icon={ChatIcon} title="Messaging"/>
          </NavLink>
          <NavLink style={activeLink} to='/'>
          <HeaderOption Icon={NotificationsIcon} title='Notification'/>
          </NavLink>
           <button onClick={bar} className='btn'>
           <HeaderOption avatar={AccountCircleIcon} me={user.email ? user.email.charAt(0).toUpperCase():"M"} title={user.email } />
           </button>
           <div className={navbar ? "nav":"hidden"   } >
            <div className='first'>
               <Avatar>{user.email ? user.email.charAt(0).toUpperCase():"M"}</Avatar>
               <p>{user.email}</p>
            </div>
                <div className='hash'>
               <h1>Account</h1>
                      {prof("Setting &Privacy")}
                      {prof("Help")}
                      {prof("Language")}   
               </div> 
               <div className='hash'>
               <h1>Manage</h1>
                      {prof("Posts & Activity")}
                      {prof("Jobs Posting Account")} 
               </div> 
               <button onClick={handlesignout}>Signout</button>
           </div>
       </div>
    </div>
  )
}

export default Header