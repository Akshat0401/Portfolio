import React from "react";
import image from "../assets/image.png";
function Intro() {
  return (
    <div id="home" className="relative h-[calc(100vh-5rem)] w-screen max-w-[75rem] mx-auto overflow-hidden">
      <div className="h-screen w-screen p-8 text-[3rem] font-bold flex flex-col justify-center">
        <span className="text-[1.75 rem] font-thin">Hello,</span>
        <span>I'm <span className="text-yellow-400">Akshat</span> <br /> Web Developer</span>
        <p className="mt-2 text-gray-300 font-extralight text-lg w-[40%]">
          I'm a MERN Stack Developer passionate about building scalable web applications. 
          I also explore Data Structures & Algorithms and have worked on multiple projects.
        </p>
      </div>
      <img src={image} alt="" className="absolute right-0 top-[-4rem] z-[-1] h-[100vh] object-top object-cover md:right-[-2rem] sm:right-[-3rem]"/>
    </div>
  );
}

export default Intro;
