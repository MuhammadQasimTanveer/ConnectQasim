import { useEffect } from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import initLenis from './lib/lenis'
import Project from './Pages/Project'
import Contact from './Pages/Contact'
import Service from './Pages/Service'
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ProjectDetail from "./Components/ProjectDetail";
import { Routes, Route} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

function App()
{
  useEffect(() => {
    const lenis = initLenis();
    return () => lenis.destroy();
  }, []);
  
  return (
    <div className='bg-(--body-color) min-h-screen h-auto w-full'>
      <ScrollToTop/>
      <Navbar/>

      <Routes>    
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About/>} />
         <Route path="/services" element={<Service/>} />
         <Route path="/projects" element={<Project/>} />
         <Route path="/projects/:prj" element={<ProjectDetail />} />
         <Route path="/contact" element={<Contact/>} />
      </Routes>

      <Footer/>
    </div>
  )
}
export default App