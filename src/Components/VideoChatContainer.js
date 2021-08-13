import React, {useEffect, useRef} from 'react'
import * as Peer from 'simple-peer'
import firebase from './firebase'
import { useAuth } from "../Contexts/AuthContext"

import '../Css/Video.css'
import  {AiOutlineAudioMuted, AiOutlineAudio} from 'react-icons/ai'
import {FiVideo, FiVideoOff} from 'react-icons/fi'
import {MdCallEnd, MdCall} from 'react-icons/md'
function VideoChatContainer() {

  const {usersChat, currentUser } = useAuth() 

  const videoEmitter=useRef()
  const videoReceiver= useRef()
  const peer=useRef()

  useEffect(async()=>{
    if(currentUser!=null){
      const call=firebase.firestore().collection('calls').doc(currentUser.email)
      .onSnapshot(async(snapshot)=>{
        
        if(snapshot.data()&&snapshot.data().type==="offer"){
        /*  videoEmitter.current.srcObject = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
          videoEmitter.current.play()  */
          peer.current=new Peer({
            initiator:false,
            stream:videoEmitter.current.srcObject,
            trickle:false, 
            config:{
              iceServers: [
                {
                  urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
                },
              ],
              iceCandidatePoolSize: 10,
            }
          })
          peer.current.signal(JSON.parse(snapshot.data().sd))
          peer.current.on('signal',(data)=>{
            firebase.firestore().collection('calls').doc(snapshot.data().from)
            .set({
              type:"response",
              from:currentUser.email,
              sd:JSON.stringify(data)
            })
          })
          peer.current.on('stream',(data)=>{
              videoReceiver.current.srcObject=data
              videoReceiver.current.play()
            })           
        }else if((snapshot.data()&&snapshot.data().type==="response")){
          peer.current.signal(JSON.parse(snapshot.data().sd))
    
          peer.current.on('stream',(data)=>{
              videoReceiver.current.srcObject=data
              videoReceiver.current.play()
            }) 
            
        }

      })
      return call
    } 
  },[])


  const muteFunction=()=>{
    videoEmitter.current.srcObject.getVideoTracks()[0].enabled = !videoEmitter.current.srcObject.getVideoTracks()[0].enabled
  }
  const callFunction=async(e)=>{

    peer.current=new Peer({
      initiator:true,
      stream:await navigator.mediaDevices.getUserMedia({ video: true, audio: false }),
      trickle:false, 
      config:{
        iceServers: [
          {
            urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
          },
        ],
        iceCandidatePoolSize: 10,
      }
    })
    peer.current.on('signal',async(data)=>{
      firebase.firestore().collection('calls').doc(e.target.textContent)
      .set({
        type:"offer",
        from:currentUser.email,
        sd:JSON.stringify(data)
      })
    })
  }
  return (
    <div>
      <div className="videosContainer">
      <div className="video">
      <video ref={videoEmitter}></video>
      <div className="videoActions">
      <AiOutlineAudioMuted size={48}/>
        <AiOutlineAudio size={48}/>
        <FiVideo size={48}/>
        <FiVideoOff size={48}/>
        <MdCall size={48}/>
        <MdCallEnd size={48}/>
        </div>
      </div>
        <div className="video">
        <video ref={videoReceiver}></video>
        <AiOutlineAudioMuted/>
        <AiOutlineAudio/>
        <FiVideo/>
        <FiVideoOff onClick={muteFunction}/>
        <MdCall/>
        <MdCallEnd/>
        </div>
      </div>  
      {usersChat&&usersChat.map((val,index)=>(
        <button onClick={callFunction}>{val.email}</button>
      ))} 
    </div>
  )
}

export default VideoChatContainer
