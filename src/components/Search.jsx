import React from 'react'
import { useState } from 'react'
import img1 from '../img/pic-3.png'
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from "../firebase"

const Search = () => {
  const [username, setUsername] = useState("")
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  const handleSearch = async ()=>{
    const q = query(
      collection(db, "users"),
      where("displayName", "==" , username)
    );

    try{

      const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        setUser(doc.data())
      });
    }catch(err){
      setErr(true);
    }
  };

  const handleKey = e=>{
    e.code === "Enter" && handleSearch();
  }
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='search here...' onKeyDown={handleKey} onChange={e=>setUsername(e.target.value)} />
      </div>
      {err && <span>User not found!</span> }
      {user && <div className="userChat">
        <img src={user.photoURL} alt="" />
        <div className="userCHatInfo">
          <span>{user.displayName} </span>
        </div>
      </div>}
    </div>
  )
}

export default Search