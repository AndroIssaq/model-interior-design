import React from 'react'
import img from '../assets/50.jpeg'
import { HoverBorderGradientDemo } from './Button'
import { Link } from 'react-router-dom'
const Coast = () => {
  return (
    <section>
    <div className="container">
        <div className="flex xl:flex-row-reverse lg:flex-row-reverse  md:flex-col sm:flex-col flex-col bg-[#121111] rounded-[20px] items-center justify-center w-full ">
            <div className="left flex-1 flex items-center justify-center ">
                <div className='img w-[100%] h-[600px] '>
                    <img src={img} alt="" className='w-full h-full object-cover rounded-[20px] ' />
                </div>
              
            </div>
            <div className="right text-center flex-1 p-[20px]  flex flex-col gap-[40px]">
                <h1 className='lg:text-[45px] md:text-[35px] sm:text-[30px] text-[25px] text-[#fff]'>تعتقد أنك لا تستطيع تحمل تكلفة تصميم داخلي جميل؟<br/>فكر مرة أخرى. </h1>
                <a href='' >
                    <HoverBorderGradientDemo title={'احجز معاينتك'}/>
                </a>
            </div>
        </div>
    </div>
</section>
  )
}

export default Coast