import React from 'react'
import { FolderOpen } from "lucide-react";
import { Link } from 'react-router-dom';
import { projects } from "../utils/data";

const Projects = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-10">
            <h2 className="text-3xl md:text-4xl text-(--primary-color) my-14">My Projects</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <Link
                        key={index}
                        to={`/projects/${project.slug}`}
                        className="flex flex-col rounded-2xl bg-(--border-color)/20 border border-zinc-800/80 overflow-hidden"
                    >
                        <div className="w-full h-55 md:h-60 overflow-hidden p-2">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-97 rounded-t-2xl" />
                        </div>

                        <div className="p-6 flex flex-col gap-2">
                            <span className="text-xs text-(--text-color)/70">{project.category}</span>
                            <div className="flex items-center justify-between gap-2">
                                <h2 className="text-xl md:text-[22px] text-(--primary-color)/80"> {project.title} </h2>
                                <FolderOpen className="w-6 h-6 text-(--text-color)/60" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
export default Projects;