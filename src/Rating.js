import React, { useState } from 'react'
import Start from './Start'
const ratingStyle={
    display:'flex',
    gap:'5px',
    justifyContent:'center',
    alignItems:"center"
}

function Rating({maxReting}) {
  
    function handelClick(rating1)
    {
        setRating(rating1)
    }
    const [rating,setRating]=useState(0);
  return (
   <div style={ratingStyle}>
    {Array.from({length:maxReting},(_,index)=>
    (
        <Start key={index} handelClick={()=>handelClick(index+1)} full={rating>=index+1}/>
    ))}
    <p style={{fontSize:'18px',marginLeft:'10px',color:'rgb(252, 196, 25)'}}>{rating}</p>
   </div>
  )
}

export default Rating