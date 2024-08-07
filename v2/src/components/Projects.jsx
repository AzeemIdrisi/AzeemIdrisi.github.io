import React from "react";
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa6";
import { SiDjango, SiJavascript } from "react-icons/si";

function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2
        className="my-20 text-center text-4xl 
 cursor-default hover:text-white transition-all duration-300"
      >
        Projects
      </h2>

      <div className="mb-8 flex flex-wrap lg:justify-center">
        <div className="w-full lg:w-1/4">
          <img
            src="https://github.com/AzeemIdrisi/PhoneSploit-Pro/raw/main/docs/Screenshot-1.png"
            alt=""
            width={250}
            className="mb-6 rounded-xl"
          />
        </div>
        <div className="w-full max-w-xl lg:w-3/4">
          <h6 className="mb-2 font-semibold">PhoneSploit Pro</h6>
          <p className="mb-4 text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eos
            voluptate fugiat, asperiores tempora cupiditate minus fuga eligendi
            perspiciatis repellat deserunt voluptatem voluptates sequi magni
            soluta quae iure hic nisi.
          </p>
          <div className="flex flex-wrap">
            <span className="flex gap-2 w-fit items-center justify-center mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-500 cursor-default hover:text-white transition-all duration-300">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
