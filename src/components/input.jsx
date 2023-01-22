import React, { useContext } from 'react'
import img from "../img/img.png"
import attach from "../img/attach.png"
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
import { useState } from 'react'
import { arrayUnion, doc, Timestamp, updateDoc } from 'firebase/firestore'
import {v4 as uuid} from "uuid"
import { getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { db } from '../firebase'

const Input = () => {

  const [text, setText] = useState("")
  const [img, setImg] = useState("")

  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)
  
  const handleSend = async ()=>{
    if(img){

    const storageRef = ref(storage, uuid());
    const uploadTask = uploadBytesResumable(storageRef, img);

    uploadTask.on(
      (error) => {
        //TODO:Handle Error
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await updateDoc(doc(db, "chats", data.chatId), {
            messages: arrayUnion({
              id: uuid(),
              text,
              senderId: currentUser.uid,
              date: Timestamp.now(),
              img: downloadURL,
            }),
          });
        });
      }
    );

   }else{
      await updateDoc(doc(db,"chats",data.chatId),{
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId:currentUser.uid,
          date:Timestamp.now(),
        }),
      });
    }
  };

  return (
    <div className='input'>
      <input type="text" placeholder='Type something...' onChange={e=>setText(e.target.value)} />
      <div className="send">
        <img src={attach} alt="" />
        <input type="file" style={{display:"none"}} id="file" onChange={e=>setImg(e.target.files[0])} />
        <label htmlFor="file">
          <img src={img} alt="" />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default Input