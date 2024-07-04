import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import './partnersSlider/styles.css';
import img1 from '../assets/projectsimgs/1.jpg'
import img2 from '../assets/projectsimgs/2.jpg'
import img3 from '../assets/projectsimgs/3.jpg'
import img4 from '../assets/projectsimgs/4.jpg'
import img5 from '../assets/projectsimgs/5.jpg'
import img6 from '../assets/projectsimgs/6.jpg'
import img7 from '../assets/projectsimgs/7.jpg'
import img8 from '../assets/projectsimgs/8.jpg'
import img9 from '../assets/projectsimgs/9.jpg'
import img10 from '../assets/projectsimgs/10.jpg'
import img11 from '../assets/projectsimgs/11.jpg'
const logos=[{img:img1},{img:img2},{img:img3},{img:img4},{img:img5},{img:img6},{img:img7},{img:img8},{img:img9},{img:img10},{img:img11},{img:img2},{img:img3},{img:img4},{img:img5}]
const ProjectsImgs = () => {
  return (
    <section className='  w-full mb-[50px] mt-[100px]'>
    <div className="container  text-center">
    <Swiper
    slidesPerView={2}
    spaceBetween={0}
    breakpoints={{
      640: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }}
     autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    modules={[Autoplay]}
    className="mySwiper"
  >
    {
        logos.map((logo,index)=>{
            return(
                <SwiperSlide key={index} className=' bg-transparent h-[100vh]'>
                    <div className='img w-[100%] h-[100%]   flex items-center justify-center relative'>   
                        <img src={logo.img} alt="" className=' w-full h-full object-cover' />
                        <span className=' absolute top-0 left-0 w-full h-full bg-[#00000052]'></span>
                    </div>
                </SwiperSlide>
            )
        })
    }
  </Swiper>
    </div>
</section>
  )
}

export default ProjectsImgs