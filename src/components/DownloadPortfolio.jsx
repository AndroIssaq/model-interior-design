import { useState } from 'react'
import {IoCloseSharp} from 'react-icons/io5'
import { HoverBorderGradientDemo } from './Button'
import img from '../assets/download-portfolio.png'
import portfolio from '../assets/model - package.pdf'
const DownloadPortfolio = () => {
    const [active,setActive]=useState(true)
  return (
    <div className={`transition bg-[#000] rounded-md duration-300  ${active?'download-active':'download-not-active'} download-layout fixed z-[4000] lg:w-[600px] lg:h-[400px] md:w-[500px] md:h-[400px] w-[350px] h-[350px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}>
    <div className="pr-[20px] relative gap-[20px] h-full flex items-center justify-center">
      <div className="img flex-1 h-full rounded-md overflow-hidden">
          <img src={img} loading='lazy' alt="" className='w-full h-full object-cover rounded-md' />
      </div>
        <div className="content flex-1 h-full flex flex-col items-center justify-center gap-[20px]">
                <h5 className='text-[25px] w-[100%] text-left text-[#fff]'>احنا بنوفرلك تشطيب بيتك بأفضل باقات التشطيبات </h5>
                <a onClick={()=>setActive(!active)} color='white' href={portfolio} download className=' download bg-white font-bold cursor-pointer tran w-[100%] border-none h-[50px] p-[10px] text-center border  text-[#000]'><span className=' relative text-[20px]'>حمل الملف</span> </a>
        </div>
    </div>
    <button onClick={()=>setActive(!active)} className='  absolute w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center text-black top-[-20px] right-[-3%] text-[30px]   '><IoCloseSharp/></button>
</div>
  )
}

export default DownloadPortfolio