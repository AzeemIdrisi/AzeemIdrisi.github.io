import React from "react";
import laptopImg from "../assets/Laptop.png";
import { motion } from "framer-motion";
function Contact() {
  return (
    <div className="border-b border-neutral-900 py-16">
      <motion.h2
        id="contact"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="my-20 text-center text-4xl 
 cursor-default hover:text-white transition-all duration-300 font-semibold"
      >
        Contact Me
      </motion.h2>
      <div className="text-center tracking-tighter flex flex-wrap gap-20 items-center justify-center w-full">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pb-10"
        >
          <img src={laptopImg} className="h-80 min-h-80" />
        </motion.div>
        <div>
          <div className="mt-8">
            <motion.h6
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-semibold text-neutral-400 text-sm "
            >
              Business Email
            </motion.h6>
            <motion.p
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="my-1 text-xl"
            >
              <a
                href="mailto:azeemidrisiofficial@gmail.com
"
              >
                azeemidrisiofficial@gmail.com
              </a>
            </motion.p>
          </div>
          <div className="mt-8">
            <motion.h6
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-semibold text-neutral-400 text-sm"
            >
              Linktree
            </motion.h6>
            <motion.p
              whileInView={{ opacity: 1, y: -0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="my-1 text-xl"
            >
              <a href="https://linktr.ee/AzeemIdrisi" target="_blank">
                linktr.ee/AzeemIdrisi
              </a>
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
