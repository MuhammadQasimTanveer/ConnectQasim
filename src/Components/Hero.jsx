import React from 'react';
import { Globe, MonitorPlay, Server, Palette, Github, Linkedin, ArrowRight, Dot } from "lucide-react";
// import portrait from "../assets/Images/personal-img.png";
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";

const services = [
  "UI/UX Design", "MERN Stack App", "Nextjs App", "SPA's", "Figma", "React App", ".NET Desktop"
];

const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <div className="w-full overflow-hidden bg-(--border-color)/30 border border-(--border-color) rounded-full mb-5 py-1">
        <Marquee autoFill speed={60} >
          {services.map((item, index) => (
            <div key={index} className="flex items-center gap-2 font-light text-sm text-(--primary-color) mx-6">
              <Dot className="w-8 h-8 text-(--secondary-color)" />
              <span>{item}</span>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center pb-15">
        <div className="flex flex-col items-start justify-center">
          <div className="space-y-3">
            <h2 className="font-serif italic text-xl md:text-2xl text-(--secondary-color)/60 tracking-wide">
              Assalam o Allaikum!
            </h2>
            <h2 className="text-3xl  md:text-5xl text-(--text-color)">
              I'm <span className="text-[#FF6B6B]/50"> Muhammad Qasim </span>
              Working as Full Stack Engineer & UI Designer
            </h2>
            <p className="text-sm md:text-lg font-light text-(--text-color)/60">
              Crafting scalable web applications with seamless user interaction.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 my-9 md:mt-7">
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-500/40 text-cyan-500 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500 hover:text-purple-300"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <div className="flex gap-5">
              <Link to="https://github.com/MuhammadQasimTanveer"
                className="text-(--text-color) transition hover:text-(--primary-color) hover:-translate-y-0.5"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link to="https://www.linkedin.com/in/qasimtanvir04"
                className="text-(--text-color) transition hover:text-(--primary-color) hover:-translate-y-0.5"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <img src="" alt="Muhammad Qasim"
            className="w-55 md:w-70 rounded-3xl border border-(--primary-color)/30 rotate-3 transition-all duration-300 ease-in-out hover:scale-103 cursor-pointer"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-6">
        <Link to="/services" className="cursor-pointer group">
          <div className="flex flex-col justify-between bg-(--border-color)/29 rounded-4xl p-8">
            <div className="flex justify-center gap-10 md:gap-14 mt-7 mb-12 text-(--primary-color)/80">
              <Globe className="w-8 h-8" />
              <Server className="w-8 h-8" />
              <Palette className="w-8 h-8" />
              <MonitorPlay className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <p className="text-xs font-light text-(--text-color)/60"> SPECIALIZATION </p>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-medium text-(--primary-color)"> Services</h2>
                <ArrowRight className="w-6 h-6 text-(--text-color)/30 group-hover:text-(--primary-color) transition" />
              </div>
            </div>
          </div>
        </Link>

        <Link to="/about" className="cursor-pointer group">
          <div className="flex flex-col justify-between bg-(--border-color)/29 rounded-4xl p-8">
            <h1 className="text-3xl md:text-4xl -rotate-1 text-(--text-color)/40 font-light text-center mt-7 mb-10"
              style={{ fontFamily: "var(--font-signature)" }}>
              QasimTanvir
            </h1>
            <div className="space-y-2">
              <p className="text-xs font-light text-(--text-color)/60"> MORE ABOUT ME </p>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-medium text-(--primary-color)"> Credentials </h2>
                <ArrowRight className="w-6 h-6 text-(--text-color)/30 group-hover:text-(--primary-color) transition" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Hero;