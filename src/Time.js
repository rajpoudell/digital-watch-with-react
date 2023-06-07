import React, { useState } from 'react'
import './time.css'

export const Time = () => {
    // const[clock,setclock] =useState("")

    var currentDate = new Date();
    var currentTime = currentDate.toLocaleTimeString();
    console.log(currentTime)
  return(
    <div className='time--main'>
        <div className="time--clock">
            {currentTime}
        </div>

    </div>
  )
}
