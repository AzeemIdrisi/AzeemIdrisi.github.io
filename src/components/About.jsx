import React from "react";
import profilePic from "../assets/AzeemIdrisi-Laptop.jpg";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="border-b border-neutral-900 py-16">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="my-20 text-center text-4xl 
 cursor-default hover:text-white transition-all duration-300 font-semibold"
      >
        About Me
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              src={profilePic}
              alt=""
              className=" lg:h-96 lg:min-w-96 h-80 min-w-80 rounded-3xl"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full lg:w-1/2 "
        >
          <div className="my-8 lg:my-0 lg:justify-start justify-center lg:text-left text-center">
            <motion.p
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="py-6 max-w-xl"
            >
              I am a Computer Science undergraduate with a strong interest in
              technology and coding. I love to build projects and learn new
              technologies. Currently I am exploring React Native.
            </motion.p>

            <motion.p
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className=" py-6 max-w-xl"
            >
              As an aspiring Software Engineer, Ethical Hacker, and Security
              Researcher, I am eager to deepen my understanding of computer
              systems and security protocols.
            </motion.p>

            <motion.p
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className=" py-6 max-w-xl"
            >
              My goal is not only to excel in coding and software development
              but also to innovate and contribute to the ever-evolving field of
              cybersecurity, playing a crucial role in securing the digital
              landscape.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
