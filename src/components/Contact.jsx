import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
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
              Socials
            </motion.h6>
            <motion.div
              whileInView={{ opacity: 1, y: -0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="my-1 text-xl"
            >
              <div className="mt-4 flex  items-center justify-center gap-4 ">
                <a href="https://www.linkedin.com/in/azeem5202" target="_blank">
                  <FaLinkedinIn
                    size={30}
                    className=" hover:text-white transition-all duration-300"
                  />
                </a>
                <a href="https://github.com/AzeemIdrisi" target="_blank">
                  <FaGithub
                    size={30}
                    className=" hover:text-white transition-all duration-300"
                  />
                </a>
                <a href="http://www.instagram.com/azeem_5202" target="_blank">
                  <FaInstagram
                    size={30}
                    className=" hover:text-white transition-all duration-300"
                  />
                </a>
                <a href="https://www.twitter.com/Azeem_5202" target="_blank">
                  <FaXTwitter
                    size={30}
                    className=" hover:text-white transition-all duration-300"
                  />
                </a>
                <a href="https://www.facebook.com/Azeem.5202" target="_blank">
                  <FaFacebook
                    size={30}
                    className=" hover:text-white transition-all duration-300"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
