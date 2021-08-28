import React, {useEffect, useState } from 'react';
import { Container } from "react-bootstrap";
import { 
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import './App.css'


import ChatRoom from './pages/ChatRoom'
import Home from './pages/Home'
import Navbar from './Components/Navbar';
import VideoChatContainer from './Components/videoCallContainer';
import VideoCall from './pages/VideoCall'

import Signup from './Components/SignUp';
import Login from './Components/Login';
import Profil from './Components/Profil'
import ForgotPassword from './Components/ForgotPassword';
import UpdateProfil from './Components/UpdateProfile';

import {AuthProvider} from './Contexts/AuthContext'
import {PeerProvider} from './Contexts/PeerContext'

const App = () => {
  

  return (
  <PeerProvider>
  <AuthProvider>
  <div className="App">
   <Router>
    <Navbar/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/forgot-password" exact>
        <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
      <ForgotPassword/>
      </div>
    </Container>
        </Route>
        <Route path="/signup" exact>
        <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
      <Signup/>
      </div>
    </Container>
        </Route>
        <Route path="/login" exact>
        <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
      <Login/>
      </div>
    </Container>
        </Route>
        <Route path="/my-account" exact>
        <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
      <Profil/>
      </div>
    </Container>
        </Route>
        <Route path="/update-profile" exact>
        <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
      <UpdateProfil/>
      </div>
    </Container>
        </Route>
        <Route path="/chat" exact>
          <ChatRoom/>
          <VideoChatContainer/>
        </Route>
        <Route path="/call" exact>
          <VideoCall/>
          <VideoChatContainer/>
        </Route>
        <Redirect to="/" />
      </Switch>
   </Router>
  </div>
  </AuthProvider>
  </PeerProvider>
  );
}

export default App;
