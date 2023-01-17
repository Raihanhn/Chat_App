import React from 'react'
import img1 from '../img/pic-3.png'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='search here...' />
      </div>
      <div className="userChat">
        <img src={img1} alt="" />
        <div className="userCHatInfo">
          <span>jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search