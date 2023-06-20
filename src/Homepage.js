import React from 'react'
import "./App.css"
import Sidebar from './Main/Sidebar'
import Feed from './Main/Feed'
import Header from './Header/Header'
import Widgets from './Main/Widgets'
function Homepage() {
  return (
    <div className="App">
            

    <Header/>

   <div className='app_body'>
     
   <Sidebar/>
   <Feed />
   <Widgets/>
 </div>

 </div>   

  )
}

export default Homepage