import React from "react";

const Footer = () => {
  return (
    <div className="max-w-6xl mx-auto mt-10 text-center space-y-3 px-6 pt-6 pb-25 md:py-12">
      <h2 className="text-2xl md:text-3xl font-light text-transparent bg-clip-text bg-linear-to-b from-(--text-color) to-(--primary-color) opacity-60 mb-4 cursor-default">
        Muhammad Qasim
      </h2>

      {/* <h2 className="text-2xl md:text-3xl font-light text-(--text-color) opacity-30 mb-5 cursor-default">
        Muhammad Qasim
      </h2> */}

      <p className="text-sm text-(--text-color)/40">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </div>
  );
};
export default Footer;