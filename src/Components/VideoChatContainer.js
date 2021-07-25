import React, {useEffect, useRef} from 'react'
import * as Peer from 'simple-peer'
function VideoChatContainer() {

  const videoEmitter=useRef()
  const videoReceiver= useRef()
  const peer=useRef()
  const initiatorId=useRef()
  const otherId=useRef()
  useEffect(async()=>{

    videoEmitter.current.srcObject = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    videoEmitter.current.play()
    peer.current=new Peer({
      initiator:true,
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
    peer.current.on('signal',(data)=>{
      initiatorId.current.value = JSON.stringify(data)
    })
  },[])

  const connectF=async()=>{
    peer.current.signal(JSON.parse(otherId.current.value))

    peer.current.on('stream',(data)=>{
        videoReceiver.current.srcObject=data
        videoReceiver.current.play()
      }) 
  }
  return (
    <div>
      <video ref={videoEmitter}></video>
      <video ref={videoReceiver}></video>
      <label>My id</label>
      <textarea ref={initiatorId}></textarea>
      <br/>
      <label>Other id</label>
      <textarea ref={otherId}></textarea>   
      <button onClick={connectF}>connect</button>     
    </div>
  )
}

export default VideoChatContainer
