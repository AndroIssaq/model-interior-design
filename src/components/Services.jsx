import React from 'react'
import video1 from '../assets/التصميم الخارجي.mp4'
import video2 from '../assets/التصميم الداخلي.mp4'
import video3 from '../assets/التشطيبات.mp4'
const Services = () => {
  return (
    <section>
        <div className="container">
            <div className='title m-[20px] w-full flex items-center justify-center text-center'>
                <h1 className='text-[30px]'>يمكنك الاعتماد علي خدماتنا</h1>
            </div>
            <div className='videos grid gap-[20px] lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1'>
                <div className='flex items-center flex-col justify-center gap-[30px]'>
                    <video autoPlay muted loop className='w-full h-full rounded-[25px]'>
                        <source src={video1}  />
                    </video>
                    <h1 className='text-[20px]'>التصميم الخارجي</h1>
                </div>  
               
                <div className='flex items-center flex-col justify-center gap-[30px]'>
                    <video autoPlay muted loop className='w-full h-full rounded-[25px] '>
                        <source src={video2}  />
                    </video>
                    <h1 className='text-[20px]'> التصميم الداخلي </h1>
                </div>  
                <div className='flex items-center flex-col justify-center gap-[30px]'>
                    <video autoPlay muted loop className='w-full h-full rounded-[25px]'>
                        <source src={video3}  />
                    </video>
                    <h1 className='text-[20px]'> التشطيبات</h1>
                </div>  
            </div>
        </div>
    </section>
  )
}

export default Services