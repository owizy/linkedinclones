import React from 'react'
import { useEffect,useState } from 'react'
import "./message.css"
import Messagepost from './MessagePost';
import { db } from './Firebase';
import {collection,addDoc,getDocs,serverTimestamp,FieldValue,} from "firebase/firestore"
import { useSelector } from 'react-redux';
import { selectuser } from '../features/counter/userslice';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
function Messages() {
    
    const [post,setpost]=useState([])
    const [input,setinput]=useState('')
    const postmessage = collection(db,"message");
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
    email:user.email,
    photo:user.email ? user.email.charAt(0).toUpperCase():"M",
    description:input,
    time:new Date().toLocaleString()
  })
}catch(err){
  alert('error occured due to '+err)
}
setinput('')
}

return (
    <div className='chatcont'>
        <div className='bod'>
            <h1> 
              <Link to={"/"}><ArrowBackIcon/></Link>
               Message</h1>
        </div>
      <div className='shoe'>
        {
            post.map((e)=>(
                <Messagepost key={user._id} props={e}/>
            ))
        }
        </div>
      <div className='cont_chat'>
                                         
          <input type="text" value={input} onChange={(e)=>setinput(e.target.value)} placeholder='Type a message'/>  
          <button onClick={sendpost} type="submit">Send</button>    
        
      </div>
      
    </div>
  )
}

export default Messages