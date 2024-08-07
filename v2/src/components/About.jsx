import React from "react";
import profilePic from "../assets/AzeemIdrisi-Laptop.jpg";

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2
        className="my-20 text-center text-4xl 
 cursor-default hover:text-white transition-all duration-300"
      >
        About Me
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img src={profilePic} alt="" className=" h-96 rounded-3xl" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 ">
          <div className="flex lg:justify-start justify-center">
            <p className="my-2 py-6 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              commodi ipsa veniam laborum vitae, ut exercitationem, eos,
              possimus blanditiis ab modi quae? Alias incidunt maxime dolore
              provident ullam, voluptates iure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
