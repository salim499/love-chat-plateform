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
    const [callText, setCallText] = useState('')
    const [receivedCallInfo, setReceivedCallInfo] = useState()

    useEffect(async()=>{
        videoEmitter.current.srcObject = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        videoEmitter.current.play()
    },[])

    useEffect(async()=>{
        const res=firebase.firestore().collection('calls').doc(currentUser.email)
        .onSnapshot(async(snapshot)=>{
         if(snapshot.data()){
            if(snapshot.data().type==="offer"){
                setReceivedCallInfo(snapshot.data())
            }
            else if(snapshot.data().type==="accept"){
                setShowVideoReceiver(true)
                peer.current.signal(JSON.parse(snapshot.data().sd))
          
                peer.current.on('stream',(data)=>{
                    videoReceiver.current.srcObject=data
                    videoReceiver.current.play()
                  }) 
            }
            else if(snapshot.data().type==="accept") {
                setCallText(`The call was not accepted from ${snapshot.data().from}`)
            }
         }
         else{
            setReceivedCallInfo(null)
        }
        })
        return res
    },[])


    const handleMakeCall = async(event) => {
        
        if(showCallIcon==="show") {          
            if(calledUser.current.value==="")return
            setShowCallIcon("")
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
                try {
                const res=await firebase.firestore().collection('calls').doc(calledUser.current.value)
                .set({
                    type:"offer",
                    from:currentUser.email,
                    sd:JSON.stringify(data)
                })
                setCallText(`Waiting for answer from ${calledUser.current.value.split('@')[0]} ...`)
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
            await firebase.firestore().collection('calls').doc(calledUserFix.current).delete()
            peer.current.destroy()
            setCallText('The call is destroyed')
            setShowCallIcon("show")
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
            config:{
              iceServers: [
                {
                  urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
                },
              ],
              iceCandidatePoolSize: 10,
            }
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
        setReceivedCallInfo(null)
        setCallText("Joining call ...")
        peer.current.on('stream',(data)=>{
            videoReceiver.current.srcObject=data
            videoReceiver.current.play()
        }) 
        }
        catch(e){
           console.log(e) 
        }
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
            setCallText("Call refused ...")
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
                <option value="">--Please choose an option--</option>
                {
                usersChat&&usersChat.map((user, index)=>(
                    <option value={user.email}>{user.email.split('@')[0]}</option>                    
                ))
                }
                </select>
                {(showCallIcon==='show' || showCallIcon==='noshow') &&
                <div className={showCallIcon==='show'?"video-item-icon":"video-item-icon2"} onClick={handleMakeCall}>
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
            receivedCallInfo!=null&&
                <div className="video-item-no-video">
                    <div>
                        Join the call with <span style={{fontWeight: 'bold'}}>{receivedCallInfo.from.split('@')[0]}</span>
                    </div>
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
                <span>{callText}</span>
                </div>
            </div>
        </div>
    )
}

export default VideoCall
