import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import error404 from "../assets/Images/error404.png";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-5 px-6 pt-30">
      <img src={error404} alt="Error404" />

      <p className="text-base font-light text-(--text-color)/80">Sorry! The requested page was not found.</p>

      <Link to="/" className="inline-flex items-center justify-center gap-2 text-sm text-(--primary-color) rounded-full border border-(--dark-color) px-4 py-2  md:ml-6">
        <Home className="w-4 h-4" />
        Back to Home
      </Link>
    </div>
  );
};
export default NotFound;