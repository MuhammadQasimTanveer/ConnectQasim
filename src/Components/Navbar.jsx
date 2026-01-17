import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Mail, Folder, Layers, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const clickSound = () => {
    const clickSound = new Audio("/clickMouse.wav");
    clickSound.volume = 0.1;
    clickSound.play();
  };

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: User, label: "About", path: "/about" },
    { icon: Layers, label: "Services", path: "/services" },
    { icon: Folder, label: "Projects", path: "/projects" },
    { icon: Mail, label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="fixed right-10 top-1/2 -translate-y-1/2 z-85 hidden md:flex flex-col items-end gap-2">
        <motion.div className="p-0.5">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-black/60 backdrop-blur-xl border border-(--border-color) rounded-full p-3.5 text-(--primary-color)/70 hover:text-(--secondary-color) transition-colors duration-300 cursor-pointer"
            whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="bg-black/60 backdrop-blur-xl border border-(--border-color) rounded-full p-1.5"
              exit={{ scale: 0.95, opacity: 0 }} transition={{ duration: 0.1, ease: "easeOut" }}  
            >
              <div className="flex flex-col items-center gap-7">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={index} to={item.path} onClick={clickSound}
                      className={({ isActive }) =>`relative p-2.5 rounded-full tooltip tooltip-left 
                      ${isActive
                          ? "text-(--primary-color)/90 bg-(--dark-color)/60"
                          : "text-(--primary-color)/50 hover:bg-(--dark-color)/30"
                        }`
                      }
                      data-tip={item.label}
                    >
                      <motion.div
                        whileTap={{y: -6, transition: {type:"spring",stiffness:320,damping: 13,mass: 1}}}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.div>
                    </NavLink>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-85 md:hidden flex items-end gap-2">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="bg-black/60 backdrop-blur-xl border border-(--border-color) rounded-full p-1.5"
              exit={{ scale: 0.95, opacity: 0 }} transition={{ duration: 0.1, ease: "easeOut" }}
            >
              <div className="flex items-center gap-5">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={index} to={item.path} onClick={clickSound}
                      className={({ isActive }) =>
                        `relative p-3 rounded-full tooltip tooltip-top 
                        ${isActive
                          ? "text-(--primary-color)/90 bg-(--dark-color)/60"
                          : "text-(--primary-color)/50 hover:bg-(--dark-color)/30"
                        }`
                      }
                      data-tip={item.label}
                    >
                      <motion.div
                        whileTap={{y: -6, transition: {type:"spring",stiffness:320,damping: 13,mass: 1}}}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.div>
                    </NavLink>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div className="p-1">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-black/60 backdrop-blur-xl border border-(--border-color) rounded-full p-4 text-(--primary-color)/70 hover:text-(--secondary-color) transition-colors duration-300 cursor-pointer"
            whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </motion.div>
      </nav>
    </>
  );
};
export default Navbar;