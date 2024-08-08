import React from "react";
import { motion } from "framer-motion";
function TechItem({ children }) {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap"
    >
      {children.length > 1 ? (
        children.map((tech, index) => (
          <span
            key={index}
            className="flex gap-2 w-fit items-center justify-center mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-500 cursor-default hover:text-white transition-all duration-300"
          >
            {tech}
          </span>
        ))
      ) : (
        <span className="flex gap-2 w-fit items-center justify-center mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-neutral-500 cursor-default hover:text-white transition-all duration-300">
          {children}
        </span>
      )}
    </motion.div>
  );
}

export default TechItem;
