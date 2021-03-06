import {useRef, useState} from 'react'
import { Form, Button, Card, Alert, Modal } from "react-bootstrap"
import { useAuth} from "../Contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import ReactDom from "react-dom"
import axios from 'axios'

const getFile =async(url)=>{
  const response = await fetch(url)
  const data = await response.blob()
  return new File([data], "userPhoto.jpg", {type:"image/jpeg"})
}

function SignUp() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    const { signup, currentUser } = useAuth()

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(true)

    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
        }
    
        try {
          setError("")
          setLoading(true)
          const signupData=await signup(emailRef.current.value, passwordRef.current.value)
          const formdata=new FormData()

          formdata.append('email', signupData.user.email)
          formdata.append('username', signupData.user.email.split('@')[0])
          formdata.append('secret', signupData.user.uid)
          
          /*const avatar=getFile(signupData.photoURL)
          formdata.append('avatar', avatar, avatar.name)*/

          const res = axios.post('https://api.chatengine.io/users',formdata,
          {
            headers: {"private-key":process.env.REACT_APP_CHAT_ENGINE_PRIVATE_KEY}
          })
          console.log(res)
          setShow(false)
          history.push("/")
        } catch {
          setError("Failed to create an account")
        }
    
        setLoading(false)
      }

    return (
        <Modal show={show} centered>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password" ref={passwordConfirmRef} required />
              </Form.Group>
              <Button disabled={loading} className="w-100" type="submit">
                Sign Up
              </Button>
            </Form>
          </Card.Body>
          <Card.Footer>
          <Button variant="primary" onClick={() => setShow(false)}>
        Exit
      </Button>
          </Card.Footer>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </Modal>
    )
}

export default SignUp
