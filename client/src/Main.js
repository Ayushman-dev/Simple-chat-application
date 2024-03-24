import React from 'react'
import { io } from "socket.io-client"
import {useState} from "react"
import Chat from './Chat';
import Login from './login';


const socket = io.connect("http://localhost:3001")


const Main = () => {
    const [userName,setUsername ] = useState("")
    const [valid,setValid ] = useState(true)
    const [room,setRoom ] = useState("")
    const [showchat,setShowchat ] = useState(false)
  
    const joinRoom = () => {
      if( userName !== "" && room !== ""){
        socket.emit("join_room", room)
        setShowchat(true)
      }
      else{setValid(false)}
    }
  
    let back = () => {
      setShowchat(false)
  
    }
  return (
    <div>
    {showchat !== true ? <Login socket = {socket}username={userName} setUsername={setUsername} setValid={setValid} valid={valid} setRoom={setRoom} joinRoom={joinRoom} room={room}/>: 
      <Chat socket = {socket} username={userName} room = {room} back={back}/>}
    </div>
  )
}

export default Main