  
import React, { useState } from "react"
import { Card, Button, Alert, Modal } from "react-bootstrap"
import { useAuth } from "../Contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

 function Dashboard() {
  const [error, setError] = useState("")
  const [show, setShow] = useState(true)

  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <Modal show={show} centered>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser!=null&&currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary" onClick={() => setShow(false)}>
        Exit
      </Button>
        </Card.Footer>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </Modal>
  )
}
export default Dashboard