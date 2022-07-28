import React, { useState, useEffect } from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import './Chat.css'
import { AttachFile, MoreVert, SearchOutlined, InsertEmoticon } from '@material-ui/icons'
import MicIcon from '@material-ui/icons/Mic'

const Chat = () => {
    const [seed, setSeed] = useState("")
    const [input, setInput] = useState("")

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const sendMessage = e => {
        e.preventDefault()
        setInput('')
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/b${seed}.svg`} />
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
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className={`chat__message ${true && 'chat__receiver'}`}>
                    <span className="chat__name">MJK</span>
                    How are you?
                    <span className="chat__timestamp">
                        {new Date().toLocaleTimeString()}
                    </span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">Jagdish</span>
                    Hi Guys
                    <span className="chat__timestamp">
                        {new Date().toLocaleTimeString()}
                    </span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input
                        value={input} 
                        onChange={e => setInput(e.target.value)}
                        placeholder="Type a message" 
                        type="text" 
                    />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )

}

export default Chat