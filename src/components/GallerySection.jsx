
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoCloseCircleOutline } from "react-icons/io5";
// Import Swiper styles
import './RecentProjects/Recent.css'
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import { useEffect } from 'react';
// eslint-disable-next-line react/prop-types
const GallerySection = ({galleryOpen,galleryHandlerClose,idProducts}) => {
  useEffect(()=>{
    document.onkeyup=(e)=>{
      if(e.key==='Escape'){
        galleryHandlerClose()
      }
    }
  },[])
  return (
    <section  className={` ${galleryOpen?'fixed':'hidden'}  z-[1000000] top-[0%] left-[0%] w-[100%] h-[100%] bg-[#0000002a] flex items-center justify-center`}>
    <button onClick={galleryHandlerClose}  className='text-[50px] text-Gold absolute right-[4%] top-[17%] lg:right-[20%] lg:top-[15%] md:right-[20%] md:top-[15%] sm:right-[4%] sm:top-[17%] '><span><IoCloseCircleOutline /></span></button>
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      keyboard={{
        enabled: true,
      }}
      navigation={true}
      modules={[Keyboard, Navigation]}
      className="mySwiper z-[10000] lg:w-[50%] md:w-[50%] sm:w-[90%] w-[90%]  h-[50%] "
    >
      
    {
      // eslint-disable-next-line react/prop-types
      idProducts?.fields?.imgs?.map((img,index)=>{
        return(
          <SwiperSlide key={index} className='relative'>
            
          <div className="img w-full h-full">
            <img src={'http:'+img?.fields?.file.url} alt="" className='w-full h-full object-cover'/>
          </div>
        </SwiperSlide>
        )
       })
    }
    </Swiper>
  </section>
    


  )
}

export default GallerySection