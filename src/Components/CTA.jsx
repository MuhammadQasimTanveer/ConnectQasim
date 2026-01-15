import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight} from 'lucide-react';

const CTA = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-8">
      <div className="relative bg-(--border-color)/20 border border-(--border-color) rounded-2xl p-8 md:p-12 md:px-30">

        <div className="absolute top-0 right-0 w-40 h-40 bg-(--secondary-color)/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-(--secondary-color)/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 text-center space-y-3">
          <h2 className="text-2xl md:text-5xl text-(--primary-color) text-center">
            Ready to transform your  <span className="text-(--secondary-color)">Vision</span> into reality?
          </h2>
          <p className="text-sm md:text-base text-(--text-color) text-center">
            Have a project in mind? Let's collaborate and make it happen.
          </p>
          <div className="flex justify-center pt-2">
            <Link to="/contact" className="group inline-flex items-center gap-2 px-6 py-3 border border-(--border-color) text-(--primary-color) rounded-full font-medium transition-all duration-300 hover:border-(--secondary-color)/50 hover:bg-(--dark-color)/40">
              Let's talk
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CTA;