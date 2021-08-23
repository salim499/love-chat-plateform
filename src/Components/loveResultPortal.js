import React, {useState, useEffect} from 'react'
import ReactDom from 'react-dom'
import { useHistory } from 'react-router-dom'
import { useAuth } from "../Contexts/AuthContext"
const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000,
    height:'500px',
    width:'450px',
    display: 'flex',
    flexDirection:'column',
    justifyContent:'space-around',
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
    textShadow: '-1px -1px #0c0, 1px 1px #060, -3px 0 4px #000',
    fontFamily:'Arial, Helvetica, sans-serif',
    color: '#090',
    padding:'16px',
    fontWeight:'lighter',
    textAlign:'center',
    display:'block',
    margin:'rgba16px',
  }

 

function ModalNewItem(props) {

  const history = useHistory()

  const {currentUser } = useAuth()

  const [SVG, setSVG] = useState(null)

  useEffect(() =>{
    import(`../assets/svgs/${props.svgNumber}.svg`)
    .then(d=>{
      setSVG(d.default)
    }) 
  },[])

  const handleLinkChat = () => {
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
        {SVG!=null &&
        <img src={SVG}/>}
        <div style={ITEM_STYLES}>
          {props.messageResult}
        </div>
        <div>
          <button onClick={handleLinkChat}>Chatroom</button>
          <button onClick={handleExit}>Exit</button>
        </div>
        </div>
    </>,
           document.getElementById('portal')
        )
    )
}

export default ModalNewItem
