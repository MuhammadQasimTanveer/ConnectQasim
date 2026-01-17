import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-8">
      <motion.div
        className="relative bg-(--border-color)/20 border border-(--border-color) rounded-2xl p-8 md:p-12 md:px-30"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-(--secondary-color)/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-(--secondary-color)/5 rounded-full blur-3xl" />

        <div className="relative z-10 text-center space-y-3">
          <motion.h2
            className="text-2xl md:text-5xl text-(--primary-color) text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to transform your <span className="text-(--secondary-color)">Vision</span> into reality?
          </motion.h2>

          <motion.p
            className="text-sm md:text-base text-(--text-color) text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Have a project in mind? Let's collaborate and make it happen.
          </motion.p>

          <motion.div
            className="flex justify-center pt-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 150 }}
          >
            <Link to="/contact" className="group inline-flex items-center gap-2 px-6 py-3 border border-(--border-color) text-(--primary-color) rounded-full font-medium transition-all duration-300 hover:border-(--secondary-color)/50 hover:bg-(--dark-color)/40">
              Let's talk
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
export default CTA;