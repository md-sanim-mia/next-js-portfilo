"use client";
import {
  ArrowDown,
  Download,
  Facebook,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import profile from "..//..//..//public/sanims.png";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "../ui/button";
const Banner = () => {
  return (
    <div className="px-1 pt-6 gap-4 flex-row-reverse lg:flex  items-center max-w-screen-xl mx-auto">
      <div className=" lg:py-0 py-5 lg:w-1/2  grid justify-center lg:justify-end">
        <div className=" text-white rounded-full">
          <Image
            style={{ boxShadow: "0 4px 7px rgba(255, 1, 79, 0.7)" }}
            src={profile}
            height={400}
            width={600}
            className="object-cover w-full h-full  shadow-lg object-center"
            alt="sanim"
          />
        </div>
      </div>
      <div className=" lg:w-2/3 ">
        <p className=" text-xl text-gray-400 tracking-wider uppercase lg:mb-7 mb-3">
          Welcome to my world
        </p>
        <h2 className=" font-semibold lg:text-6xl md:text-4xl text-3xl leading-normal ">
          Hi, I’m <span className="text-[#ff014f]">Sanim Mia</span>
        </h2>
        <h2 className=" text-4xl md:text-6xl f font-bold leading-tight text-[#ff014f] mt-3 font-sans">
          <Typewriter
            loop
            words={["A Web Developer", "Professional Coder"]}
          ></Typewriter>
        </h2>
        <p className="text-gray-400 text-lg">
          Hi, I'm a passionate Full Stack Web Developer, crafting seamless
          digital experiences from front-end elegance to back-end power. From
          dynamic UI to secure APIs – I build it all. Let's turn your ideas into
          reality with clean code and creative solutions.
        </p>

        <div className="flex justify-between items-end mt-6">
          {/* <a href="/resume.pdf" download>
            <button className="gap-2">
              <Download className="w-4 h-4" />
            </button>
          </a> */}
          <div>
            <Button className="bg-[#ff014f] hover:text-[#ff014f] cursor-pointer">
              Resume <Download size={20} />
            </Button>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-400 relative inline-block mb-1">
              <span className="absolute -left-6 top-1/2 w-4 h-[2px] bg-[#ff014f]"></span>
              FIND WITH ME
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, Github].map((Icon, i) => (
                <div
                  key={i}
                  className="w-12 h-12 bg-[#2a2d32] rounded-lg flex items-center justify-center hover:bg-[#ff014f] hover:-translate-y-2 hover:shadow-lg hover:shadow-[#ff014f]/20 transition-all duration-300 cursor-pointer"
                >
                  <Icon size={20} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
