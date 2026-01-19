import React from 'react'
import { FolderOpen } from "lucide-react";
import { Link } from 'react-router-dom';
import { projects } from "../utils/data";
import { motion } from "framer-motion";

const Projects = () => {
    const container = {
        hidden: {}, show: { transition: { staggerChildren: 0.15 } }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <motion.h2
                className="text-3xl md:text-4xl text-(--primary-color) my-13"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
                My Projects
            </motion.h2>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                variants={container} initial="hidden"
                whileInView="show" viewport={{ once: true, amount: 0.1 }}
            >
                {projects.map((project, index) => (
                    <motion.div key={index} variants={fadeUp}>
                        <Link
                            to={`/projects/${project.slug}`}
                            className="flex flex-col rounded-2xl bg-(--border-color)/20 border border-zinc-800/80 overflow-hidden"
                        >
                            <div className="w-full h-55 md:h-59 overflow-hidden p-2">
                                <img src={project.image} alt={project.title}
                                    className="w-full h-full opacity-97 rounded-t-[15px]"
                                />
                            </div>

                            <div className="p-6 flex flex-col gap-2">
                                <span className="text-xs text-(--text-color)/70">{project.category}</span>
                                <div className="flex items-center justify-between gap-2">
                                    <h2 className="text-xl md:text-[22px] text-(--primary-color)/80"> {project.title} </h2>
                                    <FolderOpen className="w-6 h-6 text-(--text-color)/60" />
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};
export default Projects;