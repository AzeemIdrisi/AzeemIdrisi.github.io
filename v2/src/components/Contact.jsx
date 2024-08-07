import React from "react";
import laptopImg from "../assets/Laptop.png";

function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2
        className="my-20 text-center text-4xl 
 cursor-default hover:text-white transition-all duration-300"
      >
        Contact Me
      </h2>
      <div className="text-center tracking-tighter flex flex-wrap gap-20 items-center justify-center w-full">
        <div className="pb-10">
          <img src={laptopImg} className="h-80" />
        </div>
        <div>
          <div className="mt-8">
            <h6 className="font-semibold text-neutral-400 text-sm ">
              Business Email
            </h6>
            <p className="my-1 text-xl">azeemidrisi@protonmail.com</p>
          </div>
          <div className="mt-8">
            <h6 className="font-semibold text-neutral-400 text-sm">Linktree</h6>
            <p className="my-1 text-xl">linktr.ee/AzeemIdrisi</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
