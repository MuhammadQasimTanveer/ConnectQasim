import React from 'react'
import { Link } from 'react-router-dom';
import { projects } from "../utils/data";

const Projects = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-10">
            <h2 className="text-3xl md:text-4xl text-(--primary-color) my-10 text-center">Projects</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <Link 
                      key={index} 
                      to={`/projects/${project.slug}`} 
                      className="flex flex-col bg-(--border-color)/20 rounded-2xl"
                    >
                        <div className="w-full h-60 overflow-hidden rounded-t-2xl">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-95"/>
                        </div>

                        <div className="p-7">
                            <span className="text-sm text-(--secondary-color)/80"> {project.category} </span>
                            <h2 className="text-lg md:text-xl text-(--primary-color)"> {project.title} </h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
export default Projects