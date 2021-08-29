import React, {useState, useEffect} from 'react'
import ReactDom from 'react-dom'
import { useHistory } from 'react-router-dom'
import { useAuth } from "../Contexts/AuthContext"
import Loader from './loader'
const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(255,255,255,0.75)',
    padding: '50px',
    zIndex: 1000,
    height:'500px',
    width:'50%',
    minWidth: '440px',
    display: 'flex',
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems: 'center',
    borderRadius: '5px',
    boxShadow: '4px 5px 1px white' 
  }
  
  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000,
  }

  const MODAL_TITLE = {
    fontFamily: "Overpass",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "37px",
    display: "flex",
    alignItems: "center",
    textTransform: "capitalize",
    fontFeatureSettings: "tnum on, lnum on",   
    color: "#000000",
  }

  const ITEM_STYLES = {
    fontSize: '32px',
    textShadow: '-0.5px -0.5px #0c0, 0.5px 0.5px #060, -0.5px 0 2px #000',
    fontFamily:'Arial, Helvetica, sans-serif',
    color: '#090',
    padding:'16px',
    fontWeight:'lighter',
    textAlign:'center',
    display:'block',
    margin:'rgba16px',
  }
  const BUTTONS_STYLES = {
    display:'flex',
    justifyContent:'space-around'
  }
  const BUTTONS_ITEM_STYLES = {
    width:'95px',
    marginTop:'10px'
  }
 

function ModalNewItem(props) {

  const history = useHistory()

  const {currentUser } = useAuth()

  const [SVG, setSVG] = useState(null)
  const [showResult, setShowResult] = useState(false)

  useEffect(() =>{
    import(`../assets/svgs/${props.svgNumber}.svg`)
    .then(d=>{
      setSVG(d.default)
    }) 
  },[])
  useEffect(()=>{
    const timer = setTimeout(() => {
      setShowResult(true)
    }, 5000);
    return () => clearTimeout(timer);  
  },[])

  const handleLinkChat = () => {
    props.setMatchResult(null)
    if(currentUser!=null) {
      history.push("/chat")
      return
    }
    history.push("/login")
  }

  const handleExit = () => {
    props.setMatchResult(null)
  }

    return (
 ReactDom.createPortal(
    <> 
        <div style={OVERLAY_STYLES} />
        <div style={MODAL_STYLES}>
        <Loader type="Bars" timeout={4500}/>
        {
          !showResult&&  <span style={{boxShadow:'bold'}}>Calculating ...</span>
        }
        {
          showResult&&
          <>
        <Loader type="Hearts"/>
        {SVG!=null &&
        <img src={SVG}/>}
        <div style={ITEM_STYLES}>
          {props.messageResult}
        </div>
        <div style={BUTTONS_STYLES}>
    
          <button onClick={handleLinkChat} style={BUTTONS_ITEM_STYLES}>Chatroom</button>
          <button onClick={handleExit} style={BUTTONS_ITEM_STYLES}>Exit</button>
        </div>
          </>
        }
        </div>
    </>,
           document.getElementById('portal')
        )
    )
}

export default ModalNewItem
