import React, { useEffect, useState } from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import AttachFile from '@material-ui/icons/AttachFile'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchOutlined from '@material-ui/icons/Search'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
function Chat() {
  const [input, setInput] = useState('')
  const [seed, setSeed] = useState('')
  const sendMessage = (e) => {
    e.preventDefault()
    setInput('')
  }
  const createChat = () => {
    const roomName = prompt('Please enter name for chat')
    if (roomName) {
    }
  }
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className={`chat__message ${true && 'chat__reciever'}`}>
          <span className="chat__name">varekai</span>
          Hey guys
          <span className="chat__timestamp">3:52pm</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Type a message" />
          <button onClick={sendMessage} type="Submit">
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  )
}

export default Chat
