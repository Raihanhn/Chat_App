import React from 'react'
import img1 from '../img/pic-3.png'

const Chats = () => {
  return (
    <div className='chats'>
        <div className="userChat">
        <img src={img1} alt="" />
        <div className="userCHatInfo">
          <span>jane</span>
          <p>Hello</p>
        </div>
      </div>
      
      <div className="userChat">
        <img src={img1} alt="" />
        <div className="userCHatInfo">
          <span>jane</span>
          <p>Hello</p>
        </div>
      </div>

      <div className="userChat">
        <img src={img1} alt="" />
        <div className="userCHatInfo">
          <span>jane</span>
          <p>Hello</p>
        </div>
      </div>

    

      
      
    </div>
  )
}

export default Chats