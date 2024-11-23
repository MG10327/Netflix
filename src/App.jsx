import React, { useEffect } from 'react'
import {Routes, Route, useNavigate} from "react-router-dom"
import Home from './pages/Home/Home'
import Login from "./pages/Login/Login"
import Player from "./pages/Player/Player"
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'

const App = () => {
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if(user) {
        console.log("Loggged In")
        navigate('/') // This sends users to the home page when they're logged in.
      } else {
        console.log("Logged Out")
        navigate('/login') // This sends users to the login page when they logout
      }
    })
  }, []) // This makes sure the function only gets called on app mount.


  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/login' element={<Login />}/>

        <Route path='/player/:id' element={<Player />}/>
      </Routes>
    </div>
  )
}

export default App