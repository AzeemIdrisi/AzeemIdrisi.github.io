import React from "react";
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa6";
import {
  SiAndroid,
  SiDjango,
  SiJavascript,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { motion } from "framer-motion";

function Experience() {
  return (
    <div className="border-b border-neutral-900 py-16">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="my-20 text-center text-4xl 
 cursor-default hover:text-white transition-all duration-300 font-semibold"
      >
        Experience
      </motion.h2>

      <div className="mb-8 flex flex-wrap justify-center">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full lg:w-1/4 pt-1"
        >
          <p className="mb-2 text-sm text-neutral-400">
            August 2024 - December 2024
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-xl lg:w-3/4"
        >
          <motion.h5
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-bold text-xl text-slate-500"
          >
            Sekeron Technologies
          </motion.h5>
          <motion.h6
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-2 font-semibold"
          >
            Frontend Development Intern
          </motion.h6>
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-4 text-neutral-400"
          >
            • Contributed to the development of Sekeron’s main app by designing
            and building responsive, adaptive user interfaces for iOS and
            Android using React Native CLI, and for web platforms using React,
            with Redux for state management. <br /> • Optimized and debugged
            screens to ensure consistent performance and behavior across diverse
            devices and screen sizes, delivering a seamless user experience.
          </motion.p>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center lg:justify-start"
          >
            <span className="flex gap-2 w-fit items-center justify-center mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-500 cursor-default hover:text-white transition-all duration-300 ">
              <FaReact />
              React Native
            </span>
            <span className="flex gap-2 w-fit items-center justify-center mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-500 cursor-default hover:text-white transition-all duration-300">
              <SiAndroid />
              Android
            </span>
            <span className="flex gap-2 w-fit items-center justify-center mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-500 cursor-default hover:text-white transition-all duration-300">
              <FaReact />
              React
            </span>
            <span className="flex gap-2 w-fit items-center justify-center mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-500 cursor-default hover:text-white transition-all duration-300">
              <SiRedux />
              Redux
            </span>
            <span className="flex gap-2 w-fit items-center justify-center mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-500 cursor-default hover:text-white transition-all duration-300">
              <SiJavascript />
              JavaScript
            </span>
            <span className="flex gap-2 w-fit items-center justify-center mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-500 cursor-default hover:text-white transition-all duration-300">
              <SiTypescript />
              TypeScript
            </span>
            <span className="flex gap-2 w-fit items-center justify-center mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-500 cursor-default hover:text-white transition-all duration-300">
              <FaCss3 />
              CSS
            </span>
          </motion.div>
        </motion.div>
      </div>
      <div className="mb-8 flex flex-wrap justify-center">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full lg:w-1/4 pt-1"
        >
          <p className="mb-2 text-sm text-neutral-400">May 2024 - June 2024 </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-xl lg:w-3/4"
        >
          <motion.h5
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-bold text-xl text-slate-500"
          >
            Carths Group
          </motion.h5>
          <motion.h6
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-2 font-semibold"
          >
            Web Development Intern
          </motion.h6>
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-4 text-neutral-400"
          >
            • Developed 2 dynamic web pages using React and 3 static landing
            pages with HTML, CSS and JavaScript.
            <br /> • Built an admin dashboard using Django for seamless
            functionality and management.
          </motion.p>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center lg:justify-start"
          >
            <span className="flex gap-2 w-fit items-center justify-center mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-500 cursor-default hover:text-white transition-all duration-300 ">
              <FaReact />
              React
            </span>
            <span className="flex gap-2 w-fit items-center justify-center mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-500 cursor-default hover:text-white transition-all duration-300">
              <SiDjango />
              Django
            </span>
            <span className="flex gap-2 w-fit items-center justify-center mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-500 cursor-default hover:text-white transition-all duration-300">
              <FaHtml5 />
              HTML
            </span>
            <span className="flex gap-2 w-fit items-center justify-center mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-500 cursor-default hover:text-white transition-all duration-300">
              <FaCss3 />
              CSS
            </span>
            <span className="flex gap-2 w-fit items-center justify-center mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-500 cursor-default hover:text-white transition-all duration-300">
              <SiJavascript />
              JavaScript
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Experience;
