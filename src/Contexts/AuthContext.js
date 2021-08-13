import React, { useContext, useState, useEffect } from "react"
import { auth } from "../Components/firebase"
import axios from 'axios'
const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const [usersChat, setChatUsers] = useState()
  
    function signup(email, password) {
      return auth.createUserWithEmailAndPassword(email, password)
    }
  
    function login(email, password) {
      return auth.signInWithEmailAndPassword(email, password)
    }
  
    function logout() {
      return auth.signOut()
    }
  
    function resetPassword(email) {
      return auth.sendPasswordResetEmail(email)
    }
  
    function updateEmail(email) {
      return currentUser.updateEmail(email)
    }
  
    function updatePassword(password) {
      return currentUser.updatePassword(password)
    }
    function signupChat(email, password) {
      console.log(currentUser)
    }
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user)
        setLoading(false)
      })

      return unsubscribe
    }, [])

    useEffect(async() => {
      if(currentUser){
        let res=await axios.get('https://api.chatengine.io/users/',{
        headers:{"private-key":process.env.REACT_APP_CHAT_ENGINE_PRIVATE_KEY}
        })
        setChatUsers(res.data.filter(e=>e.email!=currentUser.email))
       // console.log(res)
      }
    },[currentUser])
  
    const value = {
      currentUser,
      usersChat,
      login,
      signup,
      logout,
      resetPassword,
      updateEmail,
      updatePassword
    }
  
    return (
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    )
  }