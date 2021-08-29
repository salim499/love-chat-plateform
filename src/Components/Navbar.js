import React , {useEffect} from 'react'
import './../Css/Navbar.css';
import { NavLink, useLocation } from 'react-router-dom';
import $ from 'jquery';
import { useAuth } from '../Contexts/AuthContext'
import {AiOutlineLogin, AiOutlineHome, AiOutlineLogout} from 'react-icons/ai'
import {VscSignIn, VscAccount} from 'react-icons/vsc'
import {BsChatDots} from 'react-icons/bs'
import { IconContext } from 'react-icons'
import {MdCall} from 'react-icons/md'
const Navbar = () => {

  const {currentUser } = useAuth()

  const location = useLocation() 
  console.log(location)

  function animation(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {
    
    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 500);
    });
    
  }, []);

  return (
  <IconContext.Provider value={{ size: '22px', style: { verticalAlign: 'middle', marginRight:'7.5px', marginBottom:'3px' } }}>
  <nav className="navbar navbar-expand-lg navbar-mainbg">
    
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
        SalKat Love Calculator
      </NavLink>
      <button 
        className="navbar-toggler"
        onClick={ function(){
          setTimeout(function(){ animation(); });
        }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>
 
      <div 
        className="collapse navbar-collapse" id="navbarSupportedContent">
        {
        currentUser!=null?
        <ul className="navbar-nav ml-auto">
            
        <div className="hori-selector">
          <div className="left"></div>
          <div className="right"></div>
        </div>
        
        <li className="nav-item active"
        style={{backgroundColor:location.pathname==='/'?'rgba(255,255,255,0.15)':null}}>
          <NavLink className="nav-link" to="/" exact>
          <AiOutlineHome/>Home
          </NavLink>
        </li>
        <li className="nav-item"
        style={{backgroundColor:location.pathname==='/my-account'?'rgba(255,255,255,0.15)':null}}>
          <NavLink className="nav-link" to="/my-account" exact>
            <VscAccount/>My Account
          </NavLink>
        </li>
        <li className="nav-item"
        style={{backgroundColor:location.pathname==='/chat'?'rgba(255,255,255,0.15)':null}}>
          <NavLink className="nav-link" to="/chat" exact>
          <BsChatDots/>Chatroom 
          </NavLink>
        </li>
        <li className="nav-item"
        style={{backgroundColor:location.pathname==='/call'?'rgba(255,255,255,0.15)':null}}>
          <NavLink className="nav-link" to="/call" exact>
          <MdCall/>PeerToPeerCall
          </NavLink>
        </li>
    </ul>
        :
        <ul className="navbar-nav ml-auto">
            
        <div className="hori-selector">
          <div className="left"></div>
          <div className="right"></div>
        </div>
        
        <li className="nav-item active"
        style={{backgroundColor:location.pathname==='/'?'rgba(255,255,255,0.15)':null}}>
          <NavLink className="nav-link" to="/" exact>
          <AiOutlineHome/>Home
          </NavLink>
        </li>

        <li className="nav-item"
        style={{backgroundColor:location.pathname==='/signup'?'rgba(255,255,255,0.15)':null}}>
          <NavLink className="nav-link" to="/signup" exact>
           <VscSignIn/>Signup
          </NavLink>
        </li>
        <li className="nav-item"
        style={{backgroundColor:location.pathname==='/login'?'rgba(255,255,255,0.15)':null}}>
          <NavLink className="nav-link" to="/login" exact>
          <AiOutlineLogin/>
          Login
          </NavLink>
        </li>
    </ul>
        }
      </div>
  </nav>
  </IconContext.Provider>
  )
}
export default Navbar;