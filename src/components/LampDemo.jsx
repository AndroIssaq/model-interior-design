import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
 
export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-100 py-4 bg-clip-text text-center text-[35px] font-medium tracking-tight text-transparent md:text-5xl"
      >
        نموذج ثلاثي الأبعاد واقعي ومساعدة احترافية
         <br/>
         لتجنب التخمين في عملية التصميم
      </motion.h1>
    </LampContainer>
  );
}