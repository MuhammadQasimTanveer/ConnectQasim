import { NavLink } from "react-router-dom";
import { Home, User, Mail, Folder, Layers } from "lucide-react";

const Navbar = () => {
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
      <nav className="fixed right-10 top-1/2 -translate-y-1/2 z-85 hidden md:flex">
        <div className="bg-black/60 backdrop-blur-xl border border-(--border-color) rounded-full p-1.5">
          <div className="flex flex-col items-center gap-7 ">
            {navItems.map((item, index) => (
              <NavLink
                key={index} to={item.path}
                onClick={clickSound}
                className={({ isActive }) => `relative p-2.5 rounded-full tooltip tooltip-left
                  ${isActive 
                    ? 'text-(--primary-color)/90 bg-(--dark-color)/60' 
                    : 'text-(--primary-color)/50 hover:bg-(--dark-color)/30'}`
                }
                data-tip={item.label} 
              >
                <item.icon className="w-5 h-5"/>
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-85 md:hidden">
        <div className="bg-black/60 backdrop-blur-xl border border-(--border-color) rounded-full p-1.5">
          <div className="flex items-center gap-5">
            {navItems.map((item, index) => (
              <NavLink
                key={index} to={item.path} 
                onClick={clickSound}
                className={({ isActive }) => `relative p-3 rounded-full tooltip tooltip-top
                  ${isActive 
                    ? 'text-(--primary-color)/90 bg-(--dark-color)/60' 
                    : 'text-(--primary-color)/50 hover:bg-(--dark-color)/30'}`
                }
                data-tip={item.label}
              >
                <item.icon className="w-5 h-5"/>
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;