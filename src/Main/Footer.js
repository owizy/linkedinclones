import React from 'react'
import footer1 from "./footer1.png"
import "./Footer.css"

function Footer() {
   const footer=(topic)=>(
        <p className='foooter_p'>{topic}</p>
   )
    return (
    <div className='footer fot'>
        <div className='photo'>
           <img src={footer1} height={250} className='photo1 sizes' /> 
        </div>
         <div className='wap'>
           {footer("About")}
           {footer("Accesibilty")}
           {footer("Help Center")}
           {footer("Privacy & Terms")}
           {footer("Ad Choices")} 
           {footer("Get the Linkedin app")}
           {footer("More")}
           <p>All right reserved &copy; Developer by Owuye AbdulMalik and Powered by Codeprof Academy {""}{new Date().getFullYear()} </p>  
         </div>
    </div>
  )
}

export default Footer