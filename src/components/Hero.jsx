import React from "react";
import memojiPic from "../assets/Memoji.png";
import { motion } from "framer-motion";
import Typed from "typed.js";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.2, delay: delay },
  },
});
function Hero() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Software Developer.",
        "MERN Stack Web Developer.",
        "React Native App Developer.",
        "Python Developer.",
        "Ethical Hacker.",
        "Competitive Coder.",
        "Youtuber.",
      ],
      typeSpeed: 50,
      loop: true,
      loopCount: Infinity,
      backDelay: 3000,
      backSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="border-b border-neutral-900 pb-4">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start lg:p-10">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r  from-blue-300  to-slate-400 bg-clip-text text-transparent pb-16 text-6xl lg:text-8xl font-light  tracking-tight lg:mt-16 cursor-default hover:text-white transition-all duration-300"
            >
              Azeem Idrisi
            </motion.h1>
            <div className="flex justify-center items-center text-4xl">
              <motion.span
                ref={el}
                variants={container(0.3)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-purple-300 via-slate-400 to-blue-500 bg-clip-text text-4xl tracking-tight text-transparent cursor-default hover:text-white/50 transition-all duration-300"
              >
                Full Stack Developer
              </motion.span>
            </div>
            <motion.p
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              I am a Tech Enthusiast and a passionate Software Developer from
              India, currently in my final year pursuing a Bachelor of
              Technology Degree in Computer Science & Engineering. My passion
              for technology drives me to constantly explore and innovate in the
              world of technology.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 overflow-hidden">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0, delay: 1 }}
              src={memojiPic}
              className="h-96 cursor-default hover:h-[24.5rem] transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
