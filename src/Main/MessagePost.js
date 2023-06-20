import React from 'react'
import "./message.css"
import { Avatar } from '@mui/material'
function MessagePost({props}) {
  return (
    
            <div  className='fom'>
       <div className='p_header' >
     <Avatar src={props.photo}>{props.photo}</Avatar>
      <div className='info'>
         <h1>{props.email}</h1>    
         <p>{props.description}</p>
         <p>{props.time}</p>
      </div>
       </div>

    </div>
  )
}

export default MessagePost