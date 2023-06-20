import React, { useState } from 'react'
import "./MyAccount.css"
import Header from '../Header/Header'
import Footer from './Footer'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import AddIcon from '@mui/icons-material/Add';
import img4 from "./img4.jpg"
import img5 from "./img5.jpg"
import img6 from "./img6.jpg"
import img7 from "./img7.png"
import img8 from "./img8.jpg"
import img9 from "./img9.jpg"
import img10 from "./img10.jpg"
import img11 from "./img11.jpg"
import img12 from "./img12.jpg"
import { Avatar } from '@mui/material';
import background from "./background.jpg"
import { useSelector } from 'react-redux';
function MyAccount() {
  const user = useSelector(state => state.user.user.user)
  const[follows,setfollow]=useState(true)
  const[follows1,setfollow1]=useState(true)
   const[follows2,setfollow2]=useState(true)
   const[follows3,setfollow3]=useState(true)
   const[follows4,setfollow4]=useState(true)
   const[follows5,setfollow5]=useState(true)
   const[follows6,setfollow6]=useState(true)
   const[follows7,setfollow7]=useState(true)
   const[follows8,setfollow8]=useState(true)
   const[follows9,setfollow9]=useState(true)
   const[follows10,setfollow10]=useState(true)
   const[follows11,setfollow11]=useState(true)
   const[follows12,setfollow12]=useState(true)
    const recentItem=(topic)=>(
        <div className='sidebar_recentItem'>
          <span className='sidebar_hash'>.</span>
          <p>{topic}</p>
        </div>)
   
  return (
    <div>
        <Header/>
           <div className='myacc'>
           <div className='myacc_body'>
         <p>Manage my network</p>
         {recentItem('Connections')}
         {recentItem('Contacts')}
         {recentItem('Following & Followers')}
         {recentItem('Groups')}
         {recentItem('Events')}
         {recentItem('Pages')}
         {recentItem('NewsLetter')}
         {recentItem('HasshTag')}
         <Footer/>
       </div>
       
       <div className='backgrounds'>
       <div className='sidebars '>
      <div className='sidebar_top sides1'>
    <img src={background}/>
    <Avatar className="sidebar_avatar" src={img1}></Avatar>
    <h2>Microsoft</h2>
      <h4>Company:Computer Software</h4>
      
    <div className='follow fom' onClick={()=>{
         setfollow1((e)=>{
            return ! e
         })
        }} style={{border:follows1 ? "1.5px solid #5E5E5E" :"1.5px solid #0A66C2"}}>
          <AddIcon style={{display:follows1 ? "flex" :"none"}}/>
         <p style={{color:follows1 ? "#5E5E5E" :"#0A66C2"}}>{follows1 ? "follow" : "following"}</p>
        </div>
        <p className='kes'>1000k Followers</p>
      </div>

      <div className='sidebar_top sides1'>
    <img src={background}/>
    <Avatar className="sidebar_avatar" src={img4}></Avatar>
    <h2>Microsoft</h2>
      <h4>Company:Computer Software</h4>
      
    <div className='follow fom' onClick={()=>{
         setfollow2((e)=>{
            return ! e
         })
        }} style={{border:follows2 ? "1.5px solid #5E5E5E" :"1.5px solid #0A66C2"}}>
          <AddIcon style={{display:follows2 ? "flex" :"none"}}/>
         <p style={{color:follows2 ? "#5E5E5E" :"#0A66C2"}}>{follows2 ? "follow" : "following"}</p>
        </div>
        <p className='kes'>1000k Followers</p>
      </div>
      <div className='sidebar_top sides1'>
    <img src={background}/>
    <Avatar className="sidebar_avatar" src={img5}></Avatar>
    <h2>Microsoft</h2>
      <h4>Company:Computer Software</h4>
      
    <div className='follow fom' onClick={()=>{
         setfollow3((e)=>{
            return ! e
         })
        }} style={{border:follows3 ? "1.5px solid #5E5E5E" :"1.5px solid #0A66C2"}}>
          <AddIcon style={{display:follows3 ? "flex" :"none"}}/>
         <p style={{color:follows3 ? "#5E5E5E" :"#0A66C2"}}>{follows3 ? "follow" : "following"}</p>
        </div>
        <p className='kes'>1000k Followers</p>
      </div>
      <div className='sidebar_top sides1'>
    <img src={background}/>
    <Avatar className="sidebar_avatar" src={img6}></Avatar>
    <h2>Jobs Opportunity</h2>
      <h4>Company:Computer Software</h4>
      
    <div className='follow fom' onClick={()=>{
         setfollow4((e)=>{
            return ! e
         })
        }} style={{border:follows4 ? "1.5px solid #5E5E5E" :"1.5px solid #0A66C2"}}>
          <AddIcon style={{display:follows4 ? "flex" :"none"}}/>
         <p style={{color:follows4 ? "#5E5E5E" :"#0A66C2"}}>{follows4 ? "follow" : "following"}</p>
        </div>
        <p className='kes'>1000k Followers</p>
      </div>
      <div className='sidebar_top sides1'>
    <img src={background}/>
    <Avatar className="sidebar_avatar" src={img7}></Avatar>
    <h2>Javascript</h2>
      <h4>Company:Turtorals</h4>
      
    <div className='follow fom' onClick={()=>{
         setfollow5((e)=>{
            return ! e
         })
        }} style={{border:follows5 ? "1.5px solid #5E5E5E" :"1.5px solid #0A66C2"}}>
          <AddIcon style={{display:follows5 ? "flex" :"none"}}/>
         <p style={{color:follows5 ? "#5E5E5E" :"#0A66C2"}}>{follows5 ? "follow" : "following"}</p>
        </div>
        <p className='kes'>1000k Followers</p>
      </div>
      <div className='sidebar_top sides1'>
    <img src={background}/>
    <Avatar className="sidebar_avatar" src={img8}></Avatar>
    <h2>Binance</h2>
      <h4>Company:Bitcoin</h4>
      
    <div className='follow fom' onClick={()=>{
         setfollow6((e)=>{
            return ! e
         })
        }} style={{border:follows6 ? "1.5px solid #5E5E5E" :"1.5px solid #0A66C2"}}>
          <AddIcon style={{display:follows6 ? "flex" :"none"}}/>
         <p style={{color:follows6 ? "#5E5E5E" :"#0A66C2"}}>{follows6 ? "follow" : "following"}</p>
        </div>
        <p className='kes'>1000k Followers</p>
      </div>
      <div className='sidebar_top sides1'>
    <img src={background}/>
    <Avatar className="sidebar_avatar" src={img9}></Avatar>
    <h2>Github</h2>
      <h4>Company: Software</h4>
      
    <div className='follow fom' onClick={()=>{
         setfollow7((e)=>{
            return ! e
         })
        }} style={{border:follows7 ? "1.5px solid #5E5E5E" :"1.5px solid #0A66C2"}}>
          <AddIcon style={{display:follows7 ? "flex" :"none"}}/>
         <p style={{color:follows7 ? "#5E5E5E" :"#0A66C2"}}>{follows7 ? "follow" : "following"}</p>
        </div>
        <p className='kes'>1000k Followers</p>
      </div>
      
 
      <div className='sidebar_top sides1'>
    <img src={background}/>
    <Avatar className="sidebar_avatar" src={img10}></Avatar>
    <h2>DataScience community</h2>
      <h4>DataScientist</h4>
      
    <div className='follow fom' onClick={()=>{
         setfollow8((e)=>{
            return ! e
         })
        }} style={{border:follows8 ? "1.5px solid #5E5E5E" :"1.5px solid #0A66C2"}}>
          <AddIcon style={{display:follows8 ? "flex" :"none"}}/>
         <p style={{color:follows8 ? "#5E5E5E" :"#0A66C2"}}>{follows8 ? "follow" : "following"}</p>
        </div>
        <p className='kes'>200k Followers</p>
      </div>
      <div className='sidebar_top sides1'>
    <img src={background}/>
    <Avatar className="sidebar_avatar" src={img12}></Avatar>
    <h2>Alogariths</h2>
      <h4>Company:DataScience</h4>
      
    <div className='follow fom' onClick={()=>{
         setfollow9((e)=>{
            return ! e
         })
        }} style={{border:follows9 ? "1.5px solid #5E5E5E" :"1.5px solid #0A66C2"}}>
          <AddIcon style={{display:follows9 ? "flex" :"none"}}/>
         <p style={{color:follows9 ? "#5E5E5E" :"#0A66C2"}}>{follows9 ? "follow" : "following"}</p>
        </div>
        <p className='kes'>300k Followers</p>
      </div>
      <div className='sidebar_top sides1'>
    <img src={background}/>
    <Avatar className="sidebar_avatar" src={img11}></Avatar>
    <h2>Python</h2>
      <h4>Company: Software</h4>
      
    <div className='follow fom' onClick={()=>{
         setfollow10((e)=>{
            return ! e
         })
        }} style={{border:follows10 ? "1.5px solid #5E5E5E" :"1.5px solid #0A66C2"}}>
          <AddIcon style={{display:follows10 ? "flex" :"none"}}/>
         <p style={{color:follows10 ? "#5E5E5E" :"#0A66C2"}}>{follows10 ? "follow" : "following"}</p>
        </div>
        <p className='kes'>1000k Followers</p>
      </div>
      <div className='sidebar_top sides1'>
    <img src={background}/>
    <Avatar className="sidebar_avatar" src={img3}></Avatar>
    <h2>Binance</h2>
      <h4>Company:Bitcoin</h4>
      
    <div className='follow fom' onClick={()=>{
         setfollow11((e)=>{
            return ! e
         })
        }} style={{border:follows11 ? "1.5px solid #5E5E5E" :"1.5px solid #0A66C2"}}>
          <AddIcon style={{display:follows11 ? "flex" :"none"}}/>
         <p style={{color:follows11 ? "#5E5E5E" :"#0A66C2"}}>{follows11 ? "follow" : "following"}</p>
        </div>
        <p className='kes'>400k Followers</p>
      </div>

       <div className='sidebar_top sides1'>
    <img src={background}/>
    <Avatar className="sidebar_avatar" src={img2}></Avatar>
    <h2>Stockover flow</h2>
      <h4>Company:Computer Software</h4>
      
    <div className='follow fom' onClick={()=>{
         setfollow12((e)=>{
            return ! e
         })
        }} style={{border:follows12 ? "1.5px solid #5E5E5E" :"1.5px solid #0A66C2"}}>
          <AddIcon style={{display:follows12 ? "flex" :"none"}}/>
         <p style={{color:follows ? "#5E5E5E" :"#0A66C2"}}>{follows12 ? "follow" : "following"}</p>
        </div>
        <p className='kes'>100k Followers</p>
      </div>
        </div>
        
    

 

             











































        </div>
        

       </div>
       
        
       </div>
         
    
         
    
  )
}

export default MyAccount