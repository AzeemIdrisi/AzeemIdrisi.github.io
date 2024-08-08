import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
function Navbar() {
  return (
    <motion.nav
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3, delay: 1 }}
      className=" flex flex-wrap justify-center items-center lg:justify-between py-6 mb-16 lg:mb-0"
    >
      <div className="flex flex-shrink-0 items-center">
        <a href="https://azeemidrisi.github.io/">
          {/* <h1 className="text-2xl font-bold mx-8 cursor-default hover:text-white transition-all duration-300">
          Azeem Idrisi
        </h1> */}
          <img src="/favicon.png" className="w-12 h-12 lg:ml-10 " alt="" />
        </a>
      </div>
      <div className="m-8 flex  items-center justify-center gap-4 ">
        <a href="https://www.linkedin.com/in/azeem5202">
          <FaLinkedinIn
            size={24}
            className=" hover:text-white transition-all duration-300"
          />
        </a>
        <a href="https://github.com/AzeemIdrisi">
          <FaGithub
            size={24}
            className=" hover:text-white transition-all duration-300"
          />
        </a>
        <a href="http://www.instagram.com/azeem_5202">
          <FaInstagram
            size={24}
            className=" hover:text-white transition-all duration-300"
          />
        </a>
        <a href="https://www.twitter.com/Azeem_5202">
          <FaXTwitter
            size={24}
            className=" hover:text-white transition-all duration-300"
          />
        </a>
        <a href="https://www.facebook.com/Azeem.5202">
          <FaFacebook
            size={24}
            className=" hover:text-white transition-all duration-300"
          />
        </a>
      </div>
    </motion.nav>
  );
}

export default Navbar;
