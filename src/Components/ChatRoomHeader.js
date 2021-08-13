import React, {useEffect} from 'react'
import {FiVideo} from 'react-icons/fi'
import {MdCall} from 'react-icons/md'
import { IconContext } from "react-icons"
import '../Css/ChatRoomHeader.css'
import { usePeer } from "../Contexts/PeerContext"
import { useAuth } from "../Contexts/AuthContext"
import firebase from './firebase'

function ChatRoomHeader(props) {

  const {setShowVideoCall, 
         setCurrentCallState,
         setCallInformation} = usePeer() 
  const {currentUser} = useAuth()

  useEffect(()=>{
    if(currentUser!=null){
      const call=firebase.firestore().collection('calls').doc(currentUser.email)
      .onSnapshot(async(snapshot)=>{
        if(snapshot.data()&&snapshot.data().type==="offer"){
          console.log(snapshot.data())
          setShowVideoCall(true)
          setCurrentCallState("callResponse")
          setCallInformation(snapshot.data())
        } 
      })
    }
  },[])

  const handleMakingCall = () =>{
    setShowVideoCall(true)
    setCurrentCallState("callOffer")
  }


    return (
        <div className="chatroomHeaderContainer">
            <br/>
            <h1>{props.title}</h1>
            <div>
            <IconContext.Provider value={{ color: "green"}}>
            <FiVideo size={48} onClick={handleMakingCall}/>
            &#160;&#160;&#160;&#160;&#160;
            <MdCall size={48}/>
            </IconContext.Provider>
            </div>
        </div>
    )
}

export default ChatRoomHeader
