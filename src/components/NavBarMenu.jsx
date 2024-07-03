"use client"
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { useEffect , useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
export default function NavbarMenu() {
    const navbarLinks=[  'الصفحة الرئيسية' , 'من نحن' ,'اعمالنا', ' المدونة',' تواصل معنا']
    const [toggle, settoggle] = useState(false)
    const [color, setColor]=useState(false)
    const ColorHandler=()=>{
        if(window.scrollY>100){
            setColor(true)
        }else{
            setColor(false)    
        }
    }
        window.addEventListener('scroll',ColorHandler)
     
   
  const [navbarLayout,setNavbarLayout]=useState(false)
useEffect(()=>{
  window.addEventListener('scroll',()=>{
    const scroll= window.scrollY
    if(scroll>1){
      setNavbarLayout(!navbarLayout)
    }else{
      setNavbarLayout(false)
    }
  })
},[])

  return (
    <nav  className={`navbar fixed bg-black flex flex-row-reverse  transition-all duration-300 overflow-hidden  items-center justify-between top-0 z-[999999999999] ${navbarLayout?'  border-none fixed bg-black ': " "}   px-[20px]`}>
  <div className="navbar-start lg:hidden flex-1  items-center justify-center" >
  <div className="mobile-nav sm:hidden   cursor-pointer  ">
                    <img className=' w-[30px]' src={toggle ? close :menu} alt="menu" onClick={()=>settoggle((prev)=>!prev)} />
                    <div className={`${toggle ? 'flex' : 'hidden'}   w-full rounded-sm sidebar  p-5 flex gap-5 items-start flex-col absolute right-0 top-[58px]` } >
                        <ul className='mobile-nav-links items-start justify-start gap-[10px] text-[#fff]  flex flex-col z-10 w-full '>
                            {
                                navbarLinks.map((link , index)=>( 
                                   <Link key={index} to={`/${link}`} onClick={()=>settoggle((prev)=>!prev)} > <li key={index} className=' w-full text-left p-[10px]'>{link}</li></Link>
                                ))
                            }
                        </ul>
                    </div>
                </div>
  </div>
  <div className="nav-bar-center flex-1  items-center justify-center">
  <Link to={'/'} className="lg:w-[100px] md:w-[70px] sm:w-[70px] w-[70px]">  <div className="logo">
            <img src={logo} alt="" />
        </div></Link>
  </div>
  <div className="navbar-center hidden lg:flex items-center justify-center flex-[4] ">
    <ul className="menu menu-horizontal flex-row-reverse px-1 flex items-center justify-center gap-[20px]">
    <Link to={'/'}><li>الصفحة الرئيسية</li></Link>
      <Link to={'/portfolio'}><li>من نحن</li></Link>
      <Link to={'/what we do'}><li>اعمالنا</li></Link>
      <Link to={'/aboutUs'}><li>المدونة</li></Link>
      <Link to={'/contactUs'}><li>تواصل معنا </li></Link>
    </ul>
  </div>
  <div className="icons navbar-end text-[20px] flex-1 flex items-end justify-end gap-[20px]">
    <a to="" className=""><MdFacebook/></a>
    <a to="" className=""><AiFillInstagram/></a>
    <a to="" className=""><BiLogoLinkedin/></a>
  </div>
</nav>
  )
}