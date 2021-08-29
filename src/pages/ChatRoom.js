import { ChatEngine } from 'react-chat-engine';
import '../Css/ChatRoom.css';
import { useAuth } from "../Contexts/AuthContext"

function ChatRoom() {

  const {currentUser } = useAuth()


  return (
    currentUser != null?
    <ChatEngine
      height="95vh"
      projectID={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
      userName={currentUser.email.split("@")[0]}
      userSecret={currentUser.uid}
      //renderChatHeader={(chat) => <ChatRoomHeader {...chat}/>}
    />
    : "Connectez vous"
  )
}

export default ChatRoom;