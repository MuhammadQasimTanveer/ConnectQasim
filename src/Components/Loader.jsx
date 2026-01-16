import React, { useEffect, useState } from "react";
import loader from "../assets/Images/loader.gif";

const Loader = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => { setFade(true); }, 3000);

    const removeTimer = setTimeout(() => {
      setVisible(false);
      if (onFinish) onFinish();
    }, 3600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-600 ${
        fade ? "opacity-0" : "opacity-100"
      }`}>
      <img src={loader} alt="Loading..." className="w-50 h-50 md:w-72 md:h-72 invert object-contain" />
    </div>
  );
};
export default Loader;