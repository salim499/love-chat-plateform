  /*import {useEffect, useRef, useState} from 'react'
  import Config from './Config'
  import firebase from 'firebase'
  import '../Css/Video.css'
  import Webcam from "react-webcam";
  const servers = {
    iceServers: [
      {
        urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
      },
    ],
    iceCandidatePoolSize: 10,
  };

  // Global State
  const pc = new RTCPeerConnection(servers);
  let localStream = null;
  let remoteStream = null;


  function VideoChatContainer() {

    const [show, setShow]=useState(",sldc,sl")

    const webcamButton=useRef()
    const webcamVideo=useRef()
    const callButton=useRef()
    const callInput=useRef()
    const answerButton=useRef()
    const remoteVideo=useRef()
    const hangupButton=useRef()


    useEffect(()=>{
      if(!firebase.apps.length){
        firebase.initializeApp(Config)
      }
    },[])

    const webcamButtonClick = async () => {
      localStream =  await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      remoteStream = new MediaStream();
    
      // Push tracks from local stream to peer connection

    
      // Pull tracks from remote stream, add to video stream
      pc.ontrack = (event) => {
        event.streams[0].getTracks().forEach((track) => {
          remoteStream.addTrack(track);
        });
      };
    
      webcamVideo.current.srcObject = localStream;
      remoteVideo.current.srcObject = remoteStream;
      webcamVideo.current.play()
      remoteVideo.current.play()

      console.log(webcamVideo.current.srcObject)
    
      callButton.current.disabled = false;
      answerButton.current.disabled = false;
      webcamButton.current.disabled = true;

      setShow(true)
      setShow(",sldc,sl")
    }

    const callButtonClick = async () => {
    // Reference Firestore collections for signaling
    const callDoc = firebase.firestore().collection('calls').doc();
    const offerCandidates = callDoc.collection('offerCandidates');
    const answerCandidates = callDoc.collection('answerCandidates');
    
    callInput.current.value = callDoc.id;

    // Get candidates for caller, save to db
    pc.onicecandidate = (event) => {
      event.candidate && offerCandidates.add(event.candidate.toJSON());
    };

    // Create offer
    const offerDescription = await pc.createOffer();
    await pc.setLocalDescription(offerDescription);

    const offer = {
      sdp: offerDescription.sdp,
      type: offerDescription.type,
    };

    await callDoc.set({ offer });

    // Listen for remote answer
    callDoc.onSnapshot((snapshot) => {
      const data = snapshot.data();
      if (!pc.currentRemoteDescription && data?.answer) {
        const answerDescription = new RTCSessionDescription(data.answer);
        pc.setRemoteDescription(answerDescription);
      }
    });

    // When answered, add candidate to peer connection
    answerCandidates.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          const candidate = new RTCIceCandidate(change.doc.data());
          pc.addIceCandidate(candidate);
        }
      });
    });

    hangupButton.current.disabled = false;

    }
    // 3. Answer the call with the unique ID
    const answerButtonClick = async () => {
    const callId = callInput.current.value;
    const callDoc = firebase.firestore().collection('calls').doc(callId);
    const answerCandidates = callDoc.collection('answerCandidates');
    const offerCandidates = callDoc.collection('offerCandidates');

    pc.onicecandidate = (event) => {
      event.candidate && answerCandidates.add(event.candidate.toJSON());
    };

    const callData = (await callDoc.get()).data();

      const offerDescription = callData.offer;
      await pc.setRemoteDescription(new RTCSessionDescription(offerDescription));

    const answerDescription = await pc.createAnswer();

    await pc.setLocalDescription(answerDescription);

    const answer = {
      type: answerDescription.type,
      sdp: answerDescription.sdp,
    };

    await callDoc.update({ answer });

    remoteVideo.current.play()

    offerCandidates.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        console.log(change);
        if (change.type === 'added') {
          let data = change.doc.data();
          pc.addIceCandidate(new RTCIceCandidate(data));
        }
      });
    });
  };

    return (
      <div className="bodyVideo">
      <h2>1. Start your Webcam</h2>
      <div class="videos">
        <span>
          <h3>Local Stream</h3>
          <video id="webcamVideo"  ref={webcamVideo}></video>
        </span>
        <span>
          <h3>Remote Stream</h3>
          <video id="remoteVideo" autoplay playsinline ref={remoteVideo}></video>
      
        </span>
      </div>

      <button id="webcamButton" ref={webcamButton} onClick={webcamButtonClick}>Start webcam</button>
      <h2>2. Create a new Call</h2>
      <button id="callButton" ref={callButton} onClick={callButtonClick}>Create Call (offer)</button>

      <h2>3. Join a Call</h2>
      <p>Answer the call from a different browser window or device</p>
      
      <input id="callInput" ref={callInput}/>
      <button id="answerButton"  ref={answerButton} onClick={answerButtonClick}>Answer</button>

      <h2>4. Hangup</h2>

      <button id="hangupButton" ref={hangupButton}>Hangup</button>


    </div>
    )
  }

  export default VideoChatContainer*/
  
  import {useRef, useEffect} from 'react'
  import Config from './Config'
  import firebase from 'firebase'
  import * as Peer from 'simple-peer'



  let localStream = null
  let remoteStream = null
  const servers = {
    iceServers: [
      {
        urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
      },
    ],
    iceCandidatePoolSize: 10,
  };
  const pc = new RTCPeerConnection(servers);

  function VideoChatContainer() {

    const videoReceiver= useRef() 
    const videoEmitter=useRef()
    const callInput=useRef()
    const receiveInput=useRef()
    const peer=useRef()

   /* const bindEvents=(peer)=>{
      peer.on('signal',(data)=>{
        callInput.current.value=JSON.stringify(data)
      })
      peer.on('stream',(data)=>{
        console.log(data)
      })
    }*/

    const handleVideoEmitter=async()=>{
    
      // Pull tracks from remote stream, add to video stream
      pc.ontrack = (event) => {
        event.streams[0].getTracks().forEach((track) => {
          console.log(track)
          remoteStream.addTrack(track);
        });
      };

      // play the local video
    /*  remoteStream = new MediaStream()
      localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
      videoEmitter.current.srcObject = localStream
      videoEmitter.current.play()
      peer.current=new Peer({
        initiator:true,
        stream:localStream,
        trickle:false
      })
      console.log(peer.current)
      remoteStream=peer.current.streams[0]
      videoReceiver.current.srcObject = localStream
      videoReceiver.current.play()*/
      localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      remoteStream = new MediaStream();
    
      // Push tracks from local stream to peer connection
      localStream.getTracks().forEach((track) => {
        pc.addTrack(track, localStream);
      });
      videoEmitter.current.srcObject = localStream
      videoEmitter.current.play()
    
      console.log(pc)
    }
    const handleCallEmitter =async()=>{}

    const handleCallReceiver = () => {}

    return (
      <div>
        <video ref={videoEmitter}></video>
        <br/>
        <button onClick={handleVideoEmitter}>lancer ma vidéo</button>
        <br/>

        <textarea type="text" ref={callInput}></textarea>
        <br/>
        <button onClick={handleCallReceiver}>enregistrer</button>
        <textarea type="text" ref={receiveInput}></textarea>
        <video ref={videoReceiver} ></video>
      </div>
    )
  }
  
  export default VideoChatContainer
  
/*
import {useRef, useEffect, useState} from 'react'

import * as Peer from 'simple-peer'

function VideoChatContainer() {

  const videoEmitter=useRef()
  const videoReceiver=useRef()
  const peer=useRef()
  const localStream=useRef()
  const remoteStream=useRef()
  const callInput=useRef()
  const receiveInput=useRef()
  const dataOffer=useRef()

  useEffect(async()=>{
    localStream.current = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    videoEmitter.current.srcObject = localStream.current
    videoEmitter.current.play()
  },[])
 

  const bindEvents=(peer)=>{
    peer.on('signal',(data)=>{
      console.log('signal')
      dataOffer.current=data
      callInput.current.value=JSON.stringify(data)
    })
    peer.on('stream',(data)=>{
      console.log('stream');
      videoReceiver.current.srcObject=data
      videoReceiver.current.play()
    })
  }

  const createPeer=()=>{
    peer.current=new Peer({
      initiator:true,
      stream:localStream.current,
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
    bindEvents(peer.current)
  }
  const receivePeer = (e) => {
    e.preventDefault()
    console.log(peer.current)
    if(peer.current==null){
      console.log("create listener peer")
      peer.current=new Peer({
        initiator:false,
        trickle:false
      }) 
      bindEvents(peer.current)
    }
    peer.current.signal(JSON.parse(receiveInput.current.value))
  }

  return (
    <div>
      <video ref={videoEmitter}></video>
      <video ref={videoReceiver}></video>
      <textarea type="text" ref={callInput}></textarea>
      <button onClick={createPeer}>create Peer</button>
      <form onSubmit={receivePeer}>
        <textarea type="text" ref={receiveInput}></textarea>
        <button type="submit">receive Peer</button>
      </form>
    </div>
  )
}

export default VideoChatContainer

*/
