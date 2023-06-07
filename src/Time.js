import React, { useState } from 'react'
import './time.css'

export const Time = () => {

    var currentTime = new Date().toLocaleTimeString();
    
    console.log(currentTime)
    const[clock,setclock] =useState(currentTime)
    const updatedTime = ()=>{
       var currentTime = new Date().toLocaleTimeString();
       setclock(currentTime)

   }
   setInterval(updatedTime,1000)
   
  return(
    <div className='time--main'>
        <div className="time--clock">
            <h1 >{currentTime}</h1>
        </div>

    </div>
  )
}
