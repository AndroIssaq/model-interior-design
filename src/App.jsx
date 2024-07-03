import { Routes,Route, useLocation  } from 'react-router'
import './App.css'
import Home from './pages/Home'
import NavbarMenu from './components/NavBarMenu'
import { useEffect , useState } from 'react'

function App() {
  const path=useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[path.pathname])
  return (
    <>
    <NavbarMenu/>
  <Routes>
  <Route path="/" element={<Home/>}/>
  </Routes>

    </>
  )
}

export default App
