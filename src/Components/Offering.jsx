import React from "react";
import { Link } from "react-router-dom";
import { Globe, MonitorPlay, Server, Palette, MoveRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Applications",
    desc: "I create fully responsive and modern websites tailored to user needs. Using React, Next.js, and Tailwind CSS, I focus on fast performance, smooth interactions, and consistent layouts across devices."
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "I design intuitive and engaging interfaces using Figma and Canva, focusing on clarity, smooth user interactions, and visual consistency to create enjoyable experiences."
  },
  {
    icon: Server,
    title: "MERN Stack Apps",
    desc: "I develop full-stack web applications using MongoDB, Express, React, and Node.js, connecting frontend and backend seamlessly. Each project includes APIs, real-time features, and is structured for smooth deployment."
  },
  {
    icon: MonitorPlay,
    title: ".NET Desktop Apps",
    desc: "I develop desktop applications using C# .NET, focusing on practical functionality and smooth user experience. Each application is customized to meet specific business or personal requirements."
  }
];

const Offering = () => {
  return (
    <div className="relative max-w-5xl mx-auto py-20 px-6">
      <div className="absolute top-8 left-[40%] w-[80%] h-70 blur-3xl opacity-27 md:opacity-17 rounded-full
          bg-linear-to-r from-(--secondary-color)/70 via-(--dark-color) to-(--border-color) pointer-events-none ">
      </div>

      <div className="relative z-10">
        <div className="mb-18 text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-(--primary-color) mb-4">
            What I <span className="text-(--secondary-color)">Offer?</span>
          </h2>
          <p className="max-w-2xl text-(--primary-color)/80 mx-auto">
            Providing tailored digital solutions that combine thoughtful design, reliable development, and practical results for real-world needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col justify-between bg-(--border-color)/30 border border-(--border-color) rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1">
                <div>
                  <Icon className="w-7 h-7 text-(--secondary-color)" />
                  <h3 className="text-lg text-(--text-color)/90 font-medium mt-6 mb-3"> {item.title} </h3>
                  <p className="text-sm text-(--primary-color)/80 mb-3"> {item.desc} </p>
                </div>

                <div className="flex items-center justify-center">
                  <Link to="/contact" className="flex items-center justify-center bg-(--dark-color)/60 rounded-full p-2">
                    <MoveRight className="w-7 h-7 text-(--secondary-color)/50" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Offering;