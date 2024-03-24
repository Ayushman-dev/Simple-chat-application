import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Chat = ({socket, username, room, back}) => {
    const [currentmsg, setCurrentmsg] = useState("")
    const [Messagelist, setMessagelist] = useState([])

    let time = new Date().getHours() + ":" + new Date().getMinutes()


    const  sendMessage = async () => {
        if(currentmsg !== ""){
            const msgdata = {
                room: room,
                by: username,
                message: currentmsg,
                time: time
            }

            await socket.emit("send", msgdata)
        }
    }

    useEffect(() => {
        const handleReceivedMessage = (data) => {
            setMessagelist((list) => [...list, data])
        };
    
        socket.on("message_received", handleReceivedMessage);
    
        return () => {
            socket.off("message_received", handleReceivedMessage);
        };
    }, [socket]);

    let [users, setUsers] = useState([])

    
    useEffect(() => {
        const handleReceivedMessage = (data) => {
            setUsers((list) => [...list, data])
        };
    
        socket.on("userdata_reveiced", handleReceivedMessage);
    
        return () => {
            socket.off("userdata_reveiced", handleReceivedMessage);
        };
    }, [socket]);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

  return (
    <div className='chat'>
        <div className='headerchat'>
            <button className='back'><FontAwesomeIcon icon={faArrowLeft}     onClick={back} /></button>
            <p className='roomid'>Room: {room}</p>
        </div>
        <div className='leftchat'>            
            {Messagelist.map((messagecontent) => {
                return <div className={messagecontent.by === username ? "me" : "other"}><div className='bytime'><div className='author'>{messagecontent.by}</div><div className='time'>{messagecontent.time}</div></div><div className='message'>{messagecontent.message}</div></div>
            })}</div>
            <div className='inputfield'>
                <input type='text' placeholder='Type a message.....' className="msg"onChange={(event) => {
                setCurrentmsg(event.target.value)
                
            }}
            onKeyPress={handleKeyPress}/>
            <button><FontAwesomeIcon icon={faPaperPlane}  className='sendbtn'  onClick={sendMessage} /></button>
        </div>
        <div className='usersinroom'>
            <div className='users'>
            <h2 className='activeusers'>New users</h2>
                {users.map((userdatas) => {
                return <div>{userdatas.username === username ? userdatas.username + "(You)" : userdatas.username}</div>
            })}</div>
        </div>

    </div>
  )
}

export default Chat