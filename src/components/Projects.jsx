import React from "react";
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa6";
import {
  SiDjango,
  SiJavascript,
  SiPython,
  SiReact,
  SiMongodb,
  SiSocketdotio,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiCloudinary,
  SiAndroid,
  SiKotlin,
} from "react-icons/si";
import { motion } from "framer-motion";
import ProjectItem from "./ProjectItem";
import TechItem from "./TechItem";

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

      <ProjectItem
        link={"https://github.com/AzeemIdrisi/PhoneSploit-Pro"}
        title={"PhoneSploit Pro"}
        description={
          "An all-in-one hacking tool to remotely exploit Android devices using ADB and Metasploit-Framework to get a Meterpreter session."
        }
        screenshot
        img={
          "https://github.com/AzeemIdrisi/PhoneSploit-Pro/raw/main/docs/Screenshot-1.png"
        }
      >
        <TechItem>
          <>
            <SiPython />
            Python
          </>
        </TechItem>
      </ProjectItem>

      <ProjectItem
        link={"https://velocity-chat-app.vercel.app/chat"}
        title={"Velocity"}
        description={
          "Full Stack Realtime Chat App built with MERN and Socket.io"
        }
        img={
          "https://github.com/AzeemIdrisi/Velocity/raw/main/Client/public/static/images/velocity-logo.png"
        }
      >
        <TechItem>
          <>
            <SiExpress />
            Express.js
          </>
          <>
            <SiReact />
            React
          </>
          <>
            <SiTailwindcss />
            Tailwind CSS
          </>
          <>
            <SiMongodb />
            MongoDB
          </>
          <>
            <SiNodedotjs />
            Node.js
          </>
          <>
            <SiSocketdotio />
            Socket.io
          </>
          <>
            <SiCloudinary />
            Cloudinary
          </>
        </TechItem>
      </ProjectItem>

      <ProjectItem
        link={"https://github.com/AzeemIdrisi/InstaLoaderApp"}
        title={"InstaLoaderApp"}
        description={
          "A Bulk Media Downloader Android app to automatically download all pictures, videos and reels from an Instagram Account in one click. Also a single post/reel downloader."
        }
        img={
          "https://github.com/AzeemIdrisi/InstaLoader-App/raw/main/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png"
        }
      >
        <TechItem>
          <>
            <SiAndroid />
            Android
          </>
          <>
            <SiKotlin />
            Kotlin
          </>
          <>
            <SiPython />
            Python
          </>
        </TechItem>
      </ProjectItem>
    </div>
  );
}

export default Projects;
