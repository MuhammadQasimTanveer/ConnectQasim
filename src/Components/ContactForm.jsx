import React, { useState } from 'react'
import { motion } from "framer-motion";
import { Linkedin, Github, SendHorizontal } from "lucide-react";

const ContactForm = () => {

  const [formData, setFormData] = useState({Name: '', Email: '', Subject: '',Message: ''});
  const [status, setStatus] = useState(""); 
  
  const handleChange = (e) => {
    setStatus("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Message sent successfully!");
    setFormData({ Name: '',Email: '', Subject: '', Message: ''});
  };

  return (
    <motion.div
      className='max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10 md:gap-20 p-10 md:py-25'
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8 }}
    >
      <motion.div
        className='w-full'
        initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
      >
        <motion.h2
          className='text-4xl md:text-[44px] font-medium text-(--secondary-color)/80 mb-10'
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className='text-(--primary-color)'> Let's build something </span>
          amazing!
        </motion.h2>

        <motion.p
          className="max-w-xl text-base text-(--subtext-color) mb-6"
          initial={{ opacity: 0 }}  whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
        >
          Reach out anytime - I'm open to new opportunities and collaborations.
        </motion.p>

        <motion.div
          className="max-w-xl mb-6"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="text-base text-(--subtext-color)"> EMAIL AT </span>
          <div className="text-(--primary-color)/80 mt-2 rounded-md border border-(--primary-color)/20 px-4 py-3 ">
            qasimtanvir.qt84@gmail.com
          </div>
        </motion.div>

        <motion.span
          className="text-base text-(--subtext-color)"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}
        >
          Local Time - Islamabad, PK (UTC+5)
        </motion.span>

        <motion.div
          className='flex gap-4 py-8'
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Linkedin className='text-(--text-color) transition hover:text-[#0077b5] cursor-pointer' />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Github className='text-(--text-color) transition hover:text-[#6e5494] cursor-pointer' />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className='w-full'
        initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <motion.div
            className="flex flex-col md:flex-row gap-6"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            <input type="text" placeholder="Your Name *" name="Name"
              required value={formData.Name} onChange={handleChange}
              className="w-full font-light text-(--primary-color)/90 rounded-md border border-(--dark-color) p-4 focus:outline-none focus:border-(--secondary-color) transition"
            />
            <input type="email" placeholder="Your Email *" name="Email"
              required value={formData.Email} onChange={handleChange}
              className="w-full font-light text-(--primary-color)/90 rounded-md border border-(--dark-color) p-4 focus:outline-none focus:border-(--secondary-color) transition"
            />
          </motion.div>

          <motion.input
            type="text" placeholder="Your Subject *" name="Subject"
            required value={formData.Subject} onChange={handleChange}
            className="w-full font-light text-(--primary-color)/90 rounded-md border border-(--dark-color) p-4 focus:outline-none focus:border-(--secondary-color) transition"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          />

          <motion.textarea
            rows="6" placeholder="Your Message *" name="Message"
            required value={formData.Message} onChange={handleChange}
            className="w-full font-light text-(--primary-color)/90 rounded-md border border-(--dark-color) p-4 focus:outline-none focus:border-(--secondary-color) transition"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
          />

          <motion.button
            type="submit"
            className="w-55 flex items-center justify-between text-(--body-color) bg-(--primary-color) rounded-full p-1 transition cursor-pointer group"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ y: -2 }} whileTap={{ y: 0 }}
          >
            <span className="pl-6 font-medium group-hover:text-(--secondary-color)">Contact Me</span>
            <div className="rounded-full bg-(--body-color)/90 p-2.5">
              <SendHorizontal className="w-5 h-5 text-(--primary-color) group-hover:text-(--secondary-color)" />
            </div>
          </motion.button>
          {status && ( <p className="text-green-500/70 font-light mt-2">{status}</p> )}
        </form>
      </motion.div>

    </motion.div>
  )
}
export default ContactForm