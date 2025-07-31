import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import NavBar from './components/NavBar'
import StateBasics from './components/StateBasics'
import Name from './components/name'
import Api from './components/Api'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <NavBar/>
      
      <Routes>
        <Route path='/lgn' element={<Login/>}/>
        <Route path='/' element={<Signup/>}/>
        <Route path='/goto' element={<StateBasics/>}/>
        <Route path='/anu' element={<Name/>}/>
        <Route path='/api' element={<Api/>}/>

      </Routes>
      


      </>
      
  )
}

export default App
