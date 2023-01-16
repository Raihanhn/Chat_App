import React from 'react'
import img from "../img/pic-3.png"

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Raihan chat</span>
      <div className="user">
        <img src={img} alt="" />
        <span>Robin</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar