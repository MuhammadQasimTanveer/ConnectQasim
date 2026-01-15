import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../utils/data";
import Navbar from "./Navbar";

const ProjectDetail = () => {
  const { prj } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const found = projects.find(p => p.slug === prj);
    if (found) 
    {
      setProject(found);
    }
  }, [prj]);

  if (!project) return null;

  return (
  <>
    <Navbar />

    <div className="max-w-4xl mx-auto px-6 py-14">
      <h1 className="text-3xl font-semibold text-(--primary-color) mb-4">{project.title}</h1>
      <p className="text-(--secondary-color) mb-6">{project.category}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tools.map((tool, index) => (
          <span key={index} className="text-sm text-(--text-color) bg-(--border-color) rounded-full px-3 py-1">
            {tool}
          </span>
        ))}
      </div>

      <div className="w-full h:[160px] md:h-125 overflow-hidden bg-(--border-color)/20 rounded-2xl ">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      </div>

      <p className="text-(--text-color)/90 font-light mt-6">{project.description}</p>
      <p className="text-(--text-color)/90 font-light mt-6">{project.about}</p>
      <p className="text-(--text-color)/90 font-light mt-6">{project.implementation}</p>
    </div>
  </>
);
};
export default ProjectDetail;