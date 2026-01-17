import React, { useEffect, useState } from "react";
import loader from "../assets/Images/loader.gif";
import { motion } from "framer-motion";

const Loader = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const removeTimer = setTimeout(() => {
      setVisible(false);
      if (onFinish) onFinish();
    }, 3400);

    return () => {
      clearTimeout(removeTimer);
    };
  }, [onFinish]);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }} animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 3, ease: "easeInOut" }}
    >
      <motion.img 
        src={loader}  alt="Loading..." className="w-50 h-50 md:w-72 md:h-72 invert object-contain"
        initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </motion.div>
  );
};
export default Loader;