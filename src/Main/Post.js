import React, { forwardRef } from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

const Post=forwardRef(({props},ref) =>{
  return (
    <div ref={ref} className='post'>
       <div className='post_header' >
     <Avatar src={props.photo}>{props.photoUrl}</Avatar>
      <div className='post_info'>
         <h2>{props.name}</h2>
         <p>{props.message}</p>
      </div>
       </div>
       <div className='post_body'>
        <p>{props.description}</p>
          <img src={props.Img} className='Images'/>
       </div>
       <div className='post_buttons'>
      <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray"/>
      <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray"/>
      <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray"/>
      <InputOption Icon={SendOutlinedIcon} title="Send" color="gray"/>
       </div>
    </div>
  )
})

export default Post