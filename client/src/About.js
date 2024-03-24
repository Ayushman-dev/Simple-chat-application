import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const About = () => {
  return (
<div>
<button className='back'><Link to="/"><FontAwesomeIcon icon={faArrowLeft}  /></Link></button>

<div className='about'>
        <div className='info'>
        Welcome to our web chatting application, meticulously crafted by Ayushman Talukdar, utilizing React.js, Express.js, Node.js, and the indispensable Socket.IO framework. To utilize this platform, kindly input your desired display name along with the designated room ID you wish to join, then proceed by selecting 'Join a Room'. Additionally, you have the capability to share the room ID with your acquaintances, granting them access to converse with you within the same room. This seamless process facilitates real-time communication within the chosen room, enabling engaging interactions with fellow participants. This feature fosters seamless collaboration and connectivity, ensuring effortless communication among friends and colleagues.
        </div>
        <div className='info'>
        How to join:
        <span>1. Input your desired display name and the designated room ID.</span>
        <span>
        2. Click on 'Join a Room' to enter the chat room.
        </span>
        <span>
            3. Begin engaging in real-time communication with fellow participants.
        </span>
        <span>
        Additionally, you can share the room ID with your acquaintances to grant them access to join you in the conversation. This feature fosters seamless collaboration and connectivity, ensuring effortless communication among friends and colleagues.
        </span>
        </div>
    </div>
</div>
  )
}

export default About