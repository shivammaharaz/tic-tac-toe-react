import React from 'react'
import './style.css'

const Block = ({mark,position,changeMark}) => {
  return (
    <div className={`block mark${mark}`}  onClick={()=>changeMark(position)}>  
    </div>
  )
}

export default Block