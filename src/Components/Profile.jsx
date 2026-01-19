import React from 'react'
import { experience, education, frontend, coreDev, deployment, designing } from '../utils/data';
import portrait from "../assets/Images/personal-img.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Download } from 'lucide-react';
import { motion } from "framer-motion";
import 'swiper/css';

const summary = [
    `I'm <span class="text-(--primary-color)/80 font-normal">Muhammad Qasim</span>, a full-stack developer and UI/UX designer specializing in <span class="text-(--primary-color)/80 font-normal">web apps</span>, and <span class="text-(--primary-color)/80 font-normal">.NET desktop apps</span>. I focus on combining design with functional software to create clear and consistent solutions.`,
    `I translate designs from <span class="text-(--primary-color)/80 font-normal">Figma</span> into interactive prototypes and functional interfaces using <span class="text-(--primary-color)/80 font-normal">React</span>, <span class="text-(--primary-color)/80 font-normal">Next.js</span>, and <span class="text-(--primary-color)/80 font-normal">Tailwind CSS</span>, integrating them with <span class="text-(--primary-color)/80 font-normal">Node.js</span>, <span class="text-(--primary-color)/80 font-normal">Express</span>, and <span class="text-(--primary-color)/80 font-normal">MongoDB</span>. I build clean, maintainable code with reusable components, streamlining development workflows for consistent and reliable applications. `,
    `My work emphasizes creating coherent solutions that balance <span class="text-(--primary-color)/80 font-normal">functionality</span> and <span class="text-(--primary-color)/80 font-normal">usability</span>, delivering real value to users, streamlining workflows, and generating a <span class="text-(--primary-color)/80 font-normal">meaningful impact</span>.`
];

const Card = ({ title, tools }) => {
    return (
        <div className="h-full flex flex-col bg-(--border-color)/30 rounded-2xl px-10 py-5">
            <h3 className="text-xl text-center text-(--secondary-color) mb-8">{title}</h3>
            <div className="flex flex-wrap justify-center gap-7">
                {tools.map((tool, i) => (
                    <div key={i} className="flex flex-col items-center gap-3">
                        <img src={tool.icon} alt={tool.name}
                            className="w-12 h-12 cursor-pointer opacity-60 transition duration-300 hover:opacity-100 hover:scale-104"
                        />
                        <span className="text-xs text-(--subtext-color)">{tool.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Profile = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="flex flex-col md:flex-row items-start gap-12 py-10">
                <motion.div
                    className="hidden md:flex w-70 lg:w-80 shrink-0 flex-col items-center bg-(--dark-color)/35 rounded-4xl p-5"
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.6 }}
                >
                    <div className="w-full rounded-3xl overflow-hidden">
                        <motion.img
                            src={portrait} alt="Muhammad Qasim"  className="w-full h-full"
                            initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        />
                    </div>
                    <motion.span
                        className="text-base font-normal text-center text-(--primary-color)/60 mt-8"
                        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        qasimtanvir.qt84@gmail.com
                    </motion.span>
                </motion.div>

                <motion.div
                    className="flex flex-col items-start md:mr-4"
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                    viewport={{ once: true }} transition={{ duration: 0.6 }}
                >
                    <motion.h2
                        className="text-3xl text-(--primary-color) mb-7"
                        initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }} viewport={{ once: true }}
                    >
                        Summary
                    </motion.h2>

                    <div className="space-y-4 text-base font-light text-(--text-color) mb-6">
                        {summary.map((para, index) => (
                            <motion.p
                                key={index}
                                dangerouslySetInnerHTML={{ __html: para }}
                                className="text-justify leading-6.5"
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.1 }} viewport={{ once: true }}
                            />
                        ))}
                    </div>

                    <a href="/resume.pdf" download="Muhammad_Qasim.pdf"
                        className="inline-flex w-auto items-center gap-4 px-6 py-3 border border-blue-500 rounded-lg text-(--primary-color) transform transition-transform duration-200 hover:-translate-y-1 hover:bg-transparent group"
                    >
                        <Download className="w-5 h-5 text-blue-500/50 group-hover:animate-bounce" />
                        Download Resume
                    </a>
                </motion.div>
            </div>

            <div className='flex flex-col md:flex-row gap-10 py-10'>
                <div className='md:w-1/2 w-full'>
                    <motion.h2
                        className="text-2xl font-normal text-(--primary-color)"
                        initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.5 }}
                    >
                        Education
                    </motion.h2>

                    {education.map((edu, index) => {
                        const Icon = edu.icon;
                        return (
                            <motion.div
                                key={index}
                                className='flex flex-row items-start justify-start p-8 gap-6 mt-6 bg-(--border-color)/20 border border-(--border-color) hover:border-(--secondary-color)/40 transition-all duration-300 rounded-xl cursor-pointer'
                                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.15 }}
                            >
                                <span>
                                    <Icon className='w-9 h-9 text-(--primary-color)/80' />
                                </span>
                                <div>
                                    <span className="text-sm text-(--text-color)/70">{edu.period}</span>
                                    <p className='text-xl text-(--secondary-color)'>{edu.degree}</p>
                                    <p className='text-sm text-(--text-color)/70 mt-1'>{edu.institute}</p>
                                    <p className='text-base text-(--text-color) mt-4'>{edu.info}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className='md:w-1/2 w-full'>
                    <motion.h2
                        className="text-2xl font-normal text-(--primary-color)"
                        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.5 }}
                    >
                        Experience
                    </motion.h2>

                    {experience.map((exp, index) => {
                        const Icon = exp.icon;
                        return (
                            <motion.div
                                key={index}
                                className='flex flex-row items-start justify-start p-8 gap-6 mt-6 bg-(--border-color)/20 border border-(--border-color) hover:border-(--secondary-color)/40 transition-all duration-300 rounded-xl cursor-pointer'
                                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.15 }}
                            >
                                <span>
                                    <Icon className='w-9 h-9 text-(--primary-color)/80' />
                                </span>
                                <div>
                                    <span className="text-sm text-(--text-color)/70">{exp.period}</span>
                                    <p className='text-xl text-(--secondary-color)'>{exp.role}</p>
                                    <p className='text-sm text-(--text-color)/70 mt-1'>{exp.company}</p>
                                    <p className='text-base text-(--text-color) mt-4'>{exp.info}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <div className="py-10">
                <h2 className="text-2xl font-normal text-(--primary-color) mb-6">Skills</h2>
                <div className="w-full">
                    <Swiper modules={[Autoplay]} slidesPerView={3} spaceBetween={20}
                        loop={true} speed={1000} autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
                    >
                        <SwiperSlide> <Card title="Designing" tools={designing} /> </SwiperSlide>
                        <SwiperSlide> <Card title="Frontend" tools={frontend} /> </SwiperSlide>
                        <SwiperSlide> <Card title="Core Development" tools={coreDev} /> </SwiperSlide>
                        <SwiperSlide> <Card title="Deployment" tools={deployment} /> </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
export default Profile