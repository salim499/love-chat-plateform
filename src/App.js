import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Services from './pages/Service/Services';
import Testimonial from './pages/Testimonial/Testimonial';
import ChatRoom from './pages/ChatRoom/ChatRoom';
import Navbar from './Components/Navbar/Navbar';
import VideoChatContainer from './Components/VideoChatContainer';
import Receiver from './Components/receiver'

const App = () => {
  return (
   <Router>
    <Navbar/>
    <main>
      <Switch>
        <Route path="/" exact>
          <VideoChatContainer/>
        </Route>
        <Route path="/about" exact>
          <Receiver/>
        </Route>
        <Route path="/service" exact>
          <Services/>
        </Route>
        <Route path="/testimonial" exact>
          <Testimonial/>
        </Route>
        <Route path="/contact" exact>
          <Contact/>
        </Route>
        <Route path="/chat" exact>
          <ChatRoom/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
   </Router>
  );
}

export default App;
