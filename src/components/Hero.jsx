import React from 'react'
import video from '../assets/Furniture Gallery - 3D Animation.mp4'
const Hero = () => {
  return (
    <div className=' w-full hero lg:mt-[110px] mt-[110px] '>
        <video autoPlay muted loop className='w-full h-full rounded-bl-[150px] '>
            <source src={video}  />
        </video>
    </div>
  )
}

export default Hero