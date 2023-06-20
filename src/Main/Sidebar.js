import React from 'react';
import "./Sidebar.css"
import { Avatar } from '@mui/material';
import background from "./background.jpg"
import { useSelector } from 'react-redux';

function Sidebar() {
  const user = useSelector(state => state.user.user.user)

  const recentItem=(topic)=>(
  <div className='sidebar_recentItem'>
    <span className='sidebar_hash'>#</span>
    <p>{topic}</p>
  </div>
)
  return (
    <div className='sidebar'>
      <div className='sidebar_top'>
    <img src={background}/>
    <Avatar className="sidebar_avatar">{user.email ? user.email.charAt(0).toUpperCase():"M"}</Avatar>
    <h2>{user.names}</h2>
    <h4>{user.email}</h4>
      </div>
      <div className='sidebar_stats'>
      
       <div className='sidebar_stat'>
        <p>who viewed you</p>
        <p className='sidebar_sideNumber'>2,543</p>
       </div>

       <div className='sidebar_stat'>
        <p>views on post</p>
        <p className='sidebar_sideNumber'>2,448</p>
       </div>
      
      </div>
       <div className='sidebar_bottom'>
         <p>Recent</p>
         {recentItem('reactjs')}
         {recentItem('programming')}
         {recentItem('software developer')}
         {recentItem('full stack developer')}
         {recentItem('developer')}
         {recentItem('reactjs')}
       </div>

    </div>
  )
}

export default Sidebar