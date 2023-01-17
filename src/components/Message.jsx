import React from 'react'
import img from "../img/pic-3.png"

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src={img} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default Message