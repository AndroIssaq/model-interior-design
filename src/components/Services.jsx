import React from 'react'
import video from '../assets/gets.mp4'
const Services = () => {
  return (
    <section>
        <div className="container">
            <div className='title m-[20px] w-full flex items-center justify-center text-center'>
                <h1 className='text-[30px]'>يمكنك الاعتماد علي خدماتنا</h1>
            </div>
            <div className='videos grid gap-[20px] lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1'>
                <div className='flex items-center flex-col justify-center gap-[30px]'>
                    <video autoPlay muted loop className='w-full h-full '>
                        <source src={video}  />
                    </video>
                    <h1 className='text-[20px]'>التشطيبات</h1>
                </div>  
               
                <div className='flex items-center flex-col justify-center gap-[30px]'>
                    <video autoPlay muted loop className='w-full h-full '>
                        <source src={video}  />
                    </video>
                    <h1 className='text-[20px]'>التصميم الخارجي</h1>
                </div>  
                <div className='flex items-center flex-col justify-center gap-[30px]'>
                    <video autoPlay muted loop className='w-full h-full '>
                        <source src={video}  />
                    </video>
                    <h1 className='text-[20px]'>التصميم الخارجي</h1>
                </div>  
            </div>
        </div>
    </section>
  )
}

export default Services