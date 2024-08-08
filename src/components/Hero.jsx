import React from "react";
import memojiPic from "../assets/Memoji.png";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { FaGithub } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

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
              className="bg-gradient-to-r  from-blue-300  to-slate-400 bg-clip-text text-transparent lg:pb-16 pb-6 text-6xl lg:text-8xl font-light  tracking-tight lg:mt-16 cursor-default hover:text-white transition-all duration-300"
            >
              Azeem Idrisi
            </motion.h1>
            <div className="flex justify-center items-center lg:text-4xl text-2xl">
              <motion.span
                ref={el}
                variants={container(0.3)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-purple-300 via-slate-400 to-blue-500 bg-clip-text text-2xl lg:text-4xl tracking-tight text-transparent cursor-default hover:text-white/50 transition-all duration-300"
              ></motion.span>
            </div>
            <motion.p
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter lg:text-left text-center"
            >
              I am a <strong className="font-semibold">Tech Enthusiast</strong>{" "}
              and a{" "}
              <strong className="font-semibold">
                Passionate Software Developer
              </strong>{" "}
              from India, currently in my final year pursuing a{" "}
              <strong className="font-semibold">
                Bachelor of Technology Degree in Computer Science & Engineering.
              </strong>{" "}
              My passion for technology drives me to constantly explore and
              innovate in the world of technology.
            </motion.p>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="flex flex-row flex-wrap items-center justify-start gap-5 mt-8"
            >
              <a href="https://github.com/AzeemIdrisi">
                {" "}
                <h2 className="border-2 border-neutral-300 rounded-full px-4 py-2 font-semibold flex justify-center items-center gap-2 hover:bg-white hover:text-black hover:border-white transition-all duration-500 cursor-pointer">
                  <FaGithub />
                  Visit GitHub
                </h2>
              </a>
              <a href="#contact">
                <h2 className="border-2 border-neutral-300 rounded-full px-4 py-2 font-semibold flex justify-center items-center gap-1  hover:bg-white hover:text-black hover:border-white transition-all duration-500 cursor-pointer">
                  <MdAlternateEmail />
                  Contact Me
                </h2>
              </a>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 overflow-hidden">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={memojiPic}
              className="lg:h-96 lg:min-w-96 h-80 min-h-80 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
