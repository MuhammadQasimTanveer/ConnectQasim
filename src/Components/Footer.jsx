import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div 
      className="max-w-6xl mx-auto mt-10 text-center space-y-3 px-6 pt-6 pb-25 md:py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9 }}
    >
      <motion.h2 
        className="text-2xl md:text-3xl font-light text-transparent bg-clip-text bg-linear-to-b from-(--text-color) to-(--primary-color) opacity-60 mb-4 cursor-default"
        initial={{ y: 40, opacity: 0, }}
        whileInView={{ y: 0, opacity: 0.6}}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        Muhammad Qasim
      </motion.h2>

      <motion.p 
        className="text-sm text-(--text-color)/40"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 0.4, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        &copy; {new Date().getFullYear()} All rights reserved.
      </motion.p>
    </motion.div>
  );
};
export default Footer;