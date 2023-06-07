import React from "react";

// import woman image
import WomanImg from "../assets/img/banner-women2.png";
import resume from "../assets/Abhishek.pdf";
import Socials from "./Socials";
const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg text-teal-300 font-bold text-md mb-[10px]">
              Hey, I'm  👋
            </p>
            <h1 className="text-3xl  font-bold leading-[44px] md:text-2xl md:leading-tight lg:text-4xl lg:leading-[1.2] md:tracking-[-2px]">Abhishek Darwekar</h1>
            <h1 className="text-3xl  leading-[44px] md:text-3xl md:leading-tight lg:text-5xl lg:leading-[1.2] md:tracking-[-2px]">
              I Build <br /> Web Interfaces.
            </h1>
              <h1 className="mt-8 mb-3" > {<Socials/>}</h1>

            <a
              href={resume}
              className="btn mt-4 rounded-md btn-md bg-cyan-700 hover:bg-secondary-hover transition-all"
              target="_blank"
            >
              Resume
            </a>
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-end h-full">
            <img className="bg-black" src={WomanImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
