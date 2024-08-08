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
  SiHtml5,
  SiCss3,
  SiOpencv,
  SiGithubactions,
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
      <ProjectItem
        link={"https://swiftchat.pythonanywhere.com/"}
        title={"SwiftChat"}
        description={
          "A simple room based real-time chatting platform with temporary Room ID and Password."
        }
        img={
          "https://github.com/AzeemIdrisi/SwiftChat/raw/main/static/chat/icon.png"
        }
      >
        <TechItem>
          <>
            <SiDjango />
            Django
          </>
          <>
            <SiPython />
            Python
          </>
          <>
            <SiHtml5 />
            HTML
          </>
          <>
            <SiCss3 />
            CSS
          </>
          <>
            <SiJavascript />
            JavaScript
          </>
        </TechItem>
      </ProjectItem>
      <ProjectItem
        link={"https://ipecchat.pythonanywhere.com/"}
        title={"ChatterBox"}
        description={
          "A simple and anonymous messaging platform that allows users to post messages without the need for login or signup."
        }
        img={"https://ipecchat.pythonanywhere.com/static/Homepage/icon.png"}
      >
        <TechItem>
          <>
            <SiDjango />
            Django
          </>
          <>
            <SiPython />
            Python
          </>
          <>
            <SiHtml5 />
            HTML
          </>
          <>
            <SiCss3 />
            CSS
          </>
          <>
            <SiJavascript />
            JavaScript
          </>
        </TechItem>
      </ProjectItem>
      <ProjectItem
        link={"https://zenix-twitter.vercel.app/"}
        title={"Zenix"}
        description={
          "A full stack Twitter/X clone built with ReactJS, NodeJS, MongoDB Atlas and ExpressJS."
        }
        img={"https://www.nikon.com.au/media/wysiwyg/ZLogo.png"}
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
        </TechItem>
      </ProjectItem>
      <ProjectItem
        link={"https://devfolio.co/projects/watchguard-09b1"}
        title={"WatchGuard"}
        description={
          "An Enhanced Surveillance System capable of identifying and alerting authorities about any unusual or suspicious behavior within a monitored geographic area using OpenCV and Machine Learning."
        }
        screenshot
        img={
          "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F8b70d6a0eb494eaaa463c4868a50a55a%2Fprojects%2F55799a1d6c6741f992546623af3ced12%2F9b47c81c-47b4-41fd-9f01-360ea7c9e9dc.png&w=1440&q=75"
        }
      >
        <TechItem>
          <>
            <SiDjango />
            Django
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
            <SiOpencv />
            OpenCV
          </>
          <>
            <SiPython />
            Python
          </>
        </TechItem>
      </ProjectItem>
      <ProjectItem
        link={"https://github.com/AzeemIdrisi/QR-Attendance-System"}
        title={"QR Attendance System"}
        description={
          "A mini project for college hackathon that provides a hassle-free solution for marking attendance within college network using QR Code and Local network IP Address."
        }
        screenshot
        img={
          "https://private-user-images.githubusercontent.com/112647789/266789876-e4c9f2d8-6b8e-44de-a63d-f7e5db45383e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjMxMDY4NjQsIm5iZiI6MTcyMzEwNjU2NCwicGF0aCI6Ii8xMTI2NDc3ODkvMjY2Nzg5ODc2LWU0YzlmMmQ4LTZiOGUtNDRkZS1hNjNkLWY3ZTVkYjQ1MzgzZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwODA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDgwOFQwODQyNDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hY2ZhOTNjMDUwNDFiYWIyYmY0YmJlY2MyM2ZiMDk4NDQxNWIxOWU4YTdkOWVmZDk3ZWZjODcwNDU2YWE5MDVkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.x_vxhNES1MDYdVYWu58edqPZrU79GnTLlN36MlzwweM"
        }
      >
        <TechItem>
          <>
            <SiDjango />
            Django
          </>
          <>
            <SiPython />
            Python
          </>
          <>
            <SiHtml5 />
            HTML
          </>
          <>
            <SiCss3 />
            CSS
          </>
          <>
            <SiJavascript />
            JavaScript
          </>
        </TechItem>
      </ProjectItem>
      <ProjectItem
        link={"https://github.com/AzeemIdrisi/InstaLoaderWeb"}
        title={"InstaLoaderWeb"}
        description={
          "A web app to preview and download all pictures, videos and reels from an Instagram Post based on instaloader."
        }
        screenshot
        img={
          "https://private-user-images.githubusercontent.com/112647789/335827691-2cf70485-c61e-4668-90f8-515fa124c769.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjMxMDY5NTYsIm5iZiI6MTcyMzEwNjY1NiwicGF0aCI6Ii8xMTI2NDc3ODkvMzM1ODI3NjkxLTJjZjcwNDg1LWM2MWUtNDY2OC05MGY4LTUxNWZhMTI0Yzc2OS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwODA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDgwOFQwODQ0MTZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mNmFkYzA4MDM5M2NmMGU4ZjRmMzNhOWQyNjJhYTU1YjA5MDcwNTdkOGIxMzg5ZGMwOTBiY2NkNDYyYjIxMzI3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.jxB9i4iCoLsN5lrMMxcAV1-EzPUR6v5EmvGF1Vh4Qkw"
        }
      >
        <TechItem>
          <>
            <SiDjango />
            Django
          </>
          <>
            <SiPython />
            Python
          </>
          <>
            <SiHtml5 />
            HTML
          </>
          <>
            <SiCss3 />
            CSS
          </>
          <>
            <SiJavascript />
            JavaScript
          </>
        </TechItem>
      </ProjectItem>
      <ProjectItem
        link={"https://github.com/AzeemIdrisi/Noted"}
        title={"Noted"}
        description={
          "Noted is a simple frontend clone of Google Keep, built with React and Material UI."
        }
        screenshot
        img={
          "https://private-user-images.githubusercontent.com/112647789/311496417-836c9a51-c71d-4541-bb87-e13f595a475a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjMxMDcwNzcsIm5iZiI6MTcyMzEwNjc3NywicGF0aCI6Ii8xMTI2NDc3ODkvMzExNDk2NDE3LTgzNmM5YTUxLWM3MWQtNDU0MS1iYjg3LWUxM2Y1OTVhNDc1YS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwODA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDgwOFQwODQ2MTdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yMjJjMGQ2Y2RkMmE0NmI3NzY1ZjJlMTFkMTJlMGNiNThlYzQ1ZGQxYjUxZDY2NTkxNTExZjhkYWE3NWY1OTY2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.We55xfDTYmY4gGOV7WjZGFbCFozeRc1F0vJ8gFk4Rfs"
        }
      >
        <TechItem>
          <>
            <SiReact />
            React
          </>
        </TechItem>
      </ProjectItem>
      <ProjectItem
        link={"https://github.com/AzeemIdrisi/TweetifyMusic"}
        title={"TweetifyMusic Bot"}
        description={
          "A Twitter/X Bot that utilizes GitHub Actions to automatically tweet your recently played song on Spotify on a manually scheduled basis."
        }
        screenshot
        img={"https://t2.tudocdn.net/677646?w=824&h=494"}
      >
        <TechItem>
          <>
            <SiPython />
            Python
          </>
          <>
            <SiGithubactions />
            GitHub Actions
          </>
        </TechItem>
      </ProjectItem>
    </div>
  );
}

export default Projects;
