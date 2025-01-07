import { Routes,Route, useLocation  } from 'react-router'
import './App.css'
import Home from './pages/Home'
import NavbarMenu from './components/NavBarMenu'
import { useEffect , useState, useRef  } from 'react'
import Footer from './components/Footer'
import Projects from './pages/Projects'
import AboutUsPage from './pages/AboutUsPage'
import ContactUsPage from './pages/ContactUsPage'
import loadingVideo from './assets/model3s.mp4'
import Vlogs from './pages/Vlogs'
function App() {
  const {pathname}= useLocation()
  const path=useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[path.pathname])
  let [loading, setLoading] = useState(true);
  const spinnerLoadingHandler=()=>{
    setLoading(true)
    setTimeout(()=>setLoading(false),3000)
}
window.onload=()=>{
  spinnerLoadingHandler()
}

useEffect(()=>{
  spinnerLoadingHandler()
},[pathname])

  return (
    
    <>
     {
      loading ? 
      <div className='w-full fixed h-[100vh] z-[300] top-0 left-0 bg-black flex items-center justify-center '>
     <video autoPlay={true} loop={true} muted={true}  className='lg:w-[50%] lg:h-[50%] md:w-[50%] md:h-[50%] sm:w-[100%] sm:h-[100%] w-[100%] h-[100%] rounded-md overflow-hidden'>
        <source type="video/mp4" src={loadingVideo}
        />
      </video>
      </div>
        :
        ''  
    }
    <NavbarMenu/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/من نحن" element={<AboutUsPage/>}/>
    <Route path="/مشاريعنا" element={<Projects/>}/>
    <Route path="/المركز الاعلامي" element={<Vlogs/>}/>
    <Route path="/تواصل معنا" element={<ContactUsPage/>}/>  
  </Routes>
    <Footer/>
    </>
  )
}

export default App
