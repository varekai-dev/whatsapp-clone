import React, { useEffect, useState } from "react"
import "./SideBarChat.css"
import { Avatar } from "@material-ui/core"
import "./SideBarChat"

function SideBarChat({ addNewChat }) {
  const [seed, setSeed] = useState("")
  const createChat = () => {
    const roomName = prompt("Please enter name for chat")
    if (roomName) {
    }
  }
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])
  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>Room name</h2>
        <p>Last message...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new Chat</h2>
    </div>
  )
}

export default SideBarChat
