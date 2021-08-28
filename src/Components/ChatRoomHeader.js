import React, {useEffect} from 'react'
import {FiVideo} from 'react-icons/fi'
import { IconContext } from "react-icons"
import '../Css/ChatRoomHeader.css'
import { usePeer } from "../Contexts/PeerContext"
import { useAuth } from "../Contexts/AuthContext"
import firebase from './firebase'

function ChatRoomHeader(props) {

  const {setShowVideoCall, 
         setCurrentCallState,
         setCallInformation,
        callInformation} = usePeer() 
  const {currentUser} = useAuth()

  useEffect(()=>{
    if(currentUser!=null){
      const call=firebase.firestore().collection('calls').doc(currentUser.email)
      .onSnapshot(async(snapshot)=>{
        console.log(snapshot.data())
        if(snapshot.data()&&snapshot.data().type==="offer"){
          console.log(snapshot.data())
          setShowVideoCall(true)
          setCurrentCallState("callResponse")
          setCallInformation(snapshot.data())
        } else if (snapshot.data()==null){
          setShowVideoCall(false)
        }
      })
    }
  },[])

  const handleMakingCall = () =>{
    setShowVideoCall(true)
    setCurrentCallState("callOffer")
  }

  useEffect(async()=>{
    if(currentUser && currentUser!=null){
    try {
      await firebase.firestore().collection('calls').doc(currentUser.email).delete()
      console.log("Current successfully deleted!");
      if(await firebase.firestore().collection('destroy').doc(currentUser.email)!=null){
        await firebase.firestore().collection('destroy').doc(currentUser.email).delete()
      }
    }
    catch(error){
      console.error("Error removing document: ", error);
    }
}
if(callInformation && callInformation!=null){
    try {
      await firebase.firestore().collection('calls').doc(callInformation.from).delete()
      console.log("Other successfully deleted!");
      if(await firebase.firestore().collection('destroy').doc(callInformation.from)!=null){
        await firebase.firestore().collection('destroy').doc(callInformation.from).delete()
      }
    }
    catch(error){
      console.error("Error removing document: ", error);
    }
}
  },[])

    return (
        <div className="chatroomHeaderContainer">
            <br/>
            <h1>{props.title}</h1>
            <div>
            <IconContext.Provider value={{ color: "green"}}>
            <FiVideo size={48} onClick={handleMakingCall}/>
            &#160;&#160;&#160;&#160;&#160;

            </IconContext.Provider>
            </div>
        </div>
    )
}

export default ChatRoomHeader
