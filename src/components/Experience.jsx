import React from "react";
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa6";
import { SiDjango, SiJavascript } from "react-icons/si";
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
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full lg:w-1/4 pt-1"
        >
          <p className="mb-2 text-sm text-neutral-400">May 2024 - June 2024 </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-xl lg:w-3/4"
        >
          <motion.h5
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-bold text-xl text-slate-500"
          >
            Carths Group
          </motion.h5>
          <motion.h6
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-2 font-semibold"
          >
            Web Development Intern
          </motion.h6>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-4 text-neutral-400"
          >
            • Developed over 5 visually appealing, responsive and functional
            websites using HTML, CSS, JavaScript, React, Django, and Webflow.
            <br /> • Assisted clients in establishing their online presence,
            planning an efficient digital strategy, and integrating services,
            resulting in a 30% increase in lead generation and a 25% boost in
            customer engagement
          </motion.p>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
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
