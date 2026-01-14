import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.png";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit', minute: '2-digit', hour12: true
  });
  const location = "Islamabad, Pakistan";

  return (
    <header className="w-full border-b border-(--border-color)/80 px-6 md:px-25 py-1 ">
      <div className="flex items-center justify-between md:px-9">

        <div className="cursor-pointer"> <img src={logo} alt="Logo" width={60} /> </div>

        <div className="hidden sm:flex flex-col items-end text-sm font-normal text-(--primary-color) gap-1">
          <span>{location} </span>
          <span> {formattedTime} </span>
        </div>

        <Link to="/contact"
          className="px-7 py-2 rounded-2xl font-medium text-(--primary-color) bg-(--dark-color)/50 hover:bg-(--primary-color) hover:text-(--dark-color) transition-all duration-300"
        >
          Let's talk
        </Link>
      </div>
    </header>
  );
};
export default Header;