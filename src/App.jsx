import { useEffect } from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import initLenis from './lib/lenis'
import Project from './Pages/Project'
import Contact from './Pages/Contact'
import Service from './Pages/Service'
import NotFound from './Components/NotFound'
import { Routes, Route} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import ProjectDetail from "./Components/ProjectDetail";

function App()
{
  useEffect(() => {
    const lenis = initLenis();
    return () => lenis.destroy();
  }, []);
  
  return (
    <div className='bg-(--body-color) min-h-screen h-auto w-full'>
      <ScrollToTop/>

      <Routes>    
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About/>} />
         <Route path="/services" element={<Service/>} />
         <Route path="/projects" element={<Project/>} />
         <Route path="/projects/:prj" element={<ProjectDetail />} />
         <Route path="/contact" element={<Contact/>} />
         <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
export default App