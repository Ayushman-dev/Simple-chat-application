import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const Login = (props) => {


    let joins = async () => {
        const userdata = {
            username: props.username,
            room: props.room
        }

        await props.socket.emit("entered", userdata)
    }
  return (
    <div>
        <div className='main'>
        <div className='left'><div className='icon'><FontAwesomeIcon icon={faCommentDots}/></div><div className='catchline'>Connect, Chat, Create: Your World, Your Conversations!</div></div>
      <div className='right'>    
      <div className='blob'></div>

      <div className='rightcomp'>
      <p className='title'>Join a room  <Link to="/about"><FontAwesomeIcon className="quistion"icon={faQuestion}/></Link></p>
      <input className="input name inputfield"type="text" placeholder="Display name" onChange={(event) => {
        props.setUsername(event.target.value)
        props.setValid(true)
      }}/>
      <input input className="input room inputfield" type="numeric" placeholder="Room id"onChange={(event) => {
        props.setRoom(Number(event.target.value))
        props.setValid(true)

      }}/>
      {props.valid === true ? "" : <div className='invalidinfo'>Info is invalid</div>}
      <button onClick={() => {props.joinRoom(); joins()}} className='input btn'>Join a room </button>
      </div>  
      </div>
      </div> 
    </div>
  )
}

export default Login