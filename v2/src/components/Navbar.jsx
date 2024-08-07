import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className=" flex items-center justify-between py-6 mb-20 lg:mb-0">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-2xl font-bold mx-8 cursor-default hover:text-white transition-all duration-300">
          Azeem Idrisi
        </h1>
      </div>
      <div className="m-8 flex flex-wrap items-center justify-center gap-4 ">
        <FaLinkedinIn
          size={24}
          className="cursor-default hover:text-white transition-all duration-300"
        />
        <FaGithub
          size={24}
          className="cursor-default hover:text-white transition-all duration-300"
        />
        <FaInstagram
          size={24}
          className="cursor-default hover:text-white transition-all duration-300"
        />
        <FaSquareXTwitter
          size={24}
          className="cursor-default hover:text-white transition-all duration-300"
        />
      </div>
    </nav>
  );
}

export default Navbar;
