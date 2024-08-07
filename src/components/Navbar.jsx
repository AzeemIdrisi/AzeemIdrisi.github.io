import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
function Navbar() {
  return (
    <motion.nav
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3, delay: 1.3 }}
      className=" flex items-center justify-between py-6 mb-20 lg:mb-0"
    >
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-2xl font-bold mx-8 cursor-default hover:text-white transition-all duration-300">
          Azeem Idrisi
        </h1>
      </div>
      <div className="m-8 flex flex-wrap items-center justify-center gap-4 ">
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
