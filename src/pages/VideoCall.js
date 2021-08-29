import React, {useEffect, useRef, useState} from 'react'

import * as Peer from 'simple-peer'

import firebase from '../Components/firebase'

import {MdCall, MdCallEnd} from 'react-icons/md'

import '../Css/videoCall.css'

import { useAuth } from "../Contexts/AuthContext"

function VideoCall() {

    const {usersChat, currentUser } = useAuth() 
    console.log(usersChat)

    const peer = useRef()
    const videoEmitter = useRef()
    const videoReceiver = useRef()
    const calledUser = useRef()
    const calledUserFix = useRef()

    const [showVideoEmitter, setShowVideoEmitter] = useState(true)
    const [showVideoReceiver, setShowVideoReceiver] = useState(false)
    const [showCallIcon, setShowCallIcon] = useState('show')
    const [callText, setCallText] = useState({text:'Receiver video', user:''})
    const [receivedCallInfo, setReceivedCallInfo] = useState(null)

    useEffect(async()=>{
        videoEmitter.current.srcObject = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        videoEmitter.current.play()
    },[])
    
    useEffect(async()=>{
        const res=firebase.firestore().collection('calls').doc(currentUser.email)
        .onSnapshot(async(snapshot)=>{
         if(snapshot.data()){
            if(snapshot.data().type==="offer"){
                setReceivedCallInfo(snapshot.data())
                setShowVideoReceiver(false)
                setCallText({text:'call from ', user:snapshot.data().from})
            }
            else if(snapshot.data().type==="accept"){
                setShowVideoReceiver(true)
                setCallText({text:'', user:''})
                peer.current.signal(JSON.parse(snapshot.data().sd))
          
                peer.current.on('stream',(data)=>{
                    videoReceiver.current.srcObject=data
                    videoReceiver.current.play()
                  }) 
            }
            else if(snapshot.data().type==="refuse") {
                try {
                    await firebase.firestore().collection('calls').doc(snapshot.data().from).delete()
                    await firebase.firestore().collection('calls').doc(currentUser.email).delete()
                    setCallText({text:'The call was not accepted by', user:snapshot.data().from.split('@')[0]})
                    setShowCallIcon("show")
                }
                catch (e) {
                    console.log(e)
                }
            }
            else if(snapshot.data().type==="destroy") {
                setCallText({text:'The call was destroyed by', user:snapshot.data().from.split('@')[0]})
                setShowVideoReceiver(false)
                setShowCallIcon("show")
                await firebase.firestore().collection('calls').doc(currentUser.email).delete()
            }
         }
         else{
            setReceivedCallInfo(null)
        }
        })
        return res
    },[])


    const handleMakeOrEndCall = async(event) => {
        
        if(showCallIcon==="show") {          
            if(calledUser.current.value==="")return
            setShowCallIcon("")
            setShowVideoReceiver(false)
            setCallText({text:'Try to establish a connection', user:calledUser.current.value.split('@')[0],})
            peer.current=new Peer({
                initiator:true,
                stream:videoEmitter.current.srcObject,
                trickle:false, 
                config: { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }, { urls: 'stun:global.stun.twilio.com:3478?transport=udp' }] },
              })
            peer.current.on('signal',async(data)=>{
                try {
                const res=await firebase.firestore().collection('calls').doc(calledUser.current.value)
                .set({
                    type:"offer",
                    from:currentUser.email,
                    sd:JSON.stringify(data)
                })
                setCallText({text:'Waiting for answer from', user:calledUser.current.value.split('@')[0],color:''})
                setShowCallIcon("noshow")
                calledUserFix.current=calledUser.current.value
               }
               catch (e) {
                   console.log(e)
               }
            })
            return
        }
        if (showCallIcon==="noshow"){
            try{
            if(receivedCallInfo!=null){
                await firebase.firestore().collection('calls').doc(receivedCallInfo.from).delete()
                await firebase.firestore().collection('calls').doc(currentUser.email).delete()
                await firebase.firestore().collection('calls').doc(receivedCallInfo.from)
                .set({
                        type:"destroy",
                        from:currentUser.email,
                })
            }else{
                await firebase.firestore().collection('calls').doc(calledUserFix.current).delete()
                await firebase.firestore().collection('calls').doc(currentUser.email).delete()
                await firebase.firestore().collection('calls').doc(calledUser.current.value)
                .set({
                        type:"destroy",
                        from:currentUser.email,
                })   
            }
            peer.current.destroy()
            setCallText({text:'The call is destroyed ...', user:''})
            setShowCallIcon("show")
            setShowVideoReceiver(false)
            }
            catch(e) {
                console.log(e)
            }
        }
    }

    const handleAcceptCall = () => {
        peer.current=new Peer({
            initiator:false,
            stream:videoEmitter.current.srcObject,
            trickle:false, 
            config: { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }, { urls: 'stun:global.stun.twilio.com:3478?transport=udp' }] },
        })
        peer.current.signal(JSON.parse(receivedCallInfo.sd))
        peer.current.on('signal',(data)=>{
        try{
        firebase.firestore().collection('calls').doc(receivedCallInfo.from)
        .set({
          type:"accept",
          from:currentUser.email,
          sd:JSON.stringify(data)
        })
        setCallText({text:'', user:''})
        setShowCallIcon("noshow")
        }
        catch(e){
           console.log(e) 
        }
        })
        peer.current.on('stream',(data)=>{
            setCallText({text:'', user:''})
            setShowVideoReceiver(true)
            videoReceiver.current.srcObject=data
            videoReceiver.current.play()
        }) 
    }
    const handleRefuseCall = () => {
        try{
            firebase.firestore().collection('calls').doc(receivedCallInfo.from)
            .set({
              type:"refuse",
              from:currentUser.email,
            })
            setReceivedCallInfo(null)
            setCallText({text:'Call refused ...', user:''})
            setShowCallIcon("show")
            }
            catch(e){
               console.log(e) 
            }
    }

    return (
        <div className="video">
            <div className="video-item">
              <video ref={videoEmitter}></video>
              <div className="video-item-actions">
                <select name="pets" id="pet-select" ref={calledUser}>
                <option value="">--Please choose who to call--</option>
                {
                usersChat&&usersChat.map((user, index)=>(
                    <option value={user.email}>{user.email.split('@')[0]}</option>                    
                ))
                }
                </select>
                {(showCallIcon==='show' || showCallIcon==='noshow') &&
                <div className={showCallIcon==='show'?"video-item-icon":"video-item-icon2"} onClick={handleMakeOrEndCall}>
                {showCallIcon==='show'&&<MdCall size={32}/>}
                {showCallIcon==='noshow'&&<MdCallEnd size={32}/>}        
                </div>
                }
              </div>  
            </div>
            <div className="video-item">
            {showVideoReceiver?
                <video ref={videoReceiver}></video>
            :
            receivedCallInfo!=null && !showVideoReceiver &&
                <div className="video-item-no-video">
                    <span>call from <span
                    style={{fontWeight:'bold'}}>{receivedCallInfo.from .split('@')[0]}</span></span>
                    <div className="video-item-no-video-answerCall">
                    <div style={{width:'50%'}}>
                    <div className="video-item-icon" style={{width:'40px'}}
                    onClick={handleAcceptCall}>
                        <MdCall size={32}/>
                    </div>
                    </div>
                    <div style={{width:'50%'}}>
                    <div className="video-item-icon2" style={{width:'40px'}}
                    onClick={handleRefuseCall}>
                        <MdCallEnd size={32}/>
                    </div>
                    </div>
                    </div>
                </div>
            }
                <div className="video-item-text">
                <p>{callText.text} <span className="video-item-text-username">{callText.user}</span></p>
                </div>
            </div>
        </div>
    )
}

export default VideoCall
