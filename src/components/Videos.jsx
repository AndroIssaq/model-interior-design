import { useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './styles.css';
const Videos = () => {
    const [videos, setVideos] = useState([])
    const [idVideos, setIdVideos] = useState([])
  
  return (
    <section className='w-full'>
        <div className="container">


        <Swiper
    slidesPerView={1}   
    spaceBetween={0}
    breakpoints={{
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      
    }}
    keyboard={{
      enabled: true,
    }}
    navigation={true}
    modules={[Navigation]}
    className="mySwiper "
  >
    {
        videos?.map((video,index)=>{
            return(
                <SwiperSlide key={index} className=' '>
                   <div className="video w-full">
                                <iframe className='w-[100%] rounded-[25px] lg:h-[400px] md:h-[350px] sm:h-[250px] h-[250px]'  src={video?.fields?.link} title="YouTube video player"   ></iframe>
                                
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

export default Videos