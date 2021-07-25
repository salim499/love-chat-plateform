import { useState } from 'react';
import { ChatEngine, getOrCreateChat } from 'react-chat-engine';
import {BrowserRouter as Router} from 'react-router-dom'
import './ChatRoom.css';



function ChatRoom() {
  const [show, setShow]=useState(false)  
  const [userNamee, setUserNamee]=useState("")
  const [userSecrett, setUserSecrett]=useState("")



  return (
    show===false?
    <>
    <input type="text" onChange={(e)=>setUserNamee(e.target.value)}></input>
    <input type="text" onChange={(e)=>setUserSecrett(e.target.value)}></input>
    <button onClick={()=>setShow(true)}>show</button>
    </>
    :
    <ChatEngine
      height="100vh"
      projectID={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
      userName={userNamee}
      userSecret={userSecrett}
      //renderNewChatForm={(creds) => renderChatForm(creds)}
     // renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
     // onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
}

export default ChatRoom;