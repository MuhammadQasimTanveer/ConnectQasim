import React from 'react'
import { Linkedin, Github, SendHorizontal } from "lucide-react";

const ContactForm = () => {
  return (
    <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10 md:gap-20 p-10 md:py-25'>

      <div className='w-full'>
        <h2 className='text-4xl md:text-[44px] font-medium text-(--secondary-color)/80 mb-10'>
          <span className='text-(--primary-color)'> Let's build something </span>
          amazing!
        </h2>
        <p className="max-w-xl text-base text-(--subtext-color) mb-6">
          Reach out anytime - I'm  open to new opportunities and collaborations.
        </p>
        <div className="max-w-xl mb-6">
          <span className="text-base text-(--subtext-color)"> EMAIL AT </span>
          <div className="text-(--primary-color)/80 mt-2 rounded-md border border-(--primary-color)/20 px-4 py-3 ">
            qasimtanvir.qt84@gmail.com
          </div>
        </div>
        <span className="text-base text-(--subtext-color)"> Local Time - Islamabad, PK (UTC+5) </span>

        <div className='flex gap-4 py-8'>
          <Linkedin className='text-(--text-color) transition hover:text-[#0077b5] hover:scale-110 cursor-pointer ' />
          <Github className='text-(--text-color) transition hover:text-[#6e5494] hover:scale-110 cursor-pointer ' />
        </div>
      </div>

      <div className='w-full'>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-6">
            <input type="text" placeholder="Your Name *"
              className="w-full font-light text-(--primary-color)/90 rounded-md border border-(--dark-color) p-4 focus:outline-none focus:border-(--secondary-color) transition"
            />
            <input type="email" placeholder="Your Email *"
              className="w-full font-light text-(--primary-color)/90 rounded-md border border-(--dark-color) p-4 focus:outline-none focus:border-(--secondary-color) transition"
            />
          </div>
          <input type="text" placeholder="Your Subject *"
            className="w-full font-light text-(--primary-color)/90 rounded-md border border-(--dark-color) p-4 focus:outline-none focus:border-(--secondary-color) transition"
          />
          <textarea rows="6" placeholder="Your Message *"
            className="w-full font-light text-(--primary-color)/90 rounded-md border border-(--dark-color) p-4 focus:outline-none focus:border-(--secondary-color) transition"
          />

          <button type="submit" className="w-55 flex items-center justify-between text-(--body-color) bg-(--primary-color) rounded-full p-1 transition cursor-pointer group">
            <span className="pl-6 font-medium group-hover:text-(--secondary-color)">Contact Me</span>
            <div className="rounded-full bg-(--body-color)/90 p-2.5">
              <SendHorizontal className="w-5 h-5 text-(--primary-color) group-hover:text-(--secondary-color)" />
            </div>
          </button>
        </form>
      </div>
    </div>
  )
}
export default ContactForm