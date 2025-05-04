import Login from './components/Login'
import Bienvenido from './components/Bienvenido'
import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reportes from './components/Reportes';

function App() {
  const [user, setUser] = useState([])
  return (
    <Router>
      <Routes>
        <Route path="/login" element={user.length === 0? <Login setUser={setUser} />: <Bienvenido user={user} setUser={setUser}/>}/>
        <Route path="*" element={user.length === 0? <Login setUser={setUser} />: <Bienvenido user={user} setUser={setUser}/>}/>  
        <Route path="/Reportes" element={ <Reportes/>} />
      </Routes>
    </Router>
  )
}

export default App