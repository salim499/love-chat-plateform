import React, {useState, useContext, useRef} from 'react'

const PeerContext = React.createContext()

export function usePeer() {
    return useContext(PeerContext)
}


export function PeerProvider({ children }) {
 
    const peer = useRef() 

    const [showVideoCall, setShowVideoCall] = useState(false)
    const [currentCallState, setCurrentCallState] = useState("")
    const [callInformation, setCallInformation] = useState(null)

    const obj = {
         peer,
         showVideoCall,
         setShowVideoCall,
         currentCallState,
         setCurrentCallState,
         callInformation,
         setCallInformation
        }

    return (
        
      <PeerContext.Provider value={obj}>
          { children }
      </PeerContext.Provider>
    )
}

