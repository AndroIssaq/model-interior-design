import { lazy , Suspense  , useEffect , useState} from 'react'
import { Routes,Route, useLocation  } from 'react-router'
import './App.css'
const Home = lazy(()=>import ("./pages/Home"))
const NavbarMenu = lazy(()=>import ("./components/NavBarMenu"))
const Footer = lazy(()=>import ("./components/Footer"))
const Projects = lazy(()=>import ("./pages/Projects"))
const AboutUsPage = lazy(()=>import ("./pages/AboutUsPage"))
const ContactUsPage = lazy(()=>import ("./pages/ContactUsPage"))
const Vlogs = lazy(()=>import ("./pages/Vlogs"))
import loadingVideo from './assets/model3s.mp4'
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
    <Suspense fallback={<div className='w-full fixed h-[100vh] z-[300] top-0 left-0 bg-black flex items-center justify-center '>
     <video autoPlay={true} loop={true} muted={true}  className='lg:w-[50%] lg:h-[50%] md:w-[50%] md:h-[50%] sm:w-[100%] sm:h-[100%] w-[100%] h-[100%] rounded-md overflow-hidden'>
        <source type="video/mp4" src={loadingVideo}
        />
      </video>
      </div>}>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/من نحن" element={<AboutUsPage/>}/>
    <Route path="/مشاريعنا" element={<Projects/>}/>
    <Route path="/المركز الاعلامي" element={<Vlogs/>}/>
    <Route path="/تواصل معنا" element={<ContactUsPage/>}/>  
  </Routes>
  </Suspense>
    <Footer/>
    </>
  )
}

export default App
