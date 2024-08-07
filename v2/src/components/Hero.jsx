import React from "react";
import memojiPic from "../assets/Memoji.png";

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start lg:p-10">
            <h1 className="pb-16 text-6xl lg:text-8xl font-light  tracking-tight lg:mt-16 cursor-default hover:text-white transition-all duration-300">
              Azeem Idrisi
            </h1>
            <span className=" bg-gradient-to-r from-purple-300 via-slate-400 to-blue-500 bg-clip-text text-4xl tracking-tight text-transparent cursor-default hover:text-white/50 transition-all duration-300">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
              illo placeat dignissimos voluptatibus error! Repellendus ipsam quo
              fugiat reiciendis molestiae accusantium illo, possimus eius ab,
              nam, aspernatur vel similique recusandae!
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 overflow-hidden">
          <div className="flex justify-center">
            <img
              src={memojiPic}
              className="h-96 cursor-default hover:h-[24.5rem] transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
