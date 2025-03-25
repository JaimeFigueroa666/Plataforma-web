import Login from './components/Login'
import Bienvenido from './components/Bienvenido'
import { useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState([])
  return (
    <>
      {
        user.length === 0
          ? <Login setUser={setUser} />
          : <Bienvenido user={user} setUser={setUser} />
      }


    </>
  )
}

export default App