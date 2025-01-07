import React from "react";
import { motion } from "framer-motion";
import { ImagesSlider } from "./ui/ImagesSlider";
export function ImagesSliderDemo() {
  const images = [
   "https://iili.io/dKeeM8X.jpg",
    "https://iili.io/dKeeW9n.jpg",
    "https://iili.io/dKeeXus.jpg",
    "https://iili.io/dKeeGat.jpg",
    "https://iili.io/dKeejtf.jpg",
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
          <a href="https://wa.me/+201022222649">
          <span>
          تواصل معنا  →</span>
          </a>
          <div className="absolute inset-x-0  h-px -bottom-px  w-3/4 mx-auto from-transparent  to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}


/*
<a href="https://freeimage.host/"><img src="https://iili.io/dKeeM8X.jpg" alt="dKeeM8X.jpg" border="0"></a>
<a href="https://freeimage.host/"><img src="https://iili.io/dKeeW9n.jpg" alt="dKeeW9n.jpg" border="0"></a>
<a href="https://freeimage.host/"><img src="https://iili.io/dKeeXus.jpg" alt="dKeeXus.jpg" border="0"></a>
<a href="https://freeimage.host/"><img src="https://iili.io/dKeeGat.jpg" alt="dKeeGat.jpg" border="0"></a>
<a href="https://freeimage.host/"><img src="https://iili.io/dKeehwG.jpg" alt="dKeehwG.jpg" border="0"></a>
<a href="https://freeimage.host/"><img src="https://iili.io/dKeejtf.jpg" alt="dKeejtf.jpg" border="0"></a>
*/ 