import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
import img from "../img/pic-3.png"

const Message = ({message}) => {

  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)

  console.log(message)
  return (
    <div className='message owner'>
      {/* <div className="messageInfo">
        <img src={img} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src={img} alt="" />
      </div> */}
    </div>
  )
}

export default Message