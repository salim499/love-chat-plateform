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

    const {showVideoCall, currentCallState, callInformation, setCallInformation, setShowVideoCall } = usePeer() 
    const {usersChat, currentUser } = useAuth()   

    const videoEmitter = useRef()
    const videoReceiver = useRef()
    const peer =useRef()

    const [answerCall, setAnswerCall] = useState(false)
    const [cameraOn, setCameraOn] = useState(true) 
    const [soundOn, setSoundOn] = useState(true)
    const [showResponseButton,setShowResponseButton] = useState(false)
    const [endCallText, setEndCallText] = useState(false)

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
            setShowResponseButton(true)
        }
        }
    },[showVideoCall, currentCallState])

    useEffect(()=>{
        const call=firebase.firestore().collection('calls').doc(currentUser.email)
        .onSnapshot(async(snapshot)=>{
          setCallInformation(snapshot.data())
          if(snapshot.data()&&snapshot.data().type==="response"){
            peer.current.signal(JSON.parse(snapshot.data().sd))
            
            peer.current.on('stream',(data)=>{
                setAnswerCall(true)
                videoReceiver.current.srcObject=data
                videoReceiver.current.play()
              }) 
          } else if (snapshot.data()==null) {
            setShowVideoCall(false)
          }
        })
    },[])

    useEffect(()=>{
      const call=firebase.firestore().collection('destroy').doc(currentUser.email)
      .onSnapshot(async(snapshot)=>{
        if(snapshot.data()!=null){
          setAnswerCall(false)
          setEndCallText(true)
        }

      })
    },[])

    const handleAnswerCall = () => {
      setAnswerCall(true)
      setShowResponseButton(false)
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
    const handleDestroyCall= async()=>{

      const destroyCall=firebase.firestore().collection('destroy').doc(usersChat[0].email)
      .set({
          destroy:currentUser.email
      })

      peer.current.destroy()
      try {
        await firebase.firestore().collection('calls').doc(currentUser.email).delete()
        console.log("Current successfully deleted!");
        await firebase.firestore().collection('calls').doc(callInformation.from).delete()
        console.log("Other successfully deleted!");
      }
      catch(error){
        console.error("Error removing document: ", error);
      }
      setShowVideoCall(false)

    }
    return (
        <Modal show={showVideoCall} size="lg"
        centered
        >
           <div className="videosContainer">
           <video ref={videoEmitter} className="videoEmitter"></video> 
           { answerCall&&
           <video ref={videoReceiver} className="videoReceiver"></video>
           }
           { showResponseButton&&
           <div style={{width:'50%', display:'flex', alignItems: 'center', justifyContent: 'center'}}>
           <MdCall size={48} onClick={handleAnswerCall}></MdCall>Answer the call from {callInformation.from.split('@')[0]}
           </div>
           }
           {endCallText&&
          <div style={{width:'50%', display:'flex', alignItems: 'center', justifyContent: 'center'}}>
            The call is over 
          </div>
           }
           </div>
           
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
