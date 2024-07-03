import React from "react";
import { motion } from "framer-motion";
import { ImagesSlider } from "./ui/ImagesSlider";
export function ImagesSliderDemo() {
  const images = [
   "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://i.ibb.co/d4RQBXP/2.jpg",
    "https://i.ibb.co/nRqYj6k/3.jpg",
    "https://i.ibb.co/7SKXVRY/4.jpg",
    "https://images.pexels.com/photos/18492589/pexels-photo-18492589/free-photo-of-modern-culture-center-in-baku.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  return (
    <ImagesSlider className="h-[40rem] object-cover" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
           لمعرفة المزيد عن خدماتنا   <br/>او لحجز استشارة
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border  text-white mx-auto text-center rounded-full relative mt-4">
          <span>
          تواصل معنا  →</span>
          <div className="absolute inset-x-0  h-px -bottom-px  w-3/4 mx-auto from-transparent  to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
