import React from "react";
import { motion } from "framer-motion";
import ExpoLogo from "../assets/Expo-Light.png";
function Skills() {
  return (
    <div className="border-b border-neutral-900 py-16">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="font-semibold my-20 text-center text-4xl cursor-default hover:text-white transition-all duration-300"
      >
        Skills
      </motion.h2>
      <div className="flex max-w-3xl mx-auto  flex-wrap items-center justify-center gap-5">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex  flex-col gap-5 items-center justify-center flex-wrap m-5"
        >
          <h1 className="text-2xl font-light">Programming Languages</h1>
          <div className="flex gap-5 items-center justify-center flex-wrap">
            <a
              href="https://www.cprogramming.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://skillicons.dev/icons?i=c" alt="icons" />
            </a>
            <a
              href="https://www.w3schools.com/cpp/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://skillicons.dev/icons?i=cpp" alt="icons" />
            </a>
            <a href="https://www.python.org" target="_blank" rel="noreferrer">
              <img src="https://skillicons.dev/icons?i=python" alt="icons" />
            </a>

            <a
              href="https://ecma-international.org/publications-and-standards/standards/ecma-262/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://skillicons.dev/icons?i=javascript"
                alt="icons"
              />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col gap-5 items-center justify-center flex-wrap m-5 "
        >
          <h1 className="text-2xl font-light">Web Development</h1>
          <div className="flex gap-5 items-center justify-center flex-wrap">
            <a
              href="https://www.djangoproject.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://skillicons.dev/icons?i=django" alt="icons" />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://skillicons.dev/icons?i=html" alt="icons" />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://skillicons.dev/icons?i=css" alt="icons" />
            </a>
            <a
              href="https://getbootstrap.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://skillicons.dev/icons?i=bootstrap" alt="icons" />
            </a>
            <a href="https://jquery.com/" target="_blank" rel="noreferrer">
              <img src="https://skillicons.dev/icons?i=jquery" alt="icons" />
            </a>
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              <img src="https://skillicons.dev/icons?i=tailwind" alt="icons" />
            </a>
            <a href="https://react.dev/" target="_blank" rel="noreferrer">
              <img src="https://skillicons.dev/icons?i=react" alt="icons" />
            </a>
            <a href="https://nodejs.org/en" target="_blank" rel="noreferrer">
              <img src="https://skillicons.dev/icons?i=nodejs" alt="icons" />
            </a>
            <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
              <img src="https://skillicons.dev/icons?i=express" alt="icons" />
            </a>
            <a
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://skillicons.dev/icons?i=redux" alt="icons" />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col gap-5 items-center justify-center flex-wrap m-5"
        >
          <h1 className="text-2xl font-light">App Development</h1>
          <div className="flex gap-5 items-center justify-center flex-wrap ">
            <a href="https://reactnative.dev/" target="_blank" rel="noreferrer">
              <img
                src="https://skillicons.dev/icons?i=react&theme=light"
                alt="icons"
              />
            </a>
            <a href="https://expo.dev/" target="_blank" rel="noreferrer">
              <img src={ExpoLogo} alt="icons" height="48" width="48" />
            </a>
            <a
              href="https://www.kotlinlang.org/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://skillicons.dev/icons?i=kotlin" alt="icons" />
            </a>
            <a
              href="https://developer.android.com/studio/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://skillicons.dev/icons?i=androidstudio"
                alt="icons"
              />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col gap-5 items-center justify-center flex-wrap m-5"
        >
          <h1 className="text-2xl font-light">Databases</h1>
          <div className="flex gap-5 items-center justify-center flex-wrap">
            <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
              <img src="https://skillicons.dev/icons?i=mongo" alt="icons" />
            </a>
            <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
              <img src="https://skillicons.dev/icons?i=mysql" alt="icons" />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col gap-5 items-center justify-center flex-wrap m-5"
        >
          <h1 className="text-2xl font-light">Tools</h1>
          <div className="flex gap-5 items-center justify-center flex-wrap">
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
              <img src="https://skillicons.dev/icons?i=git" alt="icons" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <img src="https://skillicons.dev/icons?i=github" alt="icons" />
            </a>
            <a href="https://bitbucket.com/" target="_blank" rel="noreferrer">
              <img src="https://skillicons.dev/icons?i=bitbucket" alt="icons" />
            </a>
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://skillicons.dev/icons?i=vscode" alt="icons" />
            </a>
            <a href="https://www.postman.com/" target="_blank" rel="noreferrer">
              <img src="https://skillicons.dev/icons?i=postman" alt="icons" />
            </a>
            <a
              href="https://www.adobe.com/uk/products/photoshop.html"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://skillicons.dev/icons?i=photoshop" alt="icons" />
            </a>
            <a
              href="https://www.adobe.com/uk/products/premiere.html"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://skillicons.dev/icons?i=pr" alt="icons" />
            </a>
            <a href="https://www.linux.org/" target="_blank" rel="noreferrer">
              <img src="https://skillicons.dev/icons?i=linux" alt="icons" />
            </a>
            <a href="https://archlinux.org/" target="_blank" rel="noreferrer">
              <img src="https://skillicons.dev/icons?i=arch" alt="icons" />
            </a>
            <a href="https://kali.org/" target="_blank" rel="noreferrer">
              <img src="https://skillicons.dev/icons?i=kali" alt="icons" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
