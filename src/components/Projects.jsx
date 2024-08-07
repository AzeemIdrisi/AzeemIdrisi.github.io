import React from "react";
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa6";
import { SiDjango, SiJavascript, SiPython } from "react-icons/si";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="my-20 text-center text-4xl 
 cursor-default hover:text-white transition-all duration-300 font-semibold"
      >
        Projects
      </motion.h2>

      <div className="mb-8 flex flex-wrap lg:justify-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          className="w-full lg:w-1/4"
        >
          <img
            src="https://github.com/AzeemIdrisi/PhoneSploit-Pro/raw/main/docs/Screenshot-1.png"
            alt=""
            width={250}
            className="mb-6 w-full lg:w-64 rounded-xl"
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-xl lg:w-3/4"
        >
          <motion.h6
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="mb-2 font-semibold"
          >
            PhoneSploit Pro
          </motion.h6>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-neutral-400"
          >
            An all-in-one hacking tool to remotely exploit Android devices using
            ADB and Metasploit-Framework to get a Meterpreter session.
          </motion.p>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap"
          >
            <span className="flex gap-2 w-fit items-center justify-center mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-500 cursor-default hover:text-white transition-all duration-300">
              <SiPython />
              Python
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
