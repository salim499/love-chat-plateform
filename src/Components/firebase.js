import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/firestore'
const app = firebase.initializeApp({
  apiKey: "AIzaSyAaBlsJsd_p9RK6rd8Z0BqIh9SeQ6sGjDA",
  authDomain: "chat-app-e3fef.firebaseapp.com",
  projectId: "chat-app-e3fef",
  storageBucket: "chat-app-e3fef.appspot.com",
  messagingSenderId: "293479775714",
  appId: "1:293479775714:web:14d262a04c59e4e86f8dbb",
  measurementId: "G-8N6DY58FPK"
})

export const auth = app.auth()
export default app