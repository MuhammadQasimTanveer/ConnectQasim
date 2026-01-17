import React from 'react';
import { Globe, MonitorPlay, Server, Palette, Github, Linkedin, ArrowRight, Dot } from "lucide-react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const services = [
  "UI/UX Design", "MERN Stack App", "Nextjs App", "SPA's", "Figma", "React App", ".NET Desktop"
];

const Hero = () => {
  const image = {
    hidden: { opacity: 0, scale: 0.85, rotate: 0 },
    visible: { opacity: 1, scale: 1, rotate: 3, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <motion.div
        className="w-full overflow-hidden bg-(--border-color)/30 border border-(--border-color) rounded-full mb-5 py-1"
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
      >
        <Marquee autoFill speed={60}>
          {services.map((item, index) => (
            <div key={index} className="flex items-center font-light text-sm text-(--primary-color) mx-5">
              <Dot className="w-8 h-8 text-(--secondary-color)" />
              <span>{item}</span>
            </div>
          ))}
        </Marquee>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center pb-15">
        <motion.div
          className="flex flex-col items-start justify-center"
          variants={container} initial="hidden" animate="visible"
        >
          <div className="space-y-3">
            <motion.h2
              className="font-serif italic text-xl md:text-2xl text-(--secondary-color)/60 tracking-wide"
              variants={fadeUp}
            >
              Assalam o Allaikum!
            </motion.h2>

            <motion.h2
              className="text-3xl md:text-5xl text-(--text-color)" variants={fadeUp}
            >
              I'm <span className="text-[#FF6B6B]/50"> Muhammad Qasim </span>
              Working as Full Stack Engineer & UI Designer
            </motion.h2>

            <motion.p
              className="text-sm md:text-lg font-light text-(--text-color)/60" variants={fadeUp}
            >
              Crafting scalable web applications with seamless user interaction.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-wrap items-center gap-5 my-9 md:mt-7" variants={fadeUp}
          >
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-500/40 text-cyan-500 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500 hover:text-purple-300"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <div className="flex gap-5">
              <Link to="https://github.com/MuhammadQasimTanveer">
                <motion.div
                  whileHover={{ scale: 1.15, color: "#ffffff" }} whileTap={{ scale: 0.95 }}
                  className="text-(--text-color)"
                >
                  <Github className="w-6 h-6" />
                </motion.div>
              </Link>

              <Link to="https://www.linkedin.com/in/qasimtanvir04">
                <motion.div
                  whileHover={{ scale: 1.15, color: "#ffffff" }} whileTap={{ scale: 0.95 }}
                  className="text-(--text-color)"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center" variants={image} initial="hidden" animate="visible"
        >
          <motion.img
            src="" alt="Muhammad Qasim"
            className="w-55 md:w-70 rounded-3xl border border-(--primary-color)/30 rotate-3 transition-all duration-300 ease-in-out cursor-pointer"
            whileHover={{ scale: 1.03, rotate: 0 }}
          />
        </motion.div>
      </div>
      

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }}
        >
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
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
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
        </motion.div>
      </div>
    </div>
  );
};
export default Hero;