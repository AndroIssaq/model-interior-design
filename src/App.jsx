import { Routes,Route, useLocation  } from 'react-router'
import './App.css'
import Home from './pages/Home'
import NavbarMenu from './components/NavBarMenu'
import { useEffect , useState } from 'react'
import Footer from './components/Footer'
import Projects from './pages/Projects'
import AboutUsPage from './pages/AboutUsPage'
import BlogPage from './pages/BlogPage'
import ContactUsPage from './pages/ContactUsPage'

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
    <Route path="/من نحن" element={<AboutUsPage/>}/>
    <Route path="/مشاريعنا" element={<Projects/>}/>
    <Route path="/المدونة" element={<BlogPage/>}/>
    <Route path="/تواصل معنا" element={<ContactUsPage/>}/>
    
  </Routes>
    <Footer/>
    </>
  )
}

export default App
