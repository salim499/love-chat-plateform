import React, {useEffect, useRef, useState} from 'react'
import {Modal} from 'react-bootstrap'
import { usePeer } from "../Contexts/PeerContext"
import { useAuth } from "../Contexts/AuthContext"
import * as Peer from 'simple-peer'
import firebase from './firebase'
import '../Css/Video.css'
import  {AiOutlineAudioMuted, AiOutlineAudio} from 'react-icons/ai'
import {FiVideo, FiVideoOff} from 'react-icons/fi'
import {MdCallEnd, MdCall} from 'react-icons/md'
function VideoCallContainer() {

    const {showVideoCall, currentCallState, callInformation } = usePeer() 
    const {usersChat, currentUser } = useAuth()   

    const videoEmitter = useRef()
    const videoReceiver = useRef()
    const peer =useRef()

    const [answerCall, setAnswerCall] = useState(false)
    const [cameraOn, setCameraOn] = useState(true) 
    const [soundOn, setSoundOn] = useState(true)

    useEffect(async ()=>{
        if(showVideoCall){
          // case emitter
          if(currentCallState==="callOffer"){
            videoEmitter.current.srcObject=await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
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
            peer.current.on('signal',async(data)=>{
            const addCall=firebase.firestore().collection('calls').doc(usersChat[0].email)
            .set({
                type:"offer",
                from:currentUser.email,
                sd:JSON.stringify(data)
            })
            return addCall
            })
        } 
        // case receiver
        else if (currentCallState==="callResponse"){
            videoEmitter.current.srcObject=await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            videoEmitter.current.play()
        }
        }
    },[showVideoCall, currentCallState])

    useEffect(()=>{
        const call=firebase.firestore().collection('calls').doc(currentUser.email)
        .onSnapshot(async(snapshot)=>{
          if(snapshot.data()&&snapshot.data().type==="response"){
            peer.current.signal(JSON.parse(snapshot.data().sd))
            
            peer.current.on('stream',(data)=>{
                setAnswerCall(true)
                videoReceiver.current.srcObject=data
                videoReceiver.current.play()
              }) 
          } 
        })
    },[])

    const handleAnswerCall = () => {
      setAnswerCall(true)
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
      peer.current.signal(JSON.parse(callInformation.sd))
      peer.current.on('signal',(data)=>{
        firebase.firestore().collection('calls').doc(callInformation.from)
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
    }

    const handleCameraOnOff=()=>{
      videoEmitter.current.srcObject.getVideoTracks()[0].enabled = !videoEmitter.current.srcObject.getVideoTracks()[0].enabled
      setCameraOn(!cameraOn)
      console.log(peer.current)
    }
    const handleSoundOnOff=()=>{
      videoEmitter.current.srcObject.getAudioTracks()[0].enabled = !videoEmitter.current.srcObject.getAudioTracks()[0].enabled
      setSoundOn(!soundOn)
    }
    const handleDestroyCall=()=>{
      peer.current.destroy()
      console.log("destroy")
    }
    return (
        <Modal show={showVideoCall} size="lg"
        centered
        >
           <div className="videosContainer">
           <video ref={videoEmitter} className="videoEmitter"></video> 
           { answerCall?
           <video ref={videoReceiver} className="videoReceiver"></video>
           :false}
           </div>
           <button onClick={handleAnswerCall}>answer the call</button>
           <div className="videoActions"> 
          {!cameraOn?<FiVideo size={48} onClick={handleCameraOnOff}/>:
          <FiVideoOff size={48} onClick={handleCameraOnOff}/>}
          {!soundOn?<AiOutlineAudio size={48} onClick={handleSoundOnOff}/>
          :<AiOutlineAudioMuted size={48} onClick={handleSoundOnOff}/>}
          <MdCallEnd size={48} onClick={handleDestroyCall}/>
           </div>
        </Modal>
    )
}

export default VideoCallContainer
