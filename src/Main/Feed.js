import React, { useEffect, useState } from 'react'
import "./Feed.css"
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventIcon from '@mui/icons-material/Event';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from './Firebase';
import {collection,addDoc,getDocs,serverTimestamp,FieldValue,} from "firebase/firestore"
import { useSelector } from 'react-redux';
import { selectuser } from '../features/counter/userslice';
import FlipMove from 'react-flip-move';
import Logos from "./Logos1.jpg"
import Brand1 from "./Brand1.jpg"
import Logos2 from "./Logos2.jpg"
import Brand2 from "./Brand2.jpg"
import Logos3 from "./Logos3.jpg"
import Brand3 from "./Brand3.jpg"
import Brand4 from "./Brand4.jpg"
import Logos4 from "./Logos4.jpg"
function Feed() {
const [post,setpost]=useState([])
const [input,setinput]=useState('')
const postmessage = collection(db,"post");
const user = useSelector(state => state.user.user.user)

useEffect(()=>{

  const allpost = async()=>{
    try{
      const data = await getDocs(postmessage);
     
     
     const  filterData=data.docs.map((doc)=>({
       ...doc.data(),
       id:doc.id,
     }))
     setpost(filterData)
    }catch(err){
       console.log("error occured due to"+err)
    }
  }  
  allpost();
},[postmessage])

const sendpost = async(e)=>{
  e.preventDefault();
try{
  await addDoc(postmessage,{
    name:user.email,
    message:  new Date().toLocaleString(),
    photoUrl:user.email ? user.email.charAt(0).toUpperCase():"M",
    description:input,
  })
}catch(err){
  alert('error occured due to '+err)
}
setinput('')
}

  const Form=[
    {
      photo:Logos4,
      name:"Linkedin",
      message:"800k followers",
      description:`Grow your skills and advance in your role with unlimited access to LinkedIn Learning. https://lnkd.in/gWhY9eUK
      `,
      Img:Brand4
      
      }
    ,{
         photo:Logos,
         name:"Bloomberg",
         message:"1000k followers",
         description:"ThinkBig and FindSolutions",
         Img:Brand1
  },{
    photo:Logos2,
    name:"Parroties",
    message:"400k followers",
    description:"Are you looking for a job? Follow our page now😊https://lnkd.in/d9pWTgrW",
    Img:Brand2
},
{
photo:Logos3,
name:"Linkedin News",
message:"600k followers",
description:`Starting your cover letter on a strong note encourages further reading, career coach Caroline Ceniza-Levine shares with Forbes.

`,
Img:Brand3

}

]
return (
    <div className='feed'>
      <div className='feed_inputContainer'>
        <div className='feed-input'>
                      <form onSubmit={sendpost} className='form'>
                      <CreateIcon />
          <input type="text" value={input} onChange={(e)=>setinput(e.target.value)}/>  
          <button onClick={sendpost} type="submit">Post</button>    
        </form> 
        </div>
        <div className='feed_inputOption'>
          <InputOption Icon={ImageIcon} title="photo" color="#70B5F9"/>
          <InputOption Icon={SubscriptionsIcon} title="video" color="#E7A33E"/>
          <InputOption Icon={EventIcon} title="Event" color="#C0CBCD"/>
          <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E"/>
        </div>
      </div>
    <FlipMove>
    <div>
    {
        post.map((e)=>(
          <Post props={e} key={user._id} />
        ))
}
    </div>
    </FlipMove>
      {Form.map((e)=>(
        <Post props={e}/>
      ))}
    </div>
  )
}

export default Feed