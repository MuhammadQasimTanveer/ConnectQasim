import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { projects } from "../utils/data";
import Navbar from "./Navbar";

const ProjectDetail = () => {
  const { prj } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const found = projects.find(p => p.slug === prj);
    if (found) {
      setProject(found);
    }
  }, [prj]);

  if (!project) return null;

  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 pt-14 pb-24 md:py-14">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-medium text-(--primary-color)/80">{project.title}</h1>
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm md:text-base px-4 py-2 bg-(--border-color)/60 text-(--text-color) rounded-xl">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>

        <p className="text-(--secondary-color)/70 mb-6">{project.category}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tools.map((tool, index) => (
            <span key={index} className="text-sm font-light text-(--text-color) bg-(--border-color)/80 rounded-full px-4 py-1">
              {tool}
            </span>
          ))}
        </div>
        <div className="w-full h:[160px] md:h-129 overflow-hidden bg-(--border-color)/20 rounded-2xl ">
          <img src={project.image} alt={project.title} className="w-full h-full"/>
        </div>

        <div className="space-y-6 mt-10">
          <div>
            <h3 className="text-lg md:text-xl text-(--primary-color)/90 mb-2"> Overview </h3>
            <p className="text-sm md:text-base font-light text-(--text-color)/90"> {project.overview} </p>
          </div>
          <div>
            <h3 className="text-lg md:text-xl text-(--primary-color)/90 mb-2"> Features </h3>
            <ul className="list-disc list-inside text-sm md:text-base font-light text-(--text-color)/90">
              {project.features.map((f, i) => ( <li key={i}> {f} </li> ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg md:text-xl text-(--primary-color)/90 mb-2"> Implementation </h3>
            <p className="text-sm md:text-base font-light text-(--text-color)/90"> {project.implementation} </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProjectDetail;