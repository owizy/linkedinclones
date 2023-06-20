import React, { useState } from 'react'
import "./Widgets.css"
import AddIcon from '@mui/icons-material/Add';
import InfoIcon from '@mui/icons-material/Info';
import { Avatar } from '@mui/material';
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import Footer from './Footer';
import { Link } from 'react-router-dom';
function Widgets() {
   const[follows,setfollow]=useState(true)
   const[follows2,setfollow2]=useState(true)
   const[follows3,setfollow3]=useState(true)
   const FeedArticle=(heading,subtitle,image)=>(
    <div className='widgets_article'>
        <div className='widgets_articleleft'>
         <img src={image} height={40} style={{objectFit:"contain"}}/>
        
        <div className='widgets_articleright'>
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
        
        </div>
        
    </div>
 )
    return (
    <div className='widgets_cont'>
      <div className='widgets'>
      <div className='widgets_header'>
     <h2>
     Add to your feed
     </h2>
     <InfoIcon/>
      </div>
     <div>
     {FeedArticle("Microsoft","Company:Computer Software",img1)}
     <div className='follow' onClick={()=>{
         setfollow((e)=>{
            return ! e
         })
        }} style={{border:follows ? "1.5px solid #5E5E5E" :"1.5px solid #0A66C2"}}>
          <AddIcon style={{display:follows ? "flex" :"none"}}/>
         <p style={{color:follows ? "#5E5E5E" :"#0A66C2"}}>{follows ? "follow" : "following"}</p>
        </div>

     </div>
     <div>
     {FeedArticle("Stack Flow","Company:Information",img2)}
     <div className='follow' onClick={()=>{
         setfollow2((e)=>{
            return ! e
         })
        }} style={{border:follows2 ? "1.5px solid #5E5E5E" :"1.5px solid #0A66C2"}}>
          <AddIcon style={{display:follows2 ? "flex" :"none"}}/>
         <p style={{color:follows2 ? "#5E5E5E" :"#0A66C2"}}>{follows2 ? "follow" : "following"}</p>
        </div>
     </div>
      <div>
      {FeedArticle("Binance","Company:Bitcoin",img3)}
      <div className='follow' onClick={()=>{
         setfollow3((e)=>{
            return ! e
         })
        }} style={{border:follows3 ? "1.5px solid #5E5E5E" :"1.5px solid #0A66C2"}}>
          <AddIcon style={{display:follows3 ? "flex" :"none"}}/>
         <p style={{color:follows3 ? "#5E5E5E" :"#0A66C2"}}>{follows3 ? "follow" : "following"}</p>
        </div>
      </div>
      
  <Link to="/myaccount">
  <div className='recommend'>
         <p>View All recommendation</p>
         <ArrowForwardOutlinedIcon/>
      </div>
  </Link>
    </div>
    <Footer/>
    </div>
  )
}

export default Widgets