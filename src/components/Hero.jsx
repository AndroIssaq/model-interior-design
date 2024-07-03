import React from 'react'
import video from '../assets/gets.mp4'
const Hero = () => {
  return (
    <div className=' w-full hero '>
        <video autoPlay muted loop className='w-full h-full rounded-bl-[150px] '>
            <source src={video}  />
        </video>
    </div>
  )
}

export default Hero