import React from 'react'
import "./HeaderOption.css"
import { Avatar } from '@mui/material'
function HeaderOption({avatar,Icon,title,me}) {
  return (
    <div className='headeroption'>
         
            {Icon && <Icon className="headeroption_icon" />}
            {avatar &&(<Avatar className="headeroption_icon  " ><p className='myself'>{me}</p></Avatar>)}
            
               <h3 className='headeroption_title'>{title}</h3>
          
    </div>
  )
}

export default HeaderOption